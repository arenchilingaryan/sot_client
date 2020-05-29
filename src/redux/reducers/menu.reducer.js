const initialState = {
    open: false
}

export const toggleMenu = () => ({ type: 'TOGGLE__MENU' })

export default function menuReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE__MENU': return { open: !state.open }
        default: return state
    }
}