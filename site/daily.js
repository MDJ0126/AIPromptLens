'use strict';
function dailyRecommendation(date=new Date()){
 const day=Math.floor((date.getTime()+9*60*60*1000)/(24*60*60*1000));
 return terms[((day%terms.length)+terms.length)%terms.length];
}
function renderDailyRecommendation(){
 const term=dailyRecommendation();
 const date=new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',month:'long',day:'numeric'}).format(new Date());
 document.getElementById('daily-recommendation').innerHTML='<button type="button" class="daily-link" id="daily-open" aria-haspopup="dialog" aria-label="오늘의 추천: '+coverEscape(term.name)+' 게시물 열기"><div class="daily-copy"><p class="daily-eyebrow"><span>오늘의 추천</span><span>'+date+' · 매일 새로운 발견</span></p><p class="daily-category">'+coverEscape(categories.find(c=>c.id===term.category).name)+'</p><h2>'+coverEscape(term.name)+'</h2><p class="daily-description">'+coverEscape(term.desc)+'</p><span class="daily-cta">이 개념 알아보기 <span aria-hidden="true">↗</span></span></div><div class="daily-art">'+cardIllustration(term)+'</div></button>';
 document.getElementById('daily-open').addEventListener('click',()=>openDetail(term.id));
}
