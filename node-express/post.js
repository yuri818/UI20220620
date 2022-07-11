const express = require('express');
const app = express();
app.use(express.json());

// nodejs로 부터 요청객체와 응답객체는 주입받음
app.post("/", (req, res) => {
  console.log(req.body);
});

app.listen(3001);


/* 
  단독으로 post처리할 수 없다
  헤더로 받을 수 없어 req.body로 한다
  postman에서 확인해보기
*/
/* 
  <테스트 시나리오>
  http://localhost:3001/kh/tomato -> id가 뭐 출력? tomato가 된다
  http://localhost:3001/kh/tomato?mem_id=apple&mem_pw=123 -> id는 apple, 비번은 123가져옴

*/
