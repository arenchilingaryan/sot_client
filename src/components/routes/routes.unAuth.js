import React, { lazy, Suspense } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import GetStarted from '../auth/get-started'
import Login from '../auth/auth/login'
import Registration from '../auth/auth/registration'
import { OtherLogout } from '../redirect/redirect'
import Support from '../support/support'
import { Spinner } from '../spinner/spinner'
import './routes.scss'

const FAQ = lazy(() => import('../faq/faq'))
const AboutPage = lazy(() => import('../about/about'))

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
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Registration} />
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
                                <Route path="/support" component={Support} />
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