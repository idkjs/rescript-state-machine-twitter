


function register(param) {
  
}

function setReg(make) {
  return (register = make);
}

function none() {
  
}

function batch(cmds) {
  return function () {
    cmds.forEach(function (f) {
          return f();
        });
    
  };
}

export {
  register ,
  setReg ,
  none ,
  batch ,
  
}
/* No side effect */
