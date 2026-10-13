'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {parseArticle}=require('../site/article-parser.js');
const files=fs.readdirSync('site/articles').filter(f=>f.endsWith('.md'));
test('Markdown articles validate code examples or concept explanations',()=>{
 assert.equal(files.length,340);
 const ids=new Set(),names=new Set();
 for(const file of files){
  const raw=fs.readFileSync('site/articles/'+file,'utf8'),article=parseArticle(raw);
  assert.equal(article.metadata.slug+'.md',file);assert.ok(!ids.has(article.metadata.id));ids.add(article.metadata.id);
  assert.equal(article.metadata.reviewStatus,'source-reviewed');assert.match(article.metadata.reviewedAt,/^\d{4}-\d{2}-\d{2}$/);assert.ok(article.metadata.reviewScope);assert.ok(article.metadata.reviewSources.length);assert.ok(article.metadata.reviewHistory.some(h=>h.date===article.metadata.reviewedAt));
  if(article.metadata.kind==='concept'){assert.ok(article.blocks.some(b=>b.section==='개념 설명'));assert.ok(article.blocks.some(b=>b.section==='비교와 선택'));assert.equal(article.blocks.filter(b=>b.type==='code').length,0);continue;}
  for(const engine of ['Unity','Unreal']){
   const blocks=article.blocks.filter(b=>b.section===engine&&b.type==='code');assert.equal(blocks.length,1);assert.ok(blocks[0].text.length>50);
   assert.equal(blocks[0].language,engine==='Unity'?'csharp':'cpp');
  }
  assert.ok(article.blocks.some(b=>b.section==='핵심 구조'&&b.type==='paragraph'));
  assert.ok(article.blocks.some(b=>b.section==='적용 방법'&&b.type==='paragraph'));
  assert.ok(!raw.includes('## 검증 상태'));assert.ok(!raw.includes('## 코드 범위'));assert.ok(!/[ぁ-んァ-ン]/.test(raw));
  const code=article.blocks.find(b=>b.section==='Unity'&&b.type==='code').text;
  const className=code.match(/class (\w+)/)[1];assert.ok(!names.has(className));names.add(className);
 }
});
test('Parser preserves code and rejects malformed fences; HTML stays plain text',()=>{
 const ticks=String.fromCharCode(96).repeat(3);
 const raw='---\n{"id":1}\n---\n\n## Unity\n\n'+ticks+'csharp\nif (a < b) { }\n<img src=x onerror=alert(1)>\n'+ticks+'\n\n## 설명\n\n<script>bad()</script>\n';
 const result=parseArticle(raw);assert.ok(result.blocks.find(b=>b.type==='code').text.includes('a < b'));
 assert.equal(result.blocks.find(b=>b.type==='paragraph').text,'<script>bad()</script>');
 assert.throws(()=>parseArticle('---\n{}\n---\n'+ticks+'cpp\nunfinished'));
});
test('Engine tabs, code copy and out-of-order article loads use the correct article',async()=>{
 const elements=new Map(),requests=new Map(),copy=[];
 function create(tag){return {tag,textContent:'',innerHTML:'',value:'',children:[],disabled:false,handlers:{},classList:{add(){},toggle(){}},showModal(){this.open=true;},close(){this.open=false;},removeAttribute(){},append(...nodes){this.children.push(...nodes);},setAttribute(){},addEventListener(type,fn){this.handlers[type]=fn;}};}
 function el(id){if(!elements.has(id))elements.set(id,create('div'));return elements.get(id);}
 const doc={getElementById:el,querySelectorAll:()=>[],createElement:create,querySelector:el,addEventListener(){},body:create('body'),activeElement:{tagName:'BODY'}};
 const ctx=vm.createContext({document:doc,parseArticle,Map,localStorage:{getItem:()=>null,setItem(){}},setTimeout:()=>0,clearTimeout(){},navigator:{clipboard:{writeText:async text=>copy.push(text)}},toast(){},fetch:url=>new Promise(resolve=>requests.set(url,resolve))});
 vm.runInContext(fs.readFileSync('site/clipboard.js','utf8')+'\n'+fs.readFileSync('site/syntax.js','utf8')+'\n'+fs.readFileSync('site/articles-ui.js','utf8')+'\nglobalThis.ui={loadArticle};',ctx);
 const article=(slug)=>parseArticle(fs.readFileSync('site/articles/'+slug+'.md','utf8')).metadata;
 const first=ctx.ui.loadArticle(article('hit')),second=ctx.ui.loadArticle(article('dash'));
 requests.get('articles/dash.md')({ok:true,text:async()=>fs.readFileSync('site/articles/dash.md','utf8')});await second;
 assert.equal(el('article-review').children[0].textContent,'최근 업데이트 · '+article('dash').reviewedAt);assert.equal(el('article-review').children[1].textContent,article('dash').reviewScope);
 requests.get('articles/hit.md')({ok:true,text:async()=>fs.readFileSync('site/articles/hit.md','utf8')});await first;
 await el('article-code').children.at(-1).children[0].children[1].handlers.click();assert.ok(copy[0].includes('DashExample'));assert.ok(!copy[0].includes('HitExample'));
 el('article-engines').handlers.click({target:{closest:()=>({dataset:{articleEngine:'Unreal'}})}});
 await el('article-code').children.at(-1).children[0].children[1].handlers.click();assert.ok(copy[1].includes('UpdateDash'));assert.ok(!copy[1].includes('MonoBehaviour'));
 vm.runInContext(['catalog.js','demos.js','concepts.js','asset-art.js','covers.js','suggestions.js','daily.js','app.js'].map(file=>fs.readFileSync('site/'+file,'utf8')).join('\n'),ctx);
 await vm.runInContext('openDetail(4)',ctx);
 assert.equal(el('detail').open,true);
 assert.equal(el('article-file').href,'articles/hit.md');
 await el('article-code').children.at(-1).children[0].children[1].handlers.click();assert.ok(copy[2].includes('HitExample'));
 el('article-engines').handlers.click({target:{closest:()=>({dataset:{articleEngine:'Unreal'}})}});
 await el('article-code').children.at(-1).children[0].children[1].handlers.click();assert.ok(copy[3].includes('StartHitStop'));
 const conceptual=ctx.ui.loadArticle(article('baked-lighting'));
 requests.get('articles/baked-lighting.md')({ok:true,text:async()=>fs.readFileSync('site/articles/baked-lighting.md','utf8')});await conceptual;
 assert.equal(el('article-engines').hidden,true);assert.equal(el('article-code').innerHTML,'');assert.equal(el('article-heading-title').textContent,'개념과 선택 기준');
 await ctx.ui.loadArticle(article('hit'));assert.equal(el('article-engines').hidden,false);


});

