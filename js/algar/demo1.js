function getCount(arr) {
  console.log(arr);
  let len = arr.length;
  let sameObj = {};
  let key = undefined;
  for (var i = 0; i < len; i++) {
    if (arr[i] in sameObj) {
      sameObj[arr[i]]++;
      if (sameObj[arr[i]] >= len / 2) {
        key = sameObj[arr[i]];
        break;
      }
    } else {
      sameObj[arr[i]] = 1;
    }
  }

  console.log(key);
  console.log(sameObj);

  return key;
}

getCount(["1", "2", "3", "3", "3", "4", "3"]);
