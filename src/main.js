import { app, h, text } from 'hyperapp'
import { pugToView } from "./pug-to-view"

const view = pugToView(h, text)

const clickMe = (state, event) => {
    return ({
        ...state,
        userText: state.value
    })
}
const updateMe = (state, event) => {
    return ({
        ...state,
        value: event.target.value
    })
}

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first, hit \<enter\> then click the button',
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
