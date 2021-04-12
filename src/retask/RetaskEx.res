open ReTask
@react.component
let make = () => {
    let (state, dispatch) = useReducerT({
        init: (0, Time.delay(1000, _ => 1)),
        update: (state, action) => (state + action, Cmd.none),
        sub: state => DomEvent.onDocument("click", ev => state)
    })

    <div>{state -> string_of_int -> React.string}</div>
}
