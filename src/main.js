import { app, h } from 'hyperapp'
import { pugToView } from "./pug-to-view"

const view = pugToView(h)
const targetValue = e => e.target.value

const clickMe = (state, event) => ({
    ...state,
    text: state.value
})
const updateMe = (state, value) => ({
    ...state,
    value: value
})

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first',
    value: '',
    text: '',
    clickMe,
    updateMe,
    targetValue
}

const node = document.getElementById('app')

app({
    init: initialState,
    view: view,
    node: node
})
