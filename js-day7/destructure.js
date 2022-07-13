const colors =["red", "green", "blue"];
const color1 = colors[0];
const color2 = colors[1];
const color3 = colors[2];
console.log(color1, color2, color3);
console.log(...colors);

const [c1, c2, c3] = colors;
console.log(c1,c2,c3);
console.log(colors);
// 리액트 - 일급함수 - 구조분해할당 - 부모태그에서 하위태그로 일급함수를 전달할 수 있다
[c1, c2, c3].map(function(item,i) {
  console.log(item,i);
});


colors.map(function(item,i) {
  console.log(item,i);
});

// useState({}) - 상태 관리 가능
// useState([])

const dept = { 
  deptno : 10,
  dname : "개발팀",
  loc : "대구"
}

const {deptno, dname, loc} = dept;
console.log(deptno, dname, loc);
console.log(dept);