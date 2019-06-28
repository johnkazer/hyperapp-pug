import { app, h } from 'hyperapp'
import 'pug-vdom/runtime' // runtime library is required and puts 'pugVDOMRuntime' into the global scope
const content = require('./app.pug.js')

const g = (name, props, children) => { return h(name, props.attributes, children) }

const clickMe = (state, event) => ({
    ...state,
    text: state.value
})
const updateMe = (state, event) => ({
    ...state,
    value: event.target.value
})

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first',
    value: '',
    text: '',
    clickMe,
    updateMe
}

const node = document.getElementById('app')
const view = state => content(state, g)[0] // grabs the root div node

app({
    init: initialState,
    view: view,
    node: node
})
