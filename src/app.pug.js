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
  function makeHeading(content, __block) {
    var n1Child = []
    var n2Child = []
    n2Child = n2Child.concat(text(content))
    var props = {attributes: runtime.compileAttrs([], [])};
    if (props.attributes.id) props.key = props.attributes.id;
    var n2 = h('h1', props, n2Child)
    n1Child.push(n2)
    n1Child.push(__block);
    return n1Child
  }
  var n3Child = []
  var greeting = "Hello " + greet
    var n4Child = []
    var n5Child = []
    n5Child.push(text("More stuff if needed but here just to demo adding a block to a mixin"))
    var props = {attributes: runtime.compileAttrs([], [])};
    if (props.attributes.id) props.key = props.attributes.id;
    var n5 = h('p', props, n5Child)
    n4Child.push(n5)
    n3Child.push(makeHeading("Demo using Pug templates with Hyperapp v2", n4Child));
  var n6Child = []
  n6Child = n6Child.concat(text(greeting))
  var props = {attributes: runtime.compileAttrs([{name:'style', val: {color: "red"}}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n6 = h('p', props, n6Child)
  n3Child.push(n6)
  var n7Child = []
  var props = {attributes: runtime.compileAttrs([{name:'size', val: "60"},{name:'placeholder', val: placeholder},{name:'onchange', val: handler.updateMe}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n7 = h('input', props, n7Child)
  n3Child.push(n7)
  var n8Child = []
  n8Child.push(text("Click Me"))
  var props = {attributes: runtime.compileAttrs([{name:'id', val: 'clickMe'},{name:'onclick', val: handler.clickMe}], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n8 = h('button', props, n8Child)
  n3Child.push(n8)
  var n9Child = []
  n9Child = n9Child.concat(text(userText))
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n9 = h('p', props, n9Child)
  n3Child.push(n9)
  var props = {attributes: runtime.compileAttrs([], [])};
  if (props.attributes.id) props.key = props.attributes.id;
  var n3 = h('div', props, n3Child)
  n0Child.push(n3)
  pugVDOMRuntime.deleteExposedLocals()
  return n0Child
}

module.exports = render
