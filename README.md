# Finite State Machines in ReScript

I saw this excellent blog post by [@erikras](https://twitter.com/erikras), [Finite State Machines in ReScript](https://erikras.com/blog/finite-state-machines-in-rescript), but he didn't show the code implementing though he provides a demo on the blog post.

I needed to know how to implement it so I when ahead and did it.

# Running

```sh
> git clone https://github.com/idkjs/rescript-state-machine-twitter
> cd rescript-state-machine-twitter
> yarn && yarn dev
```

![screen-shot](./TwitterButton.png)

# A reducer is a single-state state machine

https://erikras.com/blog/reducer-single-state-machine

Demo at [StateMachine.res](src/StateMachine.res)
