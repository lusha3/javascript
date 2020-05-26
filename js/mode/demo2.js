//观察者模式
class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  notify(...args) {
    this.observers.forEach(observer => observer.update(...args));
  }
}

//观察者对象
class Observer {
  update(...args) {
    console.log(...args);
  }
}

let ob1 = new Observer();
let ob2 = new Observer();
let ob3 = new Observer();

let sub = new Subject();
sub.add(ob1);
sub.add(ob2);
sub.add(ob3);

sub.notify("i fired `js` event");