test('Syntax coloring preserves every example and recognizes comments, keywords and strings',()=>{
 const {tokenizeCode}=require('../site/syntax.js');
 for(const file of files){
  const article=parseArticle(fs.readFileSync('site/articles/'+file,'utf8'));
  for(const block of article.blocks.filter(b=>b.type==='code'))
   assert.equal(tokenizeCode(block.text).map(t=>t.text).join(''),block.text);
 }
 const tokens=tokenizeCode('public float speed = 3f; // note\nstring name = "<img src=x>";');
 assert.ok(tokens.some(t=>t.kind==='keyword'&&t.text==='public'));
 assert.ok(tokens.some(t=>t.kind==='comment'&&t.text==='// note'));
 assert.ok(tokens.some(t=>t.kind==='string'&&t.text.includes('<img')));
});


test('Every example opening brace occupies its own line',()=>{
 const {tokenizeCode}=require('../site/syntax.js');
 for(const file of files)for(const block of parseArticle(fs.readFileSync('site/articles/'+file,'utf8')).blocks.filter(b=>b.type==='code')){
  const plain=tokenizeCode(block.text).map(t=>['string','comment'].includes(t.kind)?t.text.replace(/[^\n]/g,' '):t.text).join('');
  for(const line of plain.split('\n'))if(line.includes('{'))assert.equal(line.trim(),'{',file);
 }
});

test('Inline URLs become safe links without losing surrounding text',()=>{
 const ctx=vm.createContext({document:{createElement:tag=>({tag,children:[],append(...nodes){this.children.push(...nodes)}}),getElementById:()=>({addEventListener(){}})}});
 vm.runInContext(fs.readFileSync('site/articles-ui.js','utf8')+'\nglobalThis.linkText=appendLinkedText;',ctx);
 const text='확인 자료: https://example.com/doc(test). 다음 [공식 문서](https://example.com/api) 참고';
 const p={children:[],append(...nodes){this.children.push(...nodes)}};ctx.linkText(p,text);
 const links=p.children.filter(n=>n.tag==='a');assert.equal(links.length,2);assert.equal(links[0].href,'https://example.com/doc(test)');assert.equal(links[1].textContent,'공식 문서');assert.equal(links[1].rel,'noopener noreferrer');assert.equal(p.children.map(n=>n.textContent).join(''),'확인 자료: https://example.com/doc(test). 다음 공식 문서 참고');
});
