const express = require('express'); 
const app = express(); 

app.get("/", (req, res, next) => {
  console.log("first");
  // 다음 미들웨어 요청을 받으려면 next필수
  next();
});

app.get("/", (req, res, next) => {
  console.log("second");
  res.send('응답처리...');
  // 다음 미들웨어를 가지 않으려면 return으로 중지시켜준다 - 콘솔창에 third 출력x
  return;
  next();
});
app.get("/", (req, res) => {
  console.log("third");
});

app.listen(3001);

// send 처리는 비효율적이라 ejs로 처리해보자!