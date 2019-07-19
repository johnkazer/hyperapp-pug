import { onlineMachine } from './machines'

const actions = ( () => {
    const targetValue = e => e.target.value

    const updateStatus = (state, data) => {
        const previousStatus = state.onlineState.value
        const { status } = data
        const onlineState = onlineMachine.transition(previousStatus, status)
        return { ...state, onlineState }
    }

    const clickMe = (state, event) => {
        return {
            ...state,
            text: state.value
        }
    }
    const updateMe = (state, value) => ({
        ...state,
        value: value
    })
    return Object.freeze({
        targetValue,
        updateStatus,
        clickMe,
        updateMe
    })
})()
export default actions
