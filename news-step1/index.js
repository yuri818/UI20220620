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



fetch("https://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json()) // 하나의 콜백
  .then(result => {
    const ul = document.createElement("ul"); // 태그요소를 생성한다
    for(let i=0; i<10;i++){
      const li = document.createElement("li");
      // html에 넣어줘!
      li.innerHTML = result[i].title;
      // ul 태그 밑에 li 붙여줘
      ul.appendChild(li);
    }
    // root밑에 ul 붙여줘~!
    document.getElementById("root").appendChild(ul);
  }) // 하나의 콜백
  .catch(error => console.log('error', error));  //에러가 발생했을 때