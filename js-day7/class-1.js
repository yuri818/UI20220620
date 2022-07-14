// 클래스 - ES6에서 지원하게 됨
// 생성자 - 전변 초기화 - 클래스 전역에서 사용할 수 있다
// 메소드 오버로딩과 오버라이딩이 되지 않는다
// 리액트 - 양이 늘어나더라도 복잡도는 증가하지 않는 코드 만들쟈!!

class Car {
  // 생성자 함수에서 초기화 가능하다
  // 공통분모 : 전변초기화를 담당한다 - 생성자 함수가 
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  // 사용자 정의 함수를 가질 수 있다 → 제공되는 함수가 있다. -window, document
  display = () => {
    console.log(`${this.name}, ${this.emoji}`);
  }
}

// myCar(혹은 yourCar)는 Car클래스의 인스턴스이다.
const myCar = new Car("Sonata","🚗");
const yourCar = new Car("Pride","🚕");
const herCar = myCar;

console.log(myCar);
console.log(yourCar);

console.log(myCar === yourCar);
console.log(myCar === herCar);
console.log(myCar.emoji, myCar.name);

yourCar.display();
herCar.display();

// himCar 클래스랑은 다른 것이다
const himCar = {
  name : "싼타페",
  speed : 50,
}