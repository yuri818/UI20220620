const express = require('express');
const app = express();

// nodejs로 부터 요청객체와 응답객체는 주입받음
// 파라미터1. url ,2. 콜백함수
app.get("/kh/:id", (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  // 가져오는 쿼리스트링의 키값, 
  console.log(`mem_id: ${req.query.mem_id}, mem_pw : ${req.query.mem_pw}`);
});

app.listen(3001);

/* 
  <테스트 시나리오>
  http://localhost:3001/kh/tomato -> id가 뭐 출력? tomato가 된다
  http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123 -> id는 apple, 비번은 123가져옴

*/
