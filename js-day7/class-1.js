// 클래스 - ES6에서 지원하게 됨
// 생성자 - 전변 초기화 - 클래스 전역에서 사용할 수 있다

class Car {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
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