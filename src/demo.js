// var obj = {a: 100, b:200}
// var a = obj.a
// var b = obj.b
//
// const obj = {a: 100, b:200}
// const {a,e} = obj
//
//
// const arr = ["xx", "yy", "zz"]
// const {x,y,z,m} = arr

//
// const obj= {a:100, b:200}
//
// for (let item in obj){
//     console.log(item)
// }
//
// console.log(item)

// function fn(a, b=0) {
//     // if(b == null) {
//     //     b=0
//     // }
//
//     console.log(a,b)
// }

// const arr=["1", "2", "3"]
// arr.map(item => item+1)
// arr.map((item, index) => {
//     console.log(item)
//     return item+1
// })
//
// arr.map(function (item) {
//     return item+1
// })

var a ={a: "111"}
// console.log(a.__proto__)

var b = function (name) {
    console.log(name)
}

var c  = new b("bbb")
console.log(b.__proto__ === Function.prototype)
console.log(c.__proto__ === b.prototype)
console.log(b.prototype == Function.prototype)
console.log( Object.prototype)