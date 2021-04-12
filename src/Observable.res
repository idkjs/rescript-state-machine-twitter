// https://erikras.com/blog/observable-subject-in-rescript
type unlisten = () => unit
type listener<'value> = (. 'value) => unit
type listenerId<'value> = {id: int, listener: listener<'value>}

type subject<'value> = {
  listen: listener<'value> => unlisten,
  get: unit => 'value,
  set: 'value => unit,
}


export createSubject = (initial: 'value) => {
  open Js.Array2
  let value = ref(initial)
  let nextId = ref(0)
  let listeners: array<listenerId<'value>> = []
  {
    get: () => value.contents,
    set: (v: 'value) => {
      value := v
      // notify all listeners
      listeners->forEach(({listener}) => listener(. v))
    },
    listen: (listener: listener<'value>) => {
      let id = nextId.contents
      nextId := id + 1
      listeners->push({id: id, listener: listener})->ignore
      // notify listener of value on listen
      listener(. value.contents)
      () => {
        let index =
          listeners->reducei(
            (foundIndex, listener, index) =>
              listener.id === id ? index : foundIndex,
            -1,
          )
        if index >= 0 {
          listeners->removeFromInPlace(~pos=index)->ignore
        }
      }
    },
  }
}

let sub =createSubject(1)
let v = sub.get()
Js.log(v)
