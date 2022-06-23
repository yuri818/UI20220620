// 매개변수의 기본값은 무조건 undefined임
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨

function hap(a,b){
  console.log(a+' , '+b);
  return a + b;
}
hap();

function hap2(a = 1,b = 1){
  console.log(a+' , '+b);
  return a + b;
}
hap2();

function hap3(...numbers){ //...numbers는 열거형
  console.log(numbers);
}
hap3(1,2,3,4,5,6,7,8);

function hap4(a,b, ...numbers){
  console.log(numbers);
}
hap4(1,2,3,4,5,6,7,8);
