'use strict';
// Shared by prompts and code. A fallback is attached to the active modal for focus access.
async function copyToClipboard(text){
 try{await navigator.clipboard.writeText(String(text));return true;}catch{}
 const active=document.activeElement,selection=typeof window!=='undefined'?window.getSelection():null,ranges=[];
 if(selection)for(let i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i).cloneRange());
 const field=document.createElement('textarea');field.value=String(text);field.setAttribute('readonly','');field.style.cssText='position:fixed;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none;';
 const host=document.querySelector('dialog[open]')||document.body;host.append(field);
 let copied=false;try{field.focus({preventScroll:true});field.select();copied=document.execCommand('copy');}catch{}finally{field.remove();if(active&&typeof active.focus==='function')active.focus({preventScroll:true});if(selection){selection.removeAllRanges();for(const range of ranges)selection.addRange(range);}}
 return copied;
}

// The same control is used for code and both prompt panels.
function bindCopyButton(button, getText)
{
 button.className = 'block-copy';
 button.textContent = '복사';
 button.setAttribute('type', 'button');
 button.addEventListener('click', async () =>
 {
  const copied = await copyToClipboard(getText());
  button.textContent = copied ? '복사됨' : '복사';
  toast(copied ? '클립보드에 복사했습니다.' : '복사 권한이 없습니다. 내용을 직접 선택해 주세요.');
  setTimeout(() => { button.textContent = '복사'; }, 1600);
 });
 return button;
}
