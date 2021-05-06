
import 'pug-vdom/runtime' // runtime library is required and puts 'pugVDOMRuntime' into the global scope
const render = require('./app.pug.js')
/** @description flatten a possibly nested array in recursive fashion or just return arg if another type */
const flatten = (mightBeArray) => {
  if (!Array.isArray(mightBeArray)) return mightBeArray
  else return mightBeArray.reduce(function(a, b){
    return a.concat(flatten(b));
  }, [])
}
/** @description pug-vdom mixins return arrays not objects, and if block is used to include additional child nodes of the mixin then these will be returned as a nested array. However, Hyperapp's h function expects a flat array of objects, so we need to flatten the children */
const ph = (h, name, attr, children) => {
  return h(name, attr, flatten(children))
}
/** @description Apply pug-vdom's pre-generated render function to create a view based on the supplied state and h function. Noting the need to flatten the children via a modification to h */
export const pugToView = (h, text) => state => {
  return render(
    state,
    (name, props, children) => ph(h, name, props.attributes, children),
    text
  )[0]
}
