
var gcdOfStrings = function (str1, str2) {
    var len1 = str1.length
    var len2 = str2.length
    var currentT = ""
    if (str1 == str2) {
        currentT = str1;
    } else if (len1 > len2) {
        if (str2.indexOf(str1) == -1) {
            currentT = ""
        } else if(len1%len2==0){
            
        }
    }

    return currentT
};
