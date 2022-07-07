// 파라미터로 성공했을 때 - then, 실패했을때 - catch
// Promise의 인자 두개는 둘다 함수이다. resolve함수, reject이라는 함수
// 주어진 값으로 기술 해야한다 - OK를 주었다
// 동기 처리를 하려면 성공의 수신은 Promise 객체를 참조하는 p의 then 메소드를 호출하여
// 성공했을 때를 처리한다.


const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK'); // 성공적으로 실행했어요
  }, 2000); // 2초 뒤에 실행해주세요.
  // reject('Fail');
});
p.then((ok) => { // 성공했다면 콘솔창에 ok 찍어주세요
  console.log('첫번째 성공');
  return new Promise((resolve, reject) =>  {
    setTimeout(() => {
      console.log('두번째 성공');
    }, 3000);
  });
}).then(function (ok){
  console.log(ok);
})
.catch((error) => { // 에러가 발생했다면 catch에서 실패에 대한 수신을 해준다.
  console.log(error);
});


//자바스크립트의 함수는 일급함수이다.