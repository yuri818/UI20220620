//자료형
/* 
  원시형 타입(Primative type) - 단일데이터, Stack공간에 담김
  문자, 숫자, 논리형, undefinded - 변수를 선언하고 값을 할당하지 않으면 undefined가 저장됨
  참조형 타입(Reference type) - 복합데이터{ key:value } - Heap 공간에 담김
  {
    id:'tomato',
    pw:'123'
  }
  : 값이 위치하고 있는 참조 주소값만 메모리에 저장 - 함수도 객체이다
  null - 특정 변수의 값을 비워둘때
  , array - 연관된 값들을 그룹으로 묶어서 관리
  , 객체 - Object데이터를 key라는 인덱싱을 통해 자료를 구조적으로 묶어놓은 상태
*/

let v;
console.log(v);
v = null;
console.log(v);
console.log(typeof 123);
console.log(typeof '123');
console.log(typeof null);
console.log(typeof undefined);

let name = 'tomato';
let color = 'red';
let display = '🍅';

let tomato = {
  name: 'tomato',
  color: 'red',
  display: '🍅',
};

console.log(tomato);
console.log(tomato.name);
console.log(tomato.color);
console.log(tomato.display);

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); //1
console.log(b); //2

//객체 타입은 참조값(메모리 주소, 레퍼런스) 복사되어 전달됨
let orange = { //325678
  name: '오렌지',
}
let apple = orange; //325678
apple.name = '사과';
console.log(orange); //사과
console.log(apple);  //사과

