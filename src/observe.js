let data = {
  name: "lusha",
  age: "30"
};

function defineReactive(target, key, value) {
  Object.defineProperty(target, key, {
    set: function(newValue) {
      if (newValue != value) {
        console.log("set");
        value = newValue;
        //更新视图
        updataView();
      }
    },
    get: function() {
      return value;
    }
  });
}
function observer(obj) {
  if (typeof obj != "object" || typeof obj === "undefined") {
    return;
  }
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}

function updataView() {
  console.log("update");
  document.getElementById("root").textContent = data.age;
}

observer(data);

console.log(data.age);
data.age = "31";
console.log(data.age);
