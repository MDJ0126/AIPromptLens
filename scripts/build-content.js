'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),dir=path.join(root,'site/articles');
const rows=fs.readdirSync(dir).filter(f=>f.endsWith('.md')).map(file=>{
 const raw=fs.readFileSync(path.join(dir,file),'utf8').replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');
 const match=raw.match(/^---\n([\s\S]*?)\n---\n/);
 if(!match)throw Error(file+': metadata missing');
 const row=JSON.parse(match[1]);
 for(const key of ['id','slug','category','name','en','desc','ko','promptEn','visual','tags'])if(row[key]===undefined)throw Error(file+': missing '+key);
 if(row.reviewStatus!=='source-reviewed'||!/^\d{4}-\d{2}-\d{2}$/.test(row.reviewedAt||'')||!row.reviewScope||!row.reviewLimit||!row.reviewSources?.length||!row.reviewHistory?.some(h=>h.date===row.reviewedAt))throw Error(file+': review record missing');
 if(!/^[a-z][a-z0-9-]*$/.test(row.slug)||file!==row.slug+'.md')throw Error(file+': slug mismatch');
 if(!Number.isInteger(row.id)||!Array.isArray(row.tags))throw Error(file+': invalid metadata');
 if(!Array.isArray(row.genres)||!row.genres.length||row.genres.some(g=>!["action","rpg","shooter","platformer","strategy","puzzle","horror","adventure","simulation","racing","sports","rhythm"].includes(g)))throw Error(file+': invalid genres');
 if(row.kind!=='concept'&&(!raw.includes('## Unity\n')||!raw.includes('## Unreal\n')))throw Error(file+': engine examples missing');
 return row;
}).sort((a,b)=>a.id-b.id);
if(new Set(rows.map(r=>r.id)).size!==rows.length)throw Error('Duplicate article ids');
const file=path.join(root,'site/catalog.js'),old=fs.readFileSync(file,'utf8');
const generated='const terms = '+JSON.stringify(rows,null,2)+';\n\n';
const next=old.replace(/const terms = [\s\S]*?(?=\nfunction illustration)/,generated);
if(next===old&&!old.includes(generated))throw Error('Catalog marker missing');
if(process.argv.includes('--check')){
 if(old!==next){console.error('Catalog is stale. Run node scripts/build-content.js');process.exitCode=1;}
 else console.log(rows.length+' Markdown articles match the catalog');
}else{fs.writeFileSync(file,next);console.log('Built catalog from '+rows.length+' Markdown articles');}
