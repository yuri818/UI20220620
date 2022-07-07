function add(x) { // 함수문
  return x+2;
}
// 자바스크립트는 void가 없다

// 자바스크립트에서 명시적인 return이 없다면 undefined이 정의
// function account(a,b){
//   setTimeout(() => {
//     return a + b;
//   }, 2000); //2초 기달려!
// }
function account(a,b, cb){
  setTimeout(() => {
    cb( a + b );
  }, 2000); //2초 기달려!
}
const result = add(3);
const temp = result;

// const result2 = account(10,20); // 여기서 undefined인데 이는 주석처리한 account(a,b)에서 리턴에 settimeout떄문
const result2 = account(10,20, (result) => {
  console.log('result : ',result);
});
const temp2 = result2;
console.log('temp2 : ',temp2);


// console.log(add(-1));
// setTimeout(() => {console.log(add(0))}, 1000);
// console.log(add(1));

console.log(result2); // undefined -> 2초 대기 타니까 비동기 코드
// 처리하려면 콜백함수가 필요하다
/* 
  콜백함수 : 혹시 다른 일 처리할거면 하고와 : promise
*/


/* 
  결정을 하려면 기준이 필요하다
  6번 실행 전 7번이 실행 될 수 있니?

*/