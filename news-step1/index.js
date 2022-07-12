// const { response } = require("express");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  이런 방법을 쓸 것이지만 코딩하기 귀찮다 - 반복되는 태그를 열거해야하므로
  -> createElement를 통해서 DOM API를 조작한다
*/

// html구조가 한눈에 보이지 않아 1-2로 넘어가자..

fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json()) // 하나의 콜백
  .then(result => {
    // 자바스크립트로 태그를 만들기
    const ul = document.createElement("ul"); // 태그요소를 생성한다
    for(let i=0; i<10;i++){
      const li = document.createElement("li");
      // html에 넣어줘!
      li.innerHTML = result[i].title; // 텍스트 노드 추가
      // ul 태그 밑에 li 붙여줘
      ul.appendChild(li);
    }
    // root밑에 ul 붙여줘~!
    document.getElementById("root").appendChild(ul);
  }) // 하나의 콜백
  .catch(error => console.log('error', error));  //에러가 발생했을 때

/* 
  ❗⭐문제제기
  DOM 구성을 코드적으로 작성하니 태그들의 위치, 위계, 구조가 명확하게 보이지 않는다!!!
  어떻게 하면 개선할 수 있지??
  해결 방법은 DOM API자체를 최대한 사용하지 않는다
  예컨데 createElement, appendChild, innerHTML 따위를 말함
*/