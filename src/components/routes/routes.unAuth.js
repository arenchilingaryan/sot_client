import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import GetStarted from '../auth/get-started'
import Login from '../auth/auth/login'
import Registration from '../auth/auth/registration'
import { FAQ } from '../faq/faq'
import { AboutPage } from '../about/about'
import { OtherLogout } from '../redirect/redirect'
import './routes.scss'



function UnAuthRoutes(props) {
    return (
        <div className={ props.menu ? "menu menu__open" : "menu" }>
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
                                    <Route path="/faq" component={FAQ} />
                                    <Route path="/about" component={AboutPage} />
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
        menu: state.menu.open
    }
}

export default connect(mapStateToProps)(UnAuthRoutes)