const btns = document.querySelectorAll('ul li');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    // 일급함수는 함수를 변수 값 처럼 쓸 수 있는 것을 말함
    console.log(i); // 0 1 2로 출력되어야 하는데 3이나온다
  });
}

// 호이스팅 문제를 즉시실행함수로 해결함
for (var x = 0; x < btns.length; x++) {
  ((index) => {
    btns[x].addEventListener('click', () => {
      console.log('index => ',index); // 0 1 2로 출력
    });
  })(x);
}

// ES5 - var - 전역변수와 지역변수
// EX6 - let변경

// 호이스팅
// 블록 안에서 선언된 지역변수가 코드 블록 밖으로 나와
// 강제로 전역변수화 됨