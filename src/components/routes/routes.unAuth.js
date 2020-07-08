import React, { lazy, Suspense } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import GetStarted from '../auth/get-started'
import { OtherLogout } from '../redirect/redirect'
import { Spinner } from '../spinner/spinner'
import './routes.scss'


const Registration = lazy(() => import('../auth/auth/registration'))
const FAQ = lazy(() => import('../faq/faq'))
const Support = lazy(() => import('../support/support'))
const AboutPage = lazy(() => import('../about/about'))
const Login = lazy(() => import('../auth/auth/login'))

function UnAuthRoutes(props) {
    const mobileMenuStyleOpen = {
        transformOrigin: 'right top',
        transform: 'perspective(500px) rotate(45deg) scale(2.5)',
    }


    return (
        <div className={props.menu ? "menu menu__open" : "menu"}
            style={props.mobileMenu ? mobileMenuStyleOpen : null}>
            <Route render={({ location }) => {
                return (
                    <TransitionGroup>
                        <CSSTransition
                            key={location.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <Switch location={location} >

                                <Route path="/" exact component={GetStarted} />
                                <Route path="/login" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <Login />
                                        </Suspense>
                                    )
                                }} />
                                <Route path="/register" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <Registration />
                                        </Suspense>
                                    )
                                }} />
                                <Route path="/faq" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <FAQ />
                                        </Suspense>
                                    )
                                }} />
                                <Route path="/about" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <AboutPage />
                                        </Suspense>
                                    )
                                }} />
                                <Route path="/support" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <Support />
                                        </Suspense>
                                    )
                                }} />
                                <Route component={OtherLogout} />

                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )

            }} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        menu: state.menu.open,
        mobileMenu: state.mobileMenu.open
    }
}


export default connect(mapStateToProps)(UnAuthRoutes)