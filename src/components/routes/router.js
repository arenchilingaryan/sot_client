import React, { lazy, Suspense } from 'react'
import { Spinner } from '../spinner/spinner'
import '../../UI/transition.scss'

const AuthRoutes = lazy(() => import('./routes.auth'))
const UnAuthRoutes = lazy(() => import('./routes.unAuth'))


export const useRoutes = (isAuthenticated) => {



    if (isAuthenticated) {
        return (
            <div className="page page__mobile" >
                <Suspense fallback={<Spinner />}>
                    <AuthRoutes />
                </Suspense>
            </div>
        )
    }

    return (

        <div className="page page__mobile" >
            <Suspense fallback={<Spinner />}>
                <UnAuthRoutes />
            </Suspense>
        </div>
    )
}