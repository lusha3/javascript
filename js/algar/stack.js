function Stack() {
  this.stackData = [];
}

Stack.prototype.push = function (val) {
  this.stackData.push(val);
};

Stack.prototype.pop = function () {
  return this.stackData.pop();
};

Stack.prototype.top = function () {
  var len = this.stackData.length;
  return this.stackData[len - 1];
};

Stack.prototype.getMin = function () {
  return this.stackData.sort((a, b) => b - a)[0];
};

let s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop());
console.log(s.getMin());

//ES6

// class NewStack {
//   constructor() {
//     this.stackData = [];
//     this.top = 0;
//   }
//   pop() {
//     this.top--;
//     return this.stackData.pop();
//   }
//   push(val) {
//     this.top++;
//     this.stackData.push(val);
//   }
// }

// var s2 = new NewStack();
// s2.push(1);
// s2.push(3);
// console.log(s2.pop());
