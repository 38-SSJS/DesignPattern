class Car {
  constructor(price) {
    this.price = price;
  }

  getPrice() {
    return this.price;
  }
}

class CarWithGPS extends Car {
  constructor(price) {
    super(price);
    this.price = price + 200;
  }
}

class CarWithParkingSensors extends Car {
  constructor(price) {
    super(price);
    this.price = price + 300;
  }
}

let car = new Car(2000);
console.log(car.getPrice()); // 2000

car = new CarWithGPS(car);
console.log(car.getPrice()); // 2200

car = new CarWithParkingSensors(car);
console.log(car.getPrice()); // 2500

car = new CarWithParkingSensors(new CarWithGPS(new Car(2000)));
console.log(car.getPrice()); // 2500
