'use strict';
function getSavedTheme(){
 try{return localStorage.getItem('game-prompt-theme')==='dark'?'dark':'light';}
 catch{return 'light';}
}
function setTheme(theme){
 const dark=theme==='dark';
 document.documentElement.dataset.theme=dark?'dark':'light';
 const toggle=document.getElementById('theme-toggle');
 if(toggle){
  toggle.textContent=dark?'☀ 밝은 테마':'☾ 다크 테마';
  toggle.setAttribute('aria-label',dark?'밝은 테마 켜기':'다크 테마 켜기');
  toggle.setAttribute('aria-pressed',String(dark));
 }
 const color=document.querySelector('meta[name="theme-color"]');
 if(color)color.setAttribute('content',dark?'#101827':'#f6f8ff');
}
setTheme(getSavedTheme());
document.addEventListener('DOMContentLoaded',()=>{
 setTheme(getSavedTheme());
 document.documentElement.dataset.themeReady='true';
 document.getElementById('theme-toggle').addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  setTheme(theme);
  try{localStorage.setItem('game-prompt-theme',theme);}catch{}
 });
});
