open ReactDomExperimental
open Observable
Js.log2("Observable_VALUE",v)
switch createRootWithId("root") {
| Some(root) => root->render(<React.StrictMode> <App /> </React.StrictMode>)
| None => ()
}
