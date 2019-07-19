# hyperapp-pug
See this [blog post](https://dev.to/johnkazer/hyperapp-with-pug-templates-517e) for an explanation of the approach.
Read about [Pug](https://pugjs.org/api/getting-started.html) and [Hyperapp](https://github.com/jorgebucaran/hyperapp) to find out how to extend the functionality of this starter app.

This branch adds basic state machine support (xstate) to show how the logic of part (or all) of an app's state can be regulated by state machine transitions rather than hidden away in the individual functions in actions.js

The Hyperapp framework is wonderfully simple and has a number of features I like:

* Clear functional approach to business logic
* State-driven UI
* Centralised state and no stateful components (easy 'undo' option and perfect for quick and reliable development of small to medium scale apps)
* Events dispatched to update the state which updates the UI using virtualDOM diff
* Fast, small and simple but sufficient

However, previously I've used Pug to define my UI templates. I like the ability to see the page structure and the clearer separation of logic and UI. Combining HTML with the business logic using hyperscript h functions or JSX doesn't sit right with me (yet?) and I find it hard to reason about a page when the layout is so abstract.

Maybe I'll come round eventually, but maybe I don't need to...

Fortunately for me, the project [pug-vdom](https://github.com/batiste/pug-vdom) brings a virtualDOM (obviously) to Pug. So this repository is a demo for how Hyperapp can use Pug templates.

There is also an 'express-server' branch which provides boiler-plate for adding an Express API.
