// import express from "express";

// 아래에서 require를 사용하려면 package.json에 type:module이 아니라 commonjs로 변경해줌
// ES6를 사용하려면 type:module로 정의함
const express = require('express'); // npm i --save-dev express가 먼저 설치되어 있어야한다!
// NodeJS에서 CommonJS사용하면
// ES6 import express from "express" 와 같음
const app = express(); // express 사용할 객체 생성

app.get("/", (req, res) => {
  console.log("get");
  res.send("안녕하세요. 서버의 <font color=red>응답</font>입니다");
});

app.listen(3000); // 3000은 port 번호이다


// 실행 후
// localhost:3000을 열어보면
// 로딩스피너가 로딩중에 있다 -> 이는 서버측의 응답을 기다리고 있는 것이다
// res.send();로 보낼 경우 페이지에 나타난다 -> 태그 안에 적은것이 반영된다(태그는 빼고 글만나옴)