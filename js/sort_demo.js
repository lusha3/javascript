//基础的排序算法
//需求，获取从小到大排序
/*
* 算法的基础思想：那最后一个值 与其他的值比较，如果小就交换位置，一直比到最后，逐个交换*/

function maopaosort(arr){
    var len = arr.length

    //取最后一个值，和前面的逐个比较，比较一轮之后，最后 一个肯定是最大的
    //一直取到第二个，就不用处理了
    for (var i=len; i>=2; i--){
        for(var j=0; j<i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
}

/*
* 选择排序
* 选择排序的主要思想：*/


/*
* 快速排序
* 快速排序的基本思想：
* 通过选择一个基准，将比基准小的值都放左边的数组中，比基准大的值放右边的数组中
* 依次对上述的数组执行递归操作*/

function quicksort(arr){
    //首先数组长度为1，则直接跳过
    var len = arr.length
    if (len < 2) {
        return arr
    }

    //开始处理
    var left = []
    var right = []
    //选择基准,中间向下取整
    var currentIndex = Math.floor(arr.length/2)
    var current = arr.splice(currentIndex, 1)[0]

    for (var i=0; i<len-1; i++){
        if (arr[i] < current){
            left.push(current)
        }else{
            right.push(current)
        }
    }

    return quicksort(left).concat(current, quicksort(right))
}