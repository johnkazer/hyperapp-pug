# hyperapp-pug
See this [blog post](https://dev.to/johnkazer/hyperapp-with-pug-templates-517e) for an explanation of the approach (Pug code and simple app example reproduced below too).
Read about [Pug](https://pugjs.org/api/getting-started.html) and [Hyperapp](https://github.com/jorgebucaran/hyperapp) to find out how to extend the functionality of this starter app (currently supports Pug v2.0.4 and Hyperapp v2.0.12).

The Hyperapp framework is wonderfully simple and has a number of features I like:

* Clear functional approach to business logic
* State-driven UI
* Centralised state and no stateful components (easy 'undo' option and perfect for quick and reliable development of small to medium scale apps)
* Events dispatched to update the state which updates the UI using virtualDOM diff
* Fast, small and simple but sufficient

However, previously I've used Pug to define my UI templates. I like the ability to see the page structure and the clearer separation of logic and UI. Combining HTML with the business logic using hyperscript h functions or JSX doesn't sit right with me (yet?) and I find it hard to reason about a page when the layout is so abstract.

Maybe I'll come round eventually, but maybe I don't need to...

Fortunately for me, the project [pug-vdom](https://github.com/batiste/pug-vdom) brings a virtualDOM (obviously) to Pug. So this repository is a demo for how Hyperapp can use Pug templates. Note that I had to tweak pug-vdom slightly to handle textNodes equivalently to Hyperapp, so there is a local copy of pug-vdom.js (version 1.1.2).

There are also branches which provide variations and extensions:
* An 'express-server' branch which provides boiler-plate for adding an Express API
* An 'xstate' branch which shows how to use a state machine to manage actions

As a simple example, the wrapper processes the following standard Pug code into a very simple app with a couple (change and click) event handlers:

```pug
mixin makeHeading (content)
    h1= content
    block
// Need a root div to grab as the start of the view
div
    // receives the <greet> variable from the supplied state object
    - var greeting = "Hello " + greet
    +makeHeading("Demo using Pug templates with Hyperapp v2")
        p More stuff if needed but here just to demo adding a block to a mixin
    p(style={color: "red"}) #{greeting}
    input(size="60" placeholder=placeholder onchange=handler.updateMe)
    button(id='clickMe' onclick=handler.clickMe) Click Me
    p #{userText}
```
![image](https://user-images.githubusercontent.com/30650393/117368158-0d49f480-aebb-11eb-827f-cafe9b36d8ce.png)
