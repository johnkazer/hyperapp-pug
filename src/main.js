import { app, h, text } from 'hyperapp'
import { pugToView } from "./pug-to-view"
import { subs } from './subscriptions'
import { onlineMachine } from './machines'
import actions from './actions'

const view = pugToView(h, text)

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first',
    value: '',
    userText: '',
    onlineState: onlineMachine.initialState,
    handler: {
        clickMe: actions.clickMe,
        updateMe: actions.updateMe
    }
}

const node = document.getElementById('app')

app({
    init: initialState,
    view: view,
    node: node,
    subscriptions: subs
})
