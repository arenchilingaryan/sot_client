import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import SelectPage from '../select-page/select-page'
import profileContainer from '../profile/profile.container'
import { Work } from '../select-page/work/work'
import { PayPage } from '../select-page/pay-counts/pay-counts'
import { FAQ } from '../faq/faq'
import { AboutPage } from '../about/about'
import { OtherLogin } from '../redirect/redirect'
import './routes.scss'



function AuthRoutes(props) {

    const mobileMenuStyleOpen = {
        transformOrigin: 'right top', 
        transform: 'perspective(500px) rotate(45deg) scale(2.5)',
        
    }

    return (
        <div 
            className={ props.menu ? "menu menu__open" : "menu" } 
            style={ props.mobileMenu ? mobileMenuStyleOpen : null } >
            <Route render={({ location }) => {
                    return (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                timeout={300}
                                classNames="fade"
                            >
                                <Switch location={location} >
                                    <Route path="/select" component={SelectPage} />
                                    <Route path="/work" component={Work} />
                                    <Route path="/prices" component={PayPage} />
                                    <Route path="/faq" component={FAQ} />
                                    <Route path="/about" component={AboutPage} />
                                    <Route path="/me" component={profileContainer} />
                                    <Route component={OtherLogin} />
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

export default  connect(mapStateToProps)(AuthRoutes)