import { combineReducers } from 'redux'
import menuReducer from './menu.reducer'
import profileReducer from './profile.reducer'
import mobileMenuReducer from './menu.mobile.reducer'

export default combineReducers({
    menu: menuReducer,
    profilePage: profileReducer,
    mobileMenu: mobileMenuReducer
})
