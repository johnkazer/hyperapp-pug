import { Machine } from 'xstate'

export const onlineMachine = Machine({
    id: 'hyperapp-pug-machine',
    initial: 'online',
    states: {
        offline: {
            on: {
                online: 'online'
            }
        },
        online: {
            on: {
                offline: 'offline'
            }
        }
    }
})
