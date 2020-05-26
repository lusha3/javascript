var fsort = function (list) {
  list.sort(sort_fn);
  console.log(list);
};

//la:"1.5" ,lb:"1.5.1"
var sort_fn = function (la, lb) {
  var laArr = la.split("."),
    lbArr = lb.split("."),
    minLength = Math.min(laArr.length, lbArr.length),
    maxLength = Math.max(laArr.length, lbArr.length);
  for (var i = 0; i < maxLength; i++) {
    if (i >= lbArr.length) {
      //说明a比b长
      return 1;
    } else if (i >= laArr.length) {
      return -1;
    }
    if (laArr[i] == lbArr[i]) continue;
    return parseInt(laArr[i]) - parseInt(lbArr[i]);
  }
};

var versions = ["1.5.1", "1.5", "6", "0.32"];
console.log(fsort(versions));
