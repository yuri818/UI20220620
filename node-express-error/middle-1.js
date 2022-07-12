const express = require('express');
const app = express(); // 객체 생성( heap영역에 쌓임, stack memory(함수의 호출 순서대로 쌓임 First in Last Out))

// 요청하기
// next가 있어야 미들웨어로 다음 요청가능 - 함수의 체이닝
app.get("/", (req,res,next) => {
  console.log('first');
  // 클라이언트에 응답 내보내기
  res.send('hello');
  // return이 있어서 next가 있지만 빠져나오게 되어 다음으로 연결 안된다.
  if(true) return;
  // ⭐next(); 가 있어야 다음 미들웨어로 진행된다!!
  next();
},
(req,res,next)=>{
  console.log('first2');
  next();
});

app.get("/:id",(req,res,next) => {
  console.log('middle1');
  res.send('Hello express!!!');
});

// 포트번호 변수로 빼기
const port = 5000;
app.listen(port , () => {
  // 기동한 서버 포트번호 콘솔창에서 확인하기
  console.log(`The Express server is listening at port: ${port}`);
});