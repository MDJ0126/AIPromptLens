'use strict';
function parseArticle(raw){
 const normalized=raw.replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');
 const header=normalized.match(/^---\n([\s\S]*?)\n---\n/);
 if(!header)throw new Error('게시물 메타데이터를 읽을 수 없습니다.');
 const metadata=JSON.parse(header[1]),blocks=[];
 let paragraph=[],code=null,language='',section='';
 const flush=()=>{if(paragraph.length){blocks.push({type:'paragraph',text:paragraph.join('\n'),section});paragraph=[];}};
 for(const line of normalized.slice(header[0].length).split('\n')){
  if(line.startsWith('```')){
   if(code!==null){blocks.push({type:'code',text:code.join('\n'),language,section});code=null;}
   else{flush();code=[];language=line.slice(3).trim();}
   continue;
  }
  if(code!==null){code.push(line);continue;}
  const heading=line.match(/^(#{1,3}) (.+)$/);
  if(heading){flush();if(heading[1].length===2)section=heading[2];blocks.push({type:'heading',level:heading[1].length,text:heading[2],section});}
  else if(!line.trim())flush();else paragraph.push(line);
 }
 if(code!==null)throw new Error('닫히지 않은 코드 블록입니다.');
 flush();
 return {metadata,blocks};
}
if(typeof module!=='undefined'&&module.exports)module.exports={parseArticle};
