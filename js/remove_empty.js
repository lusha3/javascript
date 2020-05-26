function remove_empty(content) {
    var len=content.length;
//     console.log(content)
    var newStr = ""
    for (var i=0;i<len;i++){
        if (content[i] !== " "){
            newStr += content[i]
        }
    }
    console.log("contennt:",newStr)
    return newStr
}

var a = remove_empty("AAAAA   aaaa")
console.log(a)

