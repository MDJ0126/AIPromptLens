'use strict';
// The user can pause the new conceptual demonstrations without changing OS settings.
const previewMotionButton=document.getElementById('preview-motion');
let previewMotionPaused=false;
function syncTechnicalMotion(){
 document.documentElement.classList.toggle('preview-motion-paused',previewMotionPaused);
 document.querySelectorAll('.preview svg,.daily-art svg,#detail svg').forEach(svg=>{
  if(previewMotionPaused)svg.pauseAnimations();else svg.unpauseAnimations();
 });
 previewMotionButton.setAttribute('aria-pressed',String(previewMotionPaused));
 previewMotionButton.textContent=previewMotionPaused?'도식 재생':'도식 일시 정지';
}
previewMotionButton.addEventListener('click',()=>{previewMotionPaused=!previewMotionPaused;syncTechnicalMotion();});
new MutationObserver(syncTechnicalMotion).observe(document.getElementById('cards'),{childList:true});
syncTechnicalMotion();
