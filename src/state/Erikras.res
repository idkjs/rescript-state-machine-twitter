type state = Idle(int) | Paused(int)
type event = Increment | Decrement | Reset | Pause | Unpause

let initial = Idle(0)

let transition = (state: state, event: event) =>
  switch (state, event) {
  | (Idle(value), Increment) => Idle(value + 1)
  | (Idle(value), Decrement) => Idle(value - 1)
  | (Idle(_), Reset) => initial
  | (Idle(value), Pause) => Paused(value)
  | (Paused(value), Unpause) => Idle(value)
  | (Idle(_), Unpause)
  | (Paused(_), _) => state
  }

@react.component
let make = () => {
  let (state, event) = React.useReducer(transition, initial)

  let count = switch state {
  | Idle(value) => value
  | Paused(value) => value
  }

  <>
    {React.string("Count:" ++ Belt.Int.toString(count))}
    <button onClick={_ => event(Decrement)}> {React.string("-")} </button>
    <button onClick={_ => event(Increment)}> {React.string("+")} </button>
    <button onClick={_ => event(Reset)}> {React.string("Reset")} </button>
    <button onClick={_ => event(Pause)}> {React.string("Pause")} </button>
    <button onClick={_ => event(Unpause)}> {React.string("Unpause")} </button>
  </>
}
