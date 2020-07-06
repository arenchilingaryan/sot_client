import React from 'react'
import AuthRoutes from './routes.auth'
import UnAuthRoutes from './routes.unAuth'
import '../../UI/transition.scss'



export const useRoutes = (isAuthenticated) => {



    if (isAuthenticated) {
        return (
            <div className="page page__mobile" >
                <AuthRoutes />
            </div>
        )
    }

    return (
        
        <div className="page page__mobile" >
            <UnAuthRoutes />
        </div>
    )
}