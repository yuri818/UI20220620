let ename = "scott"; // 전역 스코프

// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
// 함수 선언 방법 2가지가 있다
// 1. 함수문
// 2. 함수식

function methodA(){
  let i = 5;
  console.log(ename);
  console.log(i);
  // insert here - before 지점
  innerMethod(); // 선언이 먼저되어야하는데 왜 얘가 가능하지?
  // 호이스팅 때문이다. 
  
  // 1.함수문
  function innerMethod() {
    let j = 10;
    console.log(i); // 호출 해야 실행
  }
  // insert here - after 지점

  // 함수식일 때 before
  // methodB(); //호출이 되지 않는다.
  //2.함수식
  const methodB = function(){
    console.log('methodB'); 
  }
  // 함수식일 때 aftere
  methodB(); //호출이 된다.
}

methodA();
console.log(i); // 여기서 시스템 정지되어있다


/* 
  글로벌 스코프 - member variable, global variable (전역변수)
  : 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐 - 유지된다.
  함수 스코프 - 함수안에서 정의됨 mian.ival, sub.ival (지역변수)
  : ⭐함수가 만들어 졌다고 해서 스코프가 생기는 게 아니다
  블록 스코프
  : for(int i; 1!=1; )
  init() -> service() -> destroy() : 자바에서 candidate 자원의 회수

  ->스코프를 통해 라이프 사이클이 생성된다. 자원은 유한하므로 사용후에 버려주어야 한다
*/