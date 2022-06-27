function hap(a,b) {
  return a+b;
}
//react에서는 arrow function을 사용합니다.
hap2 = (a,b) => {
  return a+b;
}
const hap3 = (a,b) => a+b;
const total = hap; // 함수도 오브젝트이므로 주번을 갖기 때문에 가능하다
console.log(total(2,3));
console.log(hap2(2,3));
console.log(hap3(2,3));

// 함수의 이름은 함수를 참조함에 대한 예시
const minus = (a,b) => a-b;
const multiply = (a,b) => a*b;
// 전달된 action은 콜백함수이다. - java에서 actionPerformed(ActionEvent ae)
// 콜백함수란? -언젠가 실행해 줄게. 단 네가 요청하면
function account(a,b, action) {
  // action은 minus or multiply - 고차함수라고 한다(hyper order function) 
  let result = action(a,b);
  console.log(result);
  return result;
}
// 어떤 함수가 전달 되는가에 따라 계산 결과가 달라진다.
console.log(account(2,1, minus)); //minus()로 호출하면 망한다. 함수를 가리키는 주번을 넘김
console.log(account(2,1, multiply));

// 즉시 실행 함수 : IIFE

/* 
  입력 - 처리 - 출력
  처리와 관련있는 것 - function, operator
  함수의 정의 - 특정한 일을 수행하는 집합
  함수도 오브젝트이다
  콜백함수에서는 함수의 이름은 함수를 참조함
*/