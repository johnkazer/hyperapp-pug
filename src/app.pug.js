// PUG VDOM generated file
function render(context, h) {
  if (!pugVDOMRuntime) throw "pug-vdom runtime not found.";
  var runtime = pugVDOMRuntime
  var locals = context;
  var self = locals;
  var remainingKeys = pugVDOMRuntime.exposeLocals(locals);
  for (var prop in remainingKeys) {
    eval('var ' + prop + ' =  locals.' + prop);
  }
  var n0Child = []
  var n1Child = []
  var greeting = "Hello " + greet
  var n2Child = []
  n2Child = n2Child.concat(greeting)
  var props = {attributes: runtime.compileAttrs([{name:'style', val: {color: "red"}}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n2 = h('p', props, n2Child)
  n1Child.push(n2)
  var n3Child = []
  n3Child.push("Click Me")
  var props = {attributes: runtime.compileAttrs([{name:'id', val: 'clickMe'},{name:'onclick', val: handler.clickMe}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n3 = h('button', props, n3Child)
  n1Child.push(n3)
  var n4Child = []
  var props = {attributes: runtime.compileAttrs([{name:'placeholder', val: placeholder},{name:'onchange', val: [handler.updateMe,handler.targetValue]}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n4 = h('input', props, n4Child)
  n1Child.push(n4)
  var n5Child = []
  n5Child = n5Child.concat(text)
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n5 = h('p', props, n5Child)
  n1Child.push(n5)
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n1 = h('div', props, n1Child)
  n0Child.push(n1)
  pugVDOMRuntime.deleteExposedLocals()
  return n0Child
}

module.exports = render
