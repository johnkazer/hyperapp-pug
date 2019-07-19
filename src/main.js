import { app, h } from 'hyperapp'
import { pugToView } from "./pug-to-view"
import { subs } from './subscriptions'
import { onlineMachine } from './machines'
import actions from './actions'

const view = pugToView(h)

const initialState = {
    greet: 'friends',
    placeholder: 'Write something here first',
    value: '',
    text: '',
    onlineState: onlineMachine.initialState,
    handler: {
        clickMe: actions.clickMe,
        updateMe: actions.updateMe,
        targetValue: actions.targetValue
    }
}

const node = document.getElementById('app')

app({
    init: initialState,
    view: view,
    node: node,
    subscriptions: subs
})
