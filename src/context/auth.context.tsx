import { createContext } from 'react'
import { IAuthContext } from '../interfaces/interfaces';

function noop () {}

export const AuthContext = createContext<IAuthContext>({
    token: '',
    userId: '',
    userCount: 0,
    email: '',
    userName: '',
    login: noop,
    logout: noop,
    isAuthenticated: false
})