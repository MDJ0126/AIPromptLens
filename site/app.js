'use strict';
const $ = id => document.getElementById(id);
function readState() {try {const v=JSON.parse(localStorage.getItem('promptlens-v1'));return v&&typeof v==='object'?v:{};}catch{return {};}}
const stored=readState();
const ids = values => new Set(Array.isArray(values)?values.filter(id=>terms.some(t=>t.id===id)):[]);
let selected=ids(stored.selected), saved=ids(stored.saved), category='all', filter='all', savedOnly=false, language=stored.language==='en'?'en':'ko', detailId=null, activeView='explore';
const PAGE_SIZE=24;
let currentPage=1, resultKey='';
$('idea').value=typeof stored.idea==='string'?stored.idea:'';
if(['','Unity','Unreal Engine','Godot'].includes(stored.engine))$('engine').value=stored.engine;
function persist(){try{localStorage.setItem('promptlens-v1',JSON.stringify({selected:[...selected],saved:[...saved],idea:$('idea').value,engine:$('engine').value,language}));}catch{ /* Browser storage can be disabled; interactions still work. */ }}
function toast(msg){$('toast').textContent=msg;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2400);}
function renderCategories(){$('categories').innerHTML=categories.map(c=>'<button class="category '+(c.id===category?'active':'')+'" data-category="'+c.id+'"><span class="cat-icon">'+c.icon+'</span>'+c.name+'<span class="cat-count">'+(c.id==='all'?terms.length:terms.filter(t=>t.category===c.id).length)+'</span></button>').join('');}
function visibleTerms(){const q=$('search').value.trim().toLowerCase();return terms.filter(t=>(category==='all'||t.category===category)&&(filter==='all'||(filter==='beginner'?t.tags.includes('beginner'):t.genres.includes(filter)))&&(!savedOnly||saved.has(t.id))&&(!q||[t.name,t.en,t.desc,t.ko,...(t.aliases||[])].join(' ').toLowerCase().includes(q)));}
function renderPagination(total){
 const pages=Math.ceil(total/PAGE_SIZE), nav=$('pagination');
 nav.hidden=pages<=1;
 if(pages<=1){nav.innerHTML='';return;}
 const numbers=[...new Set([1,...Array.from({length:5},(_,i)=>currentPage+i-2).filter(n=>n>=1&&n<=pages),pages])].sort((a,b)=>a-b);
 const button=(page,label,disabled=false)=>'<button type="button" data-page="'+page+'"'+(disabled?' disabled':'')+(page===currentPage?' aria-current="page"':'')+' aria-label="'+(typeof label==='number'?label+' 페이지':label)+'">'+label+'</button>';
 let previous=0;
 nav.innerHTML='<span class="page-range">'+((currentPage-1)*PAGE_SIZE+1)+'–'+Math.min(currentPage*PAGE_SIZE,total)+' / '+total+'개</span><div class="page-buttons">'+button(currentPage-1,'이전',currentPage===1)+numbers.map(n=>{const gap=n-previous>1?'<span aria-hidden="true">…</span>':'';previous=n;return gap+button(n,n);}).join('')+button(currentPage+1,'다음',currentPage===pages)+'</div>';
}
function bookmarkIcon(){return '<svg class="bookmark-icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M11.1 3.2Q12 1.5 12.9 3.2L15.05 7.65Q15.3 8.2 15.95 8.3L20.85 9Q22.8 9.3 21.4 10.7L17.85 14.15Q17.4 14.6 17.5 15.2L18.35 20.1Q18.7 22 17 21.1L12.65 18.8Q12 18.45 11.35 18.8L7 21.1Q5.3 22 5.65 20.1L6.5 15.2Q6.6 14.6 6.15 14.15L2.6 10.7Q1.2 9.3 3.15 9L8.05 8.3Q8.7 8.2 8.95 7.65Z"/></svg>';}
function renderCards(){
 const key=JSON.stringify([category,filter,savedOnly,$('search').value.trim().toLowerCase()]);
 if(key!==resultKey){currentPage=1;resultKey=key;}
 const items=visibleTerms(),label=savedOnly?'저장한 표현':categories.find(c=>c.id===category).name;
 currentPage=Math.min(currentPage,Math.max(1,Math.ceil(items.length/PAGE_SIZE)));
 const pageItems=items.slice((currentPage-1)*PAGE_SIZE,currentPage*PAGE_SIZE);
 renderPagination(items.length);
 $('section-title').textContent=label+' ';const count=document.createElement('span');count.textContent=items.length;$('section-title').append(count);
 $('cards').innerHTML=pageItems.map(t=>'<article class="card"><div class="preview">'+cardIllustration(t)+'<span class="preview-label">'+t.en.toUpperCase()+'</span><button class="save '+(saved.has(t.id)?'saved':'')+'" data-save="'+t.id+'" aria-label="'+t.name+' 저장" aria-pressed="'+saved.has(t.id)+'">'+bookmarkIcon()+'</button></div><div class="card-body"><p class="card-category">'+categories.find(c=>c.id===t.category).name+'</p><h3><button class="card-title-link" aria-haspopup="dialog" data-detail="'+t.id+'">'+t.name+'</button></h3><p class="term-en">'+t.en+'</p><p class="card-desc">'+t.desc+'</p><div class="card-actions"><button class="add '+(selected.has(t.id)?'selected':'')+'" data-add="'+t.id+'" aria-label="'+t.name+' '+(selected.has(t.id)?'빼기':'담기')+'" aria-pressed="'+selected.has(t.id)+'">'+(selected.has(t.id)?'✓ 담김':'+ 담기')+'</button></div></div></article>').join('');
 $('empty').hidden=items.length>0;$('saved-count').textContent=saved.size;
 renderNavigation();
}
function renderNavigation(){
 for(const [id,view] of [['explore-nav','explore'],['saved-nav','saved'],['composer-nav','composer']]){const active=activeView===view;$(id).classList.toggle('nav-active',active);$(id).setAttribute('aria-pressed',String(active));}
 $('composer-nav-count').textContent=selected.size;
 $('saved-count').textContent=saved.size;
}
function setView(view){
 activeView=view;const composing=view==='composer';
 $('main').hidden=composing;$('explorer-sidebar').hidden=composing;$('composer-panel').hidden=!composing;
 $('workspace-layout').classList.toggle('composer-view',composing);
 if(!composing){const nextSaved=view==='saved';if(savedOnly!==nextSaved){savedOnly=nextSaved;renderCards();}}
 $('prompt-cart').hidden=composing;renderNavigation();
}
function composePrompt(){
 const list=[...selected].map(id=>terms.find(t=>t.id===id)),idea=$('idea').value.trim(),engine=$('engine').value;
 if(!list.length&&!idea)return language==='ko'?'표현을 담으면 여기에 프롬프트가 만들어집니다.':'Choose a term or describe your game to build a prompt.';
 const parts=[];
 if(language==='ko'){if(idea)parts.push('만들고 싶은 게임: '+idea);if(engine)parts.push('사용 엔진: '+engine);if(list.length)parts.push('다음 요소를 포함해 주세요:\n'+list.map(t=>'• '+t.ko).join('\n'));parts.push('먼저 설계와 구현 순서를 설명하고, 조정할 수 있는 주요 설정값을 제안해 주세요.');}
 else{if(idea)parts.push('Game concept: '+idea);if(engine)parts.push('Engine: '+engine);if(list.length)parts.push('Include these elements:\n'+list.map(t=>'• '+t.promptEn).join('\n'));parts.push('Explain the design and implementation steps first, and suggest the key tunable parameters.');}
 return parts.join('\n\n');
}
function renderComposer(){
 renderNavigation();
 renderSuggestions();
 $('selection-count').textContent=selected.size;
 $('cart-count').textContent=selected.size;
 $('cart-summary').textContent=selected.size?[...selected].slice(-2).map(id=>terms.find(t=>t.id===id).name).join(' · ')+(selected.size>2?' 외 '+(selected.size-2)+'개':''):'카드에서 기술을 담고 요청 문장으로 만들어 보세요.';
 $('detail-compose').hidden=selected.size===0;
 $('selection').innerHTML=selected.size?[...selected].map(id=>{const t=terms.find(t=>t.id===id);return '<span class="selected-chip">'+t.name+'<button data-remove="'+id+'" aria-label="'+t.name+' 빼기">×</button></span>';}).join(''):'<div class="selection-empty"><span>⊕</span>카드의 + 버튼을 눌러<br>첫 번째 표현을 담아 보세요.</div>';
 $('prompt').textContent=composePrompt();$('copy').disabled=!selected.size&&!$('idea').value.trim();
 document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===language));
 if(detailId!==null)$('detail-add').textContent=selected.has(detailId)?'장바구니에서 빼기 −':'기술 장바구니에 담기 ＋';
}
function syncCardButtons(){
 document.querySelectorAll('#cards [data-add]').forEach(button=>{const id=Number(button.dataset.add),term=terms.find(t=>t.id===id),active=selected.has(id);button.classList.toggle('selected',active);button.setAttribute('aria-pressed',String(active));button.setAttribute('aria-label',term.name+' '+(active?'빼기':'담기'));button.textContent=active?'✓ 담김':'+ 담기';});
 document.querySelectorAll('#cards [data-save]').forEach(button=>{const active=saved.has(Number(button.dataset.save));button.classList.toggle('saved',active);button.setAttribute('aria-pressed',String(active));});
}
function toggleSelected(id){if(!terms.some(t=>t.id===id))return;const adding=!selected.has(id);if(adding)selected.add(id);else selected.delete(id);persist();syncCardButtons();renderComposer();if(adding)toast('기술 장바구니에 담았습니다. 하단에서 담은 기술을 확인하세요.');}
function openDetail(id){
 const t=terms.find(t=>t.id===id);detailId=id;
 $('detail-category').textContent=categories.find(c=>c.id===t.category).name;
 $('detail-preview').innerHTML='<div class="preview">'+cardIllustration(t)+'</div>';
 $('detail-en').textContent=t.en;$('detail-name').textContent=t.name;$('detail-description').textContent=t.desc;
 $('detail-example').textContent=t.ko;$('detail-source').hidden=!t.source;if(t.source)$('detail-source').href=t.source;else $('detail-source').removeAttribute('href');
 renderComposer();$('detail').showModal();return loadArticle(t);
}
$('pagination').addEventListener('click',e=>{
 const button=e.target.closest('[data-page]');if(!button||button.disabled)return;
 const page=Number(button.dataset.page), pages=Math.ceil(visibleTerms().length/PAGE_SIZE);
 if(!Number.isInteger(page)||page<1||page>pages||page===currentPage)return;
 currentPage=page;renderCards();
 if(typeof $('section-title').scrollIntoView==='function')$('section-title').scrollIntoView({block:'start',behavior:'auto'});
});
$('categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;renderCategories();renderCards();});
$('cards').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.add!==undefined)toggleSelected(Number(b.dataset.add));if(b.dataset.detail!==undefined)openDetail(Number(b.dataset.detail));if(b.dataset.save!==undefined){const id=Number(b.dataset.save);saved.has(id)?saved.delete(id):saved.add(id);persist();if(savedOnly)renderCards();else{syncCardButtons();renderNavigation();}}});
$('selection').addEventListener('click',e=>{const b=e.target.closest('[data-remove]');if(b)toggleSelected(Number(b.dataset.remove));});
document.querySelector('.chips').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter===filter;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderCards();});
// Search results update on suggestion selection or Enter, not on every keystroke.
$('idea').addEventListener('input',()=>{persist();renderComposer();});
$('engine').addEventListener('change',()=>{persist();renderComposer();});
document.querySelector('.language').addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(!b)return;language=b.dataset.lang;persist();renderComposer();});
$('saved-nav').addEventListener('click',()=>setView('saved'));
$('explore-nav').addEventListener('click',()=>setView('explore'));
$('cart-open').addEventListener('click',()=>setView('composer'));
$('detail-compose').addEventListener('click',()=>{$('detail').close();setView('composer');});
$('composer-back').addEventListener('click',()=>setView('explore'));
$('composer-nav').addEventListener('click',()=>setView('composer'));
$('reset-filters').addEventListener('click',()=>{category='all';filter='all';savedOnly=false;$('search').value='';document.querySelectorAll('[data-filter]').forEach(b=>{const active=b.dataset.filter==='all';b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderCategories();renderCards();});
$('clear').addEventListener('click',()=>{selected.clear();persist();syncCardButtons();renderComposer();toast('선택한 표현을 초기화했습니다.');});
$('copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(composePrompt());toast('프롬프트를 복사했습니다.');}catch{const area=document.createElement('textarea');area.value=composePrompt();document.body.append(area);area.select();let ok=false;try{ok=document.execCommand('copy');}catch{}area.remove();toast(ok?'프롬프트를 복사했습니다.':'복사 권한이 없습니다. 프롬프트 내용을 직접 선택해 주세요.');}});
$('close-detail').addEventListener('click',()=>$('detail').close());
$('detail-add').addEventListener('click',()=>toggleSelected(detailId));
$('detail').addEventListener('click',e=>{if(e.target===$('detail')){const r=$('detail').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('detail').close();}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('detail').open&&activeView!=='composer'){e.preventDefault();$('search').focus();}});
renderCategories();renderCards();renderComposer();renderDailyRecommendation();

function renderSuggestions(){
 const input=$('idea').value.trim(),suggestions=suggestTechniques(input);
 $('suggestions').innerHTML='';
 if(!suggestions.length){const p=document.createElement('p');p.className='suggestion-empty';p.textContent=input?'현재 등록된 표현에서 일치하는 단서를 찾지 못했습니다. 시점·이동·전투를 더 적거나 카드에서 직접 선택해 주세요.':'게임 설명을 입력해 보세요. 예: 3인칭, 여러 적, 회피, 점프';$('suggestions').append(p);return;}
 for(const item of suggestions){
  const term=terms.find(t=>t.id===item.id),row=document.createElement('div');row.className='suggestion-row';
  const title=document.createElement('strong');title.textContent=term.name;
  const reason=document.createElement('p');reason.textContent='단서: '+item.matches.join(', ')+' · '+item.reasons.join(' ');
  const actions=document.createElement('div');actions.className='suggestion-actions';
  const preview=document.createElement('button');preview.textContent='예시 보기';preview.addEventListener('click',()=>openDetail(item.id));
  const choose=document.createElement('button');choose.textContent=selected.has(item.id)?'✓ 선택됨':'+ 담기';choose.setAttribute('aria-pressed',String(selected.has(item.id)));choose.addEventListener('click',()=>toggleSelected(item.id));
  actions.append(preview,choose);row.append(title,reason,actions);$('suggestions').append(row);
 }
}
document.body.classList.add('motion-enabled');
