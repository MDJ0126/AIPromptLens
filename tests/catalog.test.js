'use strict';
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const source=fs.readFileSync('site/catalog.js','utf8')+'\n'+fs.readFileSync('site/demos.js','utf8')+'\n'+fs.readFileSync('site/concepts.js','utf8')+'\n'+fs.readFileSync('site/asset-art.js','utf8')+'\n'+fs.readFileSync('site/covers.js','utf8')+'\n'+fs.readFileSync('site/daily.js','utf8')+'\n'+fs.readFileSync('site/suggestions.js','utf8'),context=vm.createContext({});
vm.runInContext(source+'\nglobalThis.catalog={terms,categories,illustration};',context);
const {terms,categories,illustration}=context.catalog;
test('340 complete terms with unique ids and valid categories',()=>{
 assert.equal(terms.length,340);assert.equal(new Set(terms.map(t=>t.id)).size,340);
 for(const t of terms){assert.ok(categories.some(c=>c.id===t.category));for(const key of ['name','en','desc','ko','promptEn','visual'])assert.ok(t[key]);}
});
test('Every term has an accessible and distinct illustration',()=>{
 const svgs=terms.map(illustration);assert.equal(new Set(svgs).size,340);
 svgs.forEach((svg,i)=>{assert.ok(svg.startsWith('<svg'));assert.ok(svg.endsWith('</svg>'));assert.ok(svg.includes(terms[i].name+(terms[i].visualType==='dictionary'?' 용어 카드':' 개념 도식')));assert.ok(!svg.includes('undefined'));assert.ok(!svg.includes('NaN'));});
});
test('Search, selection, composer, language and persistence interactions',()=>{
 const elements=new Map(),listeners=new Map(),storage=new Map();
 function el(id){if(elements.has(id))return elements.get(id);const obj={value:'',innerHTML:'',textContent:'',hidden:false,disabled:false,dataset:{},setAttribute(){},classList:{toggle(){},add(){},remove(){}},append(){},remove(){},select(){},showModal(){this.open=true;},close(){this.open=false;},removeAttribute(){},addEventListener(type,fn){listeners.set(id+':'+type,fn);}};elements.set(id,obj);return obj;}
 const doc={getElementById:el,createElement:()=>el('temp'),querySelector:s=>el(s),querySelectorAll:()=>[],addEventListener(){},body:{append(){},classList:{toggle(){},add(){}}},activeElement:{tagName:'BODY'}};
 const ctx=vm.createContext({document:doc,localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},matchMedia:()=>({matches:true}),navigator:{clipboard:{writeText:async()=>{}}},setTimeout:()=>0,clearTimeout(){}});
 vm.runInContext(source+'\n'+fs.readFileSync('site/app.js','utf8')+'\nglobalThis.api={toggleSelected,visibleTerms,composePrompt};',ctx);
 assert.equal(ctx.api.visibleTerms().length,340);
 const renderedIds=()=>[...el('cards').innerHTML.matchAll(/data-detail="(\d+)"/g)].map(m=>Number(m[1]));
 const page=n=>listeners.get('pagination:click')({target:{closest:()=>({dataset:{page:String(n)},disabled:false})}});
 assert.deepEqual(renderedIds(),Array.from(terms.slice(0,24),t=>t.id));
 page(2);assert.deepEqual(renderedIds(),Array.from(terms.slice(24,48),t=>t.id));
 ctx.api.toggleSelected(terms[24].id);assert.equal(renderedIds()[0],terms[24].id);
 ctx.api.toggleSelected(terms[24].id);
 page(15);assert.deepEqual(renderedIds(),Array.from(terms.slice(336),t=>t.id));
 page(16);assert.equal(renderedIds().length,4);
 listeners.get('categories:click')({target:{closest:()=>({dataset:{category:terms[0].category}})}});
 assert.deepEqual(renderedIds(),Array.from(terms.filter(t=>t.category===terms[0].category).slice(0,24),t=>t.id));
 listeners.get('categories:click')({target:{closest:()=>({dataset:{category:'all'}})}});
 page(2);el('search').value='어깨';listeners.get('.chips:click')({target:{closest:()=>({dataset:{filter:'all'}})}});
 assert.equal(renderedIds().length,1);assert.equal(el('pagination').hidden,true);
 el('search').value='';listeners.get('reset-filters:click')();
 assert.equal(renderedIds().length,24);

 for(const genre of ['action','rpg','shooter','platformer','strategy','puzzle','horror','adventure','simulation','racing','sports','rhythm']){listeners.get('.chips:click')({target:{closest:()=>({dataset:{filter:genre}})}});const visible=ctx.api.visibleTerms();assert.ok(visible.length>0);assert.ok(visible.every(term=>term.genres.includes(genre)));}
 el('search').value='스프링';listeners.get('.chips:click')({target:{closest:()=>({dataset:{filter:'racing'}})}});assert.ok(ctx.api.visibleTerms().some(term=>term.slug==='spring-damper'));
 el('search').value='';listeners.get('.chips:click')({target:{closest:()=>({dataset:{filter:'all'}})}});
assert.equal(el('copy').disabled,true);
 assert.ok(!el('cards').innerHTML.includes('자세히 보기'));assert.ok(el('cards').innerHTML.includes('aria-haspopup="dialog"'));
 let opened=null;ctx.loadArticle=term=>{opened=term.id;};
 listeners.get('cards:click')({target:{closest:()=>({dataset:{detail:'99'}})}});assert.equal(opened,99);assert.equal(el('detail').open,true);el('detail').close();
 listeners.get('cards:click')({target:{closest:()=>({dataset:{save:'99'}})}});assert.equal(el('detail').open,false);assert.equal(opened,99);
 listeners.get('cards:click')({target:{closest:()=>({dataset:{add:'99'}})}});assert.equal(el('detail').open,false);assert.equal(el('selection-count').textContent,1);
 listeners.get('cards:click')({target:{closest:()=>({dataset:{add:'99'}})}});assert.equal(el('selection-count').textContent,0);

 listeners.get('composer-nav:click')();assert.equal(el('main').hidden,true);assert.equal(el('composer-panel').hidden,false);
 listeners.get('explore-nav:click')();assert.equal(el('main').hidden,false);assert.equal(el('composer-panel').hidden,true);
 const beforeSelectionMarkup=el('cards').innerHTML;ctx.api.toggleSelected(4);assert.equal(el('cards').innerHTML,beforeSelectionMarkup,'Adding a term must not replace preview markup');assert.ok(el('prompt').textContent.includes('동작을 짧게 멈추는'));
 assert.equal(JSON.parse(storage.get('promptlens-v1')).selected[0],4);
 listeners.get('composer-nav:click')();assert.ok(el('prompt').textContent.includes('動作')||el('prompt').textContent.includes('동작'));assert.equal(el('composer-nav-count').textContent,1);
 listeners.get('explore-nav:click')();assert.equal(el('selection-count').textContent,1);
 el('search').value='어깨';assert.equal(ctx.api.visibleTerms().length,1);
 listeners.get('.language:click')({target:{closest:()=>({dataset:{lang:'en'}})}});assert.ok(ctx.api.composePrompt().includes('brief hit stop'));
 el('idea').value='<img src=x onerror=alert(1)>';listeners.get('idea:input')();assert.ok(el('prompt').textContent.includes('<img'));assert.equal(el('prompt').innerHTML,'');
 ctx.api.toggleSelected(4);assert.equal(el('selection-count').textContent,0);
});


