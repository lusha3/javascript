/**
 * Created by lusha on 2018/8/10.
 */

//
// const arr = ["1", "2", "3"]
// arr.map(item=>item+1)

function fn(){
    console.log("real", this)
    const arr = ["1", "2", "3"]
    arr.map(function (item) {
        console.log( this)
    })

    arr.map(item=>{
        console.log("jiantou:", this)
    })

}

fn.call({a:100})