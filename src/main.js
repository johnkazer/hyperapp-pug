import { app, h, text } from 'hyperapp'
import { pugToView } from "./pug-to-view"

const view = pugToView(h, text)

const clickMe = (state, event) => ({
    ...state,
    userText: state.value
})
const updateMe = (state, event) => ({
    ...state,
    value: event.target.value
})

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first',
    value: '',
    userText: '',
    handler: {
        clickMe,
        updateMe
    }
}

const node = document.getElementById('app')

app({
    init: initialState,
    view: view,
    node: node
})
