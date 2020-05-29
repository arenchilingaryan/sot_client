import React from 'react'
import { Redirect } from 'react-router-dom'

export function OtherLogin() {
    return <Redirect to="/select" />
}

export function OtherLogout() {
    return <Redirect to="/" />
}
