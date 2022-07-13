class Car {
  speed;
  carName;
  constructor(carName, speed) {
    this.carName = carName;
    this.speed = speed;
  }
  // 클래스 선언시 function 예약어 쓰면 안된다!!
  speedUp() {
    this.speed += 1;
  }
  speedDown() {
    this.speed -= 1;
  }
}

class Sonata extends Car {
  speedUp() {
    super.speedUp();
    this.speed += 2;
  }
}

class K5 extends Car {
  stop() {
    this.speed = 0;
  }
}

const myCar = new Car('붕붕이',80);
console.log(myCar.carName);
console.log(myCar.speed);

const yourCar = new Sonata('빵빵이',30);
console.log(yourCar.carName);
yourCar.speedUp();
console.log(yourCar.speed);

const herCar = new K5('뿡뿡이',70);
herCar.speedUp();
console.log(herCar.carName);
console.log(herCar.speed);
herCar.stop();
console.log(herCar.speed);