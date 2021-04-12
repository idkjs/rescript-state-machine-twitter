

@bs.send external focus: Dom.element => unit = "focus"

@react.component
let make = () => {
  let myRef = React.useRef(Js.Nullable.null)

  let handleClick = () =>
    myRef.current
    ->Js.Nullable.toOption
    ->Belt.Option.forEach(myRef => myRef->focus)

  // let onClick = _ => handleClick()

  <div>
    <NameInput className="fancy" ref=myRef>
      <button onClick={_=>handleClick()}> {React.string("Click here to focus Input")} </button>
    </NameInput>
  </div>
}
