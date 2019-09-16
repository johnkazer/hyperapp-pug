import { Machine } from 'xstate'

export const onlineMachine = Machine({
    id: 'onlineMachine',
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
