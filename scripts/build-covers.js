'use strict';
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});
const files=['catalog','demos','concepts','asset-art','animation-art','covers'];
vm.runInContext(files.map(name=>fs.readFileSync(path.join(root,'site',name+'.js'),'utf8')).join('\n')+'\nglobalThis.art={terms,composeArticleCover};',ctx);
const folder=path.join(root,'site/covers');fs.mkdirSync(folder,{recursive:true});
for(const term of ctx.art.terms){const filename=path.join(folder,term.slug+'.svg'),content=ctx.art.composeArticleCover(term);if(process.argv.includes('--check')){if(!fs.existsSync(filename)||fs.readFileSync(filename,'utf8')!==content)throw Error('Cover stale: '+term.slug);}else fs.writeFileSync(filename,content);}
console.log(ctx.art.terms.length+' individual SVG covers '+(process.argv.includes('--check')?'verified':'generated'));
