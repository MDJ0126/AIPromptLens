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
  toggle.innerHTML='<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(dark?'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>':'<path d="M20 15.5A9 9 0 0 1 8.5 4a9 9 0 1 0 11.5 11.5Z"/>')+'</svg>';
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
