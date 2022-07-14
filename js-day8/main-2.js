const a = document.querySelector("a");

a.addEventListener('click', (event) => {
  // a 채그가 링크가 걸려 있지만 아래 코드가 있어서 네이버 페이지로 이동이 안된다
  // 파라미터로 event 객체가 주입이 되었다
  // event.preventDefault(); // 페이지 이동을 막아줌
  console.log("2 . 네이버 클릭");
});

const box = document.querySelector(".box");
box.addEventListener('mousemove',(event) => {
  console.log(event);
  console.log(`브라우저에서 마우스X축의 위치 : ${event.pageX}`);
  console.log(`마우스Y축의 위치 : ${event.pageY}`);
  console.log(`박스에서 마우스X축의 위치 : ${event.offsetX}`);
  console.log(`마우스Y축의 위치 : ${event.offsetY}`);
});