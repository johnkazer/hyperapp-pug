// PUG VDOM generated file
function render(context, h, text = (string) => string) {
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
  var status = "You are currently " + onlineState.value
  var n2Child = []
  n2Child = n2Child.concat(text(greeting))
  var props = {attributes: runtime.compileAttrs([{name:'style', val: {color: "red"}}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n2 = h('p', props, n2Child)
  n1Child.push(n2)
  var n3Child = []
  n3Child = n3Child.concat(text(status))
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n3 = h('p', props, n3Child)
  n1Child.push(n3)
  var n4Child = []
  n4Child.push(text("Click Me"))
  var props = {attributes: runtime.compileAttrs([{name:'id', val: 'clickMe'},{name:'onclick', val: handler.clickMe}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n4 = h('button', props, n4Child)
  n1Child.push(n4)
  var n5Child = []
  var props = {attributes: runtime.compileAttrs([{name:'placeholder', val: placeholder},{name:'onchange', val: handler.updateMe}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n5 = h('input', props, n5Child)
  n1Child.push(n5)
  var n6Child = []
  n6Child = n6Child.concat(text(userText))
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n6 = h('p', props, n6Child)
  n1Child.push(n6)
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n1 = h('div', props, n1Child)
  n0Child.push(n1)
  pugVDOMRuntime.deleteExposedLocals()
  return n0Child
}

module.exports = render
