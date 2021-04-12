  @react.component
  let make = React.forwardRef((~className=?, ~children, ref_) =>
    <div>
      <input
        type_="text"
        ?className
        ref=?{Js.Nullable.toOption(ref_)->Belt.Option.map(
          ReactDOM.Ref.domRef,
        )}
      />
      children
    </div>
  )
