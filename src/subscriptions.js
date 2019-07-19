import actions from './actions'

const onlineStatus = (dispatch, { action }) => {
    window.addEventListener('online', () => {
        return dispatch(action, { status: 'online' })
    });

    window.addEventListener('offline', () => {
        return dispatch(action, { status: 'offline' })
    });
}
const onlineStatusSub = ({ action }) => [
    onlineStatus,
    {
        action
    }
]

export const subs = (state) => [
    onlineStatusSub({
        action: actions.updateStatus
    })
]
