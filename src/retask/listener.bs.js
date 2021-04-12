

import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

function make(ctor, dtor) {
  return [
          [],
          undefined,
          ctor,
          dtor
        ];
}

function start(inst, cb) {
  inst[0].push(cb);
  if (inst[0].length === 1) {
    inst[1] = Caml_option.some(inst[2]());
    return ;
  }
  
}

function stop(inst, cb) {
  var id = inst[0].indexOf(cb);
  if (id >= 0) {
    inst[0].splice(id, 1);
  }
  var payload = inst[1];
  if (payload !== undefined && inst[0].length === 0) {
    inst[3](Caml_option.valFromOption(payload));
    inst[1] = undefined;
    return ;
  }
  
}

export {
  make ,
  start ,
  stop ,
  
}
/* No side effect */
