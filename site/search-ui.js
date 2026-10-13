'use strict';
function matchSearchTerms(items,query){
 const q=query.trim().toLowerCase();
 if(!q)return ['shoulder','coyote','jump','navigation-mesh','pbr','object-pool'].map(slug=>items.find(t=>t.slug===slug)).filter(Boolean);
 return items.map(t=>{const names=[t.name,t.en,...(t.aliases||[])].map(s=>s.toLowerCase());const score=names.some(n=>n===q)?0:names.some(n=>n.startsWith(q))?1:names.some(n=>n.includes(q))?2:(t.desc+' '+t.ko).toLowerCase().includes(q)?3:99;return {term:t,score};}).filter(x=>x.score<99).sort((a,b)=>a.score-b.score||a.term.id-b.term.id).slice(0,6).map(x=>x.term);
}
if(typeof module!=='undefined')module.exports={matchSearchTerms};
if(typeof document!=='undefined'){
 const input=document.getElementById('search'),list=document.getElementById('search-options');let matches=[],active=-1;
 function hide(){list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');active=-1;}
 function select(index){const term=matches[index];if(!term)return;input.value=term.name;category='all';filter='all';document.querySelectorAll('[data-filter]').forEach(b=>{const all=b.dataset.filter==='all';b.classList.toggle('active',all);b.setAttribute('aria-pressed',String(all));});renderCategories();renderCards();hide();input.focus({preventScroll:true});}
 function paint(){const q=input.value;matches=matchSearchTerms(terms,q);active=-1;list.replaceChildren();const caption=document.createElement('div');caption.className='search-options-heading';caption.setAttribute('role','presentation');caption.textContent=q.trim()?'관련 게시물':'추천 검색어';list.append(caption);
 matches.forEach((term,index)=>{const option=document.createElement('div');option.className='search-option';option.id='search-option-'+index;option.setAttribute('role','option');option.setAttribute('aria-selected','false');const name=document.createElement('strong'),description=document.createElement('span');name.textContent=term.name;description.textContent=term.en;option.append(name,description);option.addEventListener('mousedown',e=>e.preventDefault());option.addEventListener('click',()=>select(index));list.append(option);});
 if(!matches.length){const empty=document.createElement('p');empty.className='search-no-match';empty.textContent='일치하는 표현이 없습니다. 다른 검색어를 입력해 보세요.';list.append(empty);}list.hidden=false;input.setAttribute('aria-expanded','true');input.removeAttribute('aria-activedescendant');
 }
 input.addEventListener('focus',paint);input.addEventListener('input',()=>{if(!input.composing)paint();});input.addEventListener('compositionstart',()=>input.composing=true);input.addEventListener('compositionend',()=>{input.composing=false;paint();});input.addEventListener('blur',hide);
 input.addEventListener('keydown',e=>{if(e.isComposing)return;if(e.key==='Escape'){hide();return;}if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(list.hidden)paint();if(!matches.length)return;active=(active+(e.key==='ArrowDown'?1:-1)+matches.length)%matches.length;list.querySelectorAll('[role="option"]').forEach((el,i)=>el.setAttribute('aria-selected',String(i===active)));input.setAttribute('aria-activedescendant','search-option-'+active);const option=list.querySelector('[aria-selected="true"]');if(option){const top=option.offsetTop,bottom=top+option.offsetHeight;if(top<list.scrollTop)list.scrollTop=top;else if(bottom>list.scrollTop+list.clientHeight)list.scrollTop=bottom-list.clientHeight;}}if(e.key==='Enter'){e.preventDefault();if(!list.hidden&&active>=0)select(active);else{renderCards();hide();}} });
 document.addEventListener('click',e=>{if(!e.target.closest('.search-area'))hide();});
}
