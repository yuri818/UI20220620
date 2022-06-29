const ajax = new XMLHttpRequest(); 
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용-> React 수업 선수학습)을 조작해 보자.
const NEWS_URL = 'http://localhost:8000/dev_web/json/deptToJSON_1.jsp'; 

ajax.open('GET', NEWS_URL, false); 
ajax.send();
// 서버로부터 응답받은 내용을 출력하기
console.log(ajax.response);

const deptlist = JSON.parse(ajax.response);
const deptno = document.createElement('deptno');

for (let i = 0; i < 5; i++) {
  const dname = document.createElement('dname');
  const loc = document.createElement('loc');
  loc.innerHTML = ` deptno: ${deptlist[i].deptno}, dname: ${deptlist[i].dname}, loc: ${deptlist[i].loc} <hr>`;
  deptno.appendChild(dname);
  dname.appendChild(loc);
}

document.getElementById('root').appendChild(deptno);