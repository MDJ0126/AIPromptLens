'use strict';
const articleCache=new Map();
let articleRequest=0,articleEngine='Unity',loadedArticle=null;

function appendLinkedText(target, text)
{
 const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s]+?)\)|https?:\/\/[^\s<>"']+/g;
 let offset = 0;
 for (const match of text.matchAll(pattern))
 {
  if (match.index > offset) { const span=document.createElement('span');span.textContent=text.slice(offset,match.index);target.append(span); }
  let url = match[2] || match[0];
  if (!match[2])
  {
   url = url.replace(/[.,;:!?。，；：！？]+$/, '');
   while (url.endsWith(')') && (url.match(/\)/g)||[]).length > (url.match(/\(/g)||[]).length) url=url.slice(0,-1);
  }
  const link=document.createElement('a');link.href=url;link.textContent=match[1]||url;link.target='_blank';link.rel='noopener noreferrer';target.append(link);
  offset=match.index+(match[2]?match[0].length:url.length);
 }
 if(offset<text.length){const span=document.createElement('span');span.textContent=text.slice(offset);target.append(span);}
}

function appendArticleBlocks(target,blocks){
 target.innerHTML='';
 for(const block of blocks){
  if(block.type==='heading'){const h=document.createElement('h3');h.textContent=block.text;target.append(h);}
  else if(block.type==='code'){const frame=document.createElement('div'),bar=document.createElement('div'),pre=document.createElement('pre'),code=document.createElement('code');frame.className='code-frame';bar.className='code-bar';const label=document.createElement('span'),copy=document.createElement('button');label.textContent=block.language==='csharp'?'C# · Unity':'C++ · Unreal Engine';copy.setAttribute('aria-label','예제 코드 복사');bar.append(label,bindCopyButton(copy,()=>block.text));renderHighlightedCode(code,block.text);pre.append(code);frame.append(bar,pre);target.append(frame);}
  else{const p=document.createElement('p');appendLinkedText(p,block.text);target.append(p);}
 }
}
function renderArticleEngine(){
 if(!loadedArticle)return;
 const metadata=loadedArticle.metadata;
 const review=document.getElementById('article-review');
 review.innerHTML='';
 const date=document.createElement('p'),scope=document.createElement('p');
 date.textContent='최근 업데이트 · '+(metadata.updatedAt||metadata.reviewedAt);scope.textContent=metadata.reviewScope;review.append(date,scope);
 const concept=metadata.kind==='concept';
 document.getElementById('article-engines').hidden=concept;
 document.getElementById('article-heading-title').textContent=concept?'개념과 선택 기준':'간단한 구현 예제';
 if(concept){appendArticleBlocks(document.getElementById('article-structure'),loadedArticle.blocks.filter(b=>b.section==='핵심 구조'));document.getElementById('article-code').innerHTML='';appendArticleBlocks(document.getElementById('article-notes'),loadedArticle.blocks.filter(b=>b.level!==1&&!['','핵심 구조','요청 예시'].includes(b.section)));return;}
 document.querySelectorAll('[data-article-engine]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.articleEngine===articleEngine)));
 appendArticleBlocks(document.getElementById('article-structure'),loadedArticle.blocks.filter(b=>b.section==='핵심 구조'));
 const engineBlocks=loadedArticle.blocks.filter(b=>b.section===articleEngine&&b.type!=='heading');
 appendArticleBlocks(document.getElementById('article-code'),engineBlocks);
 const common=loadedArticle.blocks.filter(b=>['적용 방법','참고 자료','자료 대조에서 보강한 내용','확인 기록'].includes(b.section)||(articleEngine==='Unreal'&&b.section==='Unreal 의존성'));
 appendArticleBlocks(document.getElementById('article-notes'),common);
}
async function loadArticle(term){
 const request=++articleRequest;
 loadedArticle=null;
 document.getElementById('article-review').innerHTML='';
 const status=document.getElementById('article-status');
 status.textContent='예제 코드를 불러오고 있습니다.';
 document.getElementById('article-code').innerHTML='';
 document.getElementById('article-structure').innerHTML='';
 document.getElementById('article-notes').innerHTML='';
 document.getElementById('article-file').href='articles/'+term.slug+'.md';
 articleEngine=document.getElementById('engine').value==='Unreal Engine'?'Unreal':'Unity';
 try{
  let article=articleCache.get(term.slug);
  if(!article){
   const response=await fetch('articles/'+term.slug+'.md',{cache:'no-cache'});
   if(!response.ok)throw Error('HTTP '+response.status);
   article=parseArticle(await response.text());
   if(article.metadata.id!==term.id)throw Error('게시물 ID가 일치하지 않습니다.');
   articleCache.set(term.slug,article);
  }
  if(request!==articleRequest)return;
  loadedArticle=article;status.textContent=article.metadata.kind==='concept'?'개념 설명 · 비교 도식과 설계 질문':'구조를 이해하기 위한 학습 예제';
  renderArticleEngine();
 }catch(error){if(request!==articleRequest)return;status.textContent='예제를 불러오지 못했습니다. Markdown 원문을 열거나 페이지를 다시 시도해 주세요.';}
}
document.getElementById('article-engines').addEventListener('click',event=>{
 const button=event.target.closest('[data-article-engine]');if(!button)return;
 articleEngine=button.dataset.articleEngine;renderArticleEngine();
});
