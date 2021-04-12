%%raw(`import './App.css';`)

@react.component
let make = () => {
  <div className="App">
      <div> {React.string("Twitter Button State")} </div>
    <TwitterButton />
  </div>
}
