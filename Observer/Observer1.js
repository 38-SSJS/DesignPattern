// # 디자인패턴 교제 TS예시 JS화

//구조 1번	
class ConcreteSubject { 
  state;
  observers = [];

  attatch(observer){
    const isExist = this.observers.includes(observer);
    if(isExist){
      return console.log("옵저버가 이미 있다")
    }
    console.log("옵저버가 부착되었다")
    this.observers.push(observer)
  }

  detach(observer){
    const observerIndex = this.observers.indexOf(observer)
    if(observerIndex === -1){
      return console.log("옵저버가 존재하지 않습니다.")
    }
    this.observers.splice(observerIndex, 1)
    console.log("옵저버가 해제되었다.")
  }
//구조 2번
  notify(){
    console.log("옵저버들에게 알린다")
    for( const observer of this.observers){
      observer.update(this);
    }
  }
  
  
  //상태 변화
  someBusinessLogic(){
    console.log("뭔가 중요한 일을 하고있다.")
    this.state = Math.floor(Math.random() * (10 + 1))
    console.log(`상태가 방금 ${this.state}로 바뀌었다`)
    this.notify()
  }
}


//각각 옵저버가 구독한 상태에 따라 알림을 받음
//A타입은 상태가 3이하일 때 알림을 받고, B는 상태가 0이거나 2보다 크거나 같을 때 알림을 받음

//구조 3번
class ConcreteObserverA {
  update(subject){
    if(subject instanceof ConcreteSubject && subject.state <3){
      console.log('ConcreteObserverA : 이벤트 반응되었다')
    }
  }
}

class ConcreteObserverB {
  update(subject){
    if(subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)){
      console.log('ConcreteObserverB : 이벤트 반응되었다')
    }
  }
}






//생성 
const test = new ConcreteSubject();

//A타입에 성수를 구독시키고, B타입에 솔을 구독시킴

//구조 4번
const 성수 = new ConcreteObserverA();
const 솔 = new ConcreteObserverB();


//옵저버 부착 구조 6번
test.attatch(성수)
test.attatch(솔)

test.someBusinessLogic();
test.someBusinessLogic();
test.someBusinessLogic();