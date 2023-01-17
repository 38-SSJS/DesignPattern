//구독자의 class update함수를 갖고 있고, update되면 state 알림
class SubscriberFalse{
  update(isState){
    if(!isState){
      console.log(`상태가 ${isState}이다`)
    }
  }
}

class SubscriberTrue{
  update(isState){
    if(isState){
      console.log(`상태가 ${isState}이다`)
    }
  }
}


class Teacher {
  constructor(){
    this.student = [];
    this.state = true;
  }

  subscribe(student){
    this.student.push(student)
  }

  unsubscribe(student){
    this.student = this.student.filter(item => item!== student)
  }
  
  notify() {
    this.state = !this.state;
    for (let i of this.student){
      i.update(this.state)
    }
  }
}

const teacher = new Teacher();

const 진혁 = new Subscriber();
const 수 = new Subscriber();



teacher.subscribe(진혁);
teacher.subscribe(수);


teacher.notify();
//상태가 false로 바뀌었다.
teacher.notify();
//상태가 true로 바뀌었다.
