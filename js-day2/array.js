// 배열
// 연관된 값들을 하나의 그룹으로 묶어서 나열한 자료구조
const colors = ["yellow", "purple", "blue"];
console.log(colors);
// arrow function
colors.forEach((color) => console.log(color));
colors.forEach(function(color){
  console.log(`element ==> ${color}`);
});
colors[1] = "black";
// 이 부분 공부하기
colors.map((color) => console.log("map", color));
//배열 복사하기//
//배열 선언 - []만으로도 배열 선언 끝났다
const copy = [];
//push함수를 통해 copy배열에 colors배열의 값을 넣어준다.
for(let i=0;i<colors.length;i++){
  copy.push(colors[i]);
  console.log(`copy[${i}] : ${copy[i]}`);
}
//위 for문을 forEach문으로 바꾸기
colors.forEach(function(item){
  copy.push(item);
  console.log(`copy : ${copy}`);
});


function add(a,b){
  const result = a + b;
  return result;
}

const add1 = function(a,b){
  const result = a + b;
  return result;
}

//이게 ES6 권장사항 - 화살표함수(arrow function)
//기존의 익명함수를 좀 더 쓰기 편하게 축약한 형태
const add2 = (a,b) => {
  const result = a + b;
  return result;
}

console.log(add2(3,4));

const msg = (txt) => {
  return txt;
}

//return 예약어까지 생략할 수 있다. 단, 함수 안에 아무것도 없고 리턴값만 있을 경우
//내부로 전달되는 파라미터가 하나면 괄호 생략가능
const msg2 = (txt) => txt;

console.log(msg2('hello arrow function'));

