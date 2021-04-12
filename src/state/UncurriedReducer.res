type state = Idle(int) | Paused(int)
type event = Increment | Decrement | Reset | Pause | Unpause

export let initial = Idle(0)

export let transition = (. state:state, event:event) =>
  switch (state, event) {
    | (Idle(value), Increment) => Idle(value + 1)
    | (Idle(value), Decrement) => Idle(value - 1)
    | (Idle(_), Reset) => initial
    | (Idle(value), Pause) => Paused(value)
    | (Paused(value), Unpause) => Idle(value)
    | (Idle(_), Unpause)
    | (Paused(_), _) => state
  }
