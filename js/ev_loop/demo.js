setTimeout(function () {
    console.log(1);
});
setTimeout(function () {
    console.log(4)
})

new Promise(function(resolve,reject){
    console.log(2)
    resolve(3)
}).then(function(val){
    console.log(val);
})