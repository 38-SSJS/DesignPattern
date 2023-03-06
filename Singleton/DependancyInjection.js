class PrintHelloWorld {
  static getInstance() {
    if (!PrintHelloWorld.instance) {
      PrintHelloWorld.instance = new PrintHelloWorld();
    }
    return PrintHelloWorld.instance;
  }
  constructor() {
    this.value = "Hello World";
  }
}
//의존성을 주입하지 않는 방법
class NonDI {
  constructor() {
    //클래스안에서 인스턴스를 직접 생성
    this.b = new PrintHelloWorld();
  }
  printValue() {
    console.log(this.b.value);
  }
}
//의존성을 주입하는 방법
class DependencyInjection {
  //인자로 객체를 의존성으로 주입.
  constructor(b) {
    this.b = b;
  }
  printValue() {
    console.log(this.b.value);
  }
}

const print = PrintHelloWorld.getInstance();
const helloWorld = PrintHelloWorld.getInstance();

console.log(print === helloWorld); //true

const a = new DependencyInjection(print);
const b = new NonDI();

a.printValue(); // 'Hello World'
b.printValue(); // 'Hello World'
