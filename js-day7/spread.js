// ⭐리액트에서 우선순위
// 리액트는 데이터 변경이 있는 경우에만 새로 렌더링을 함
// Array에 추가하기
const colors = ["red", "green", "blue"];
// 기존에 배열이 새로운 배열로 복제됨 - 리액트에서 상태변화 감지 -> 자동렌더링
// 데이터 값이 바뀔 경우에만 새로 렌더링 해줌
// 기존의 돔과 가상 돔을 비교해서 데이터 변경사항 발생 -> 자동렌더링
const colors2 = [...colors, "black"];
const colors3 = ["white", ...colors];

console.log(colors2);
console.log(colors3);
// 리액트에서는 상태를 관리하는 훅(함수라고 생각하자)이 있다 - useState
// useState 훅에서는 원본을 바꾸지 않는다

let dept = {
  deptno: 10,
  dname: "총무부",
  loc: "인천"
}
let emp = {
  empno: 7566,
  ename: "scott",
}

let newObj = { ...dept, ...emp};
console.log(newObj);

// 기존에 emp 객체를 덮어씌운다 - 추가x, 덮어쓰기o
let newObj2 = {...emp, empno: 7499, ename: 'king'};
console.log(newObj2);

//useState({}), useState([]), useState([{}])
let depts = [
  {deptno: 10, dname:"총무부", loc:"인천"},
  {deptno: 20, dname:"개발부", loc:"서울"},
  {deptno: 30, dname:"인사부", loc:"울산"},
];
// 추가하기 - ⭐구조체일 때는 추가, 객체일 때는 덮어쓰기
let depts2 = [ ...depts, {deptno:40, dname:"운영부", loc:"대구"}];
console.log(depts2);

let depts3 = [ ...depts, {deptno:50}];
console.log(depts3);