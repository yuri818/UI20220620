const express = require('express');
const app = express(); // 객체 생성( heap영역에 쌓임, stack memory(함수의 호출 순서대로 쌓임 First in Last Out))

/* 
  <app.all과 app.use와의 차이점>

  all은 정해진 url에 대해서만 반응함
  use는 tomato가 들어간 어떤 url에 대해서도 모두 반응함

  curl  http://localhost:5000/api?mem_id=abc
  curl  http://localhost:5000/tomato?mem_id=abc
  curl  http://localhost:5000/tomato/bbb - 에러
  curl  http://localhost:5000/api/bbb - 에러
*/
app.all("/api", (req,res,next) => {
  console.log('all');
  next();
});
app.use("/tomato", (req,res,next) => {
  console.log('use');
  next();
});

// // 요청하기
// // next가 있어야 미들웨어로 다음 요청가능 - 함수의 체이닝
// app.get("/", (req,res,next) => {
//   console.log('first');
//   // 강제적으로 에러 발생시켜 보기
//   next(new Error("error")); // 에러를 던진다 - 사용자에게 에러 결과가 그대로 출력되는 건 좋지 않음
//   // 반드시 마지막 체인에서 에러 처리하는 코드를 추가해야 함
// },
// (req,res,next)=>{
//   console.log('first2');
//   next();
// });

// app.use((req,res,next) => {
//   // http://localhost:5000/6 와 같은 url로 요청하면 아래 메세지가 화면 출력
//   // 에러를 강제했기 때문에 뒤는 실행되지 않고 빠져나온다
//   res.status(404).send("해당 url은 존재하지 않습니다");
//   next();
// });

app.get("/:id",(req,res,next) => {
  console.log('middle1');
  res.send('Hello express!!!');
});

// 에러처리 핸들러 코드 추가해보쟈
// 만일 이것을 안하면 사용자에게 에러메시지가 그대로 노출
// 이것은 해커에게는 아주 유용한 힌트를 제공함 - 보안상 좋지 못함
app.use((error,req,res,next) => {
  console.log(error);
  // 500번 서버 에러를 강제
  // 에러 상황 가정하고 send메세지에 넣을 것
  res.status(500).send("서버관리자에게 문의 바랍니다.");
})

// 포트번호 변수로 빼기
const port = 5000;
app.listen(port , () => {
  // 기동한 서버 포트번호 콘솔창에서 확인하기
  console.log(`The Express server is listening at port: ${port}`);
});