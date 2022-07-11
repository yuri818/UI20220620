const express = require('express');
const app = express();

// nodejs로 부터 요청객체와 응답객체는 주입받음
// 파라미터1. url ,2. 콜백함수
app.get("/kh/:id", (req, res) => {
  console.log(`mem_id: ${req.query.mem_id}, mem_pw : ${req.query.mem_pw}`);
  // res.send(`<font color=pink>${req.query.mem_id}</font>`);
  // json 포맷으로도 받을 수 있다
  // res.json({"mem_id":"apple"});
  res.sendStatus(400); // Bad Request 가 뜬다
  return;
  // send를 두번 처리할 수 없다 - 같은 요청 건에 대해서는 두번 처리할 수 없다.
  // return을 넣는 것이 안전하다
});

app.listen(3001);

/* 
  <테스트 시나리오>
  http://localhost:3001/kh/tomato -> id가 뭐 출력? tomato가 된다
  http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123 -> id는 apple, 비번은 123가져옴

*/