test('Description suggestions are deduplicated, relevant, and respect explicit exclusions',()=>{
 const ctx=vm.createContext({});
 vm.runInContext(fs.readFileSync('site/suggestions.js','utf8')+'\nglobalThis.suggest=suggestTechniques;',ctx);
 const result=ctx.suggest('여러 적과 싸우고 구르기로 회피하는 3인칭 액션 게임');
 for(const id of [0,3,4,8,12,14])assert.ok(result.some(r=>r.id===id));
 assert.equal(new Set(result.map(r=>r.id)).size,result.length);
 assert.ok(result.every(r=>r.reasons.length&&r.matches.length));
 assert.equal(ctx.suggest('').length,0);
 assert.equal(ctx.suggest('점프는 제외하고 만들어요').length,0);
 assert.equal(ctx.suggest('no combat').length,0);
 assert.equal(ctx.suggest('아직 정해지지 않은 게임').length,0);
});
test('Action previews autoplay; dictionary entries use honest static covers',()=>{
 for(const t of terms){const svg=illustration(t);if(t.visualType==='dictionary'){assert.ok(svg.includes('동작 시연 아님'));assert.ok(!svg.includes('class="demo '));continue;}assert.ok(svg.includes('class="demo '));assert.ok(svg.includes('phase-label'));assert.ok(svg.includes('개념 도식'));assert.ok(!svg.includes('undefined'));}
 const css=fs.readFileSync('site/style.css','utf8');
 assert.ok(css.includes('@keyframes hitApproach'));
 assert.ok(css.includes('33%,66%{transform:translateX(54px)}'));
 assert.ok(css.includes('animation-play-state:running!important'));

});

test('Examples always autoplay and modal locks page scrolling',()=>{const css=fs.readFileSync('site/style.css','utf8');assert.ok(css.includes('animation-play-state:running!important'));assert.ok(css.includes('html:has(#detail[open]),body:has(#detail[open]){overflow:hidden'));assert.ok(!fs.readFileSync('site/index.html','utf8').includes('id="animation-toggle"'));});
