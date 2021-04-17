import { onlineMachine } from './machines'

const actions = ( () => {

    const updateStatus = (state, data) => {
        const previousStatus = state.onlineState.value
        const { status } = data
        const onlineState = onlineMachine.transition(previousStatus, status)
        return { ...state, onlineState }
    }

    const clickMe = (state, event) => {
        return {
            ...state,
            userText: state.value
        }
    }
    const updateMe = (state, event) => ({
        ...state,
        value: event.target.value
    })
    return Object.freeze({
        updateStatus,
        clickMe,
        updateMe
    })
})()
export default actions
