import { app, h } from 'hyperapp'
import { pugToView } from "./pug-to-view"

const view = pugToView(h)

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

app({
    init: initialState,
    view: view,
    node: node
})
