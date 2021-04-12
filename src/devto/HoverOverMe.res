@react.component
let make = () => {
  let (inHover, setHover) = React.useState(_ => false)

  <div className="App">
    <button onMouseEnter={_ => setHover(_ => true)} onMouseLeave={_ => setHover(_ => false)}>
      {React.string("Hover over me!")}
    </button>
    {inHover ? <p> {React.string("Hi!")} </p> : React.null}
  </div>
}
