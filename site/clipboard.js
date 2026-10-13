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
