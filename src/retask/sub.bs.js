


function register(param) {
  
}

function setReg(make) {
  return (register = make);
}

function none() {
  
}

function batch(subs) {
  return function () {
    subs.forEach(function (f) {
          return f();
        });
    
  };
}

function getToken(str) {
  return str.split(".")[0];
}

var diff_array = (function (arr, oldArr) {
    if (arr.length !== oldArr.length) return false
    for (let i = 0;i< arr.length; i++) {
        if (arr[i] !== oldArr[i]) return false
    }
    return true
});

function sameSub(kind, param, oldKind, oldParam) {
  var match = kind === oldKind;
  var match$1 = Array.isArray(param);
  var match$2 = Array.isArray(oldParam);
  if (match) {
    if (match$1) {
      if (match$2) {
        return diff_array(param, oldParam);
      } else {
        return false;
      }
    } else if (match$2) {
      return false;
    } else {
      return param === oldParam;
    }
  } else {
    return false;
  }
}

export {
  register ,
  setReg ,
  none ,
  batch ,
  getToken ,
  sameSub ,
  
}
/* No side effect */
