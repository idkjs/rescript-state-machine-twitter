open Webapi.Dom

let handleMouseOut = (domElement: Dom.element, e: Dom.mouseEvent, fn) => {
  let targetElement = MouseEvent.target(e) |> EventTarget.unsafeAsElement

  !(domElement |> Element.contains(targetElement)) ? fn(e) : ()
}

let useMouseOut = (onMouseOut: Dom.mouseEvent => unit) => {
  let elementRef = React.useRef(Js.Nullable.null)

  let handleMouseMove = (e: Dom.mouseEvent) =>
    elementRef.current
    ->Js.Nullable.toOption
    ->Belt.Option.map(refValue =>
      handleMouseOut(refValue, e, onMouseOut)
    )
    ->ignore

  React.useEffect0(() => {
    Document.addMouseDownEventListener(handleMouseMove, document)
    Some(() => Document.removeMouseDownEventListener(handleMouseMove, document))
  })

  elementRef
}
