'use strict';
function tokenizeCode(source){
 const keywords=new Set('using public private protected class struct void bool float double int int32 string const return if else for while true false null nullptr new yield IEnumerator static namespace virtual override auto sizeof'.split(' '));
 const pattern=/\/\*[\s\S]*?\*\/|\/\/[^\n]*|@"(?:[^"]|"")*"|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[fFuUlL]+)?)\b|\b[A-Za-z_]\w*\b/g;
 const tokens=[];let end=0;
 for(const match of source.matchAll(pattern)){
  if(match.index>end)tokens.push({text:source.slice(end,match.index),kind:''});
  const text=match[0];let kind='';
  if(text.startsWith('//')||text.startsWith('/*'))kind='comment';
  else if(/^[@"]|^'/.test(text))kind='string';
  else if(/^\d/.test(text))kind='number';
  else if(keywords.has(text))kind='keyword';
  else if(/^\s*\(/.test(source.slice(match.index+text.length)))kind='function';
  else if(/^[A-Z]/.test(text))kind='type';
  tokens.push({text,kind});end=match.index+text.length;
 }
 if(end<source.length)tokens.push({text:source.slice(end),kind:''});
 return tokens;
}
function renderHighlightedCode(element,source){
 element.textContent='';
 for(const token of tokenizeCode(source)){
  const span=document.createElement('span');
  if(token.kind)span.className='syntax-'+token.kind;
  span.textContent=token.text;element.append(span);
 }
}
if(typeof module!=='undefined'&&module.exports)module.exports={tokenizeCode};
