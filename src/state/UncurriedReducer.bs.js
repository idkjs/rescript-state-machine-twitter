


var initial = {
  TAG: /* Idle */0,
  _0: 0
};

function transition(state, $$event) {
  if (state.TAG !== /* Idle */0) {
    if ($$event >= 4) {
      return {
              TAG: /* Idle */0,
              _0: state._0
            };
    } else {
      return state;
    }
  }
  var value = state._0;
  switch ($$event) {
    case /* Increment */0 :
        return {
                TAG: /* Idle */0,
                _0: value + 1 | 0
              };
    case /* Decrement */1 :
        return {
                TAG: /* Idle */0,
                _0: value - 1 | 0
              };
    case /* Reset */2 :
        return initial;
    case /* Pause */3 :
        return {
                TAG: /* Paused */1,
                _0: value
              };
    case /* Unpause */4 :
        return state;
    
  }
}

export {
  initial ,
  transition ,
  
}
/* No side effect */
