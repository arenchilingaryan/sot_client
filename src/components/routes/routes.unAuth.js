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
import Support from '../support/support'



function UnAuthRoutes(props) {

    const mobileMenuStyleOpen = {
        transformOrigin: 'right top', 
        transform: 'perspective(500px) rotate(45deg) scale(2.5)',
    }

    return (
        <div className={ props.menu ? "menu menu__open" : "menu" }
        style={ props.mobileMenu ? mobileMenuStyleOpen : null }>
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