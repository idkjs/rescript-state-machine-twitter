%%raw(`import './App.css';`)

// @bs.module("./logo.svg") external logo: string = "default"

@react.component
let make = () => {
  <div className="App">
  //   <NameInputApp />
  //   <div> {React.string("Forward Refs from Rescript Docs")} </div>
  //   <FancyApp />
  //   <div> {React.string("Erikras Curried Reducer")} </div>
  //   <Erikras />
  //   <div> {React.string("Erikras Uncurried Reducer")} </div>
  //   <ErikrasUncurried />
  //   <div> {React.string("Twitter Follow State")} </div>
  //   <FollowState />
  //   <div> {React.string("BoxRefs")} </div>
  //   <BoxRef title="BoxRef1" />
  //   <BoxRef title="BoxRef2" />
  //   <div> {React.string("Cat Refs")} </div>
  //   <Cats />
  // <RetaskEx />
  // <HoverOverMe/>
      <div> {React.string("Twitter Button State")} </div>
    <TwitterButtonVerbose />
  </div>
}
