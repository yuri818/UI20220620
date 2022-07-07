// JavaScript is synchronous.
console.log(1);
setTimeout(() =>{
  console.log(2);
}, 2000); // 넌 2초 뒤에 실행해~ -> 비동기 처리

console.log(3);