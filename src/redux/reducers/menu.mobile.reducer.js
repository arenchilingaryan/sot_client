const initialState = {
    open: false
}

export const toggleMobileMenu = () => ({ type: 'TOGGLE__MOBILE__MENU' })

export default function mobileMenuReducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE__MOBILE__MENU': return { open: !state.open }
        default: return state
    }
}
