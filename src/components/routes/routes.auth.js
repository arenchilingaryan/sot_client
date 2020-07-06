import React, { lazy, Suspense } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import SelectPage from '../select-page/select-page'
import { Work } from '../select-page/work/work'
import { PayPage } from '../select-page/pay-counts/pay-counts'
import { OtherLogin } from '../redirect/redirect'
import Support from '../support/support'
import './routes.scss'
import { Spinner } from '../spinner/spinner'

const ProfileContainer = lazy(() => import('../profile/profile.container'))
const FAQ = lazy(() => import('../faq/faq'))
const AboutPage = lazy(() => import('../about/about'))


function AuthRoutes(props) {

    const mobileMenuStyleOpen = {
        transformOrigin: 'right top',
        transform: 'perspective(500px) rotate(45deg) scale(2.5)',
    }

    return (
        <div
            className={props.menu ? "menu menu__open" : "menu"}
            style={props.mobileMenu ? mobileMenuStyleOpen : null} >
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
                                <Route path="/me" render={() => {
                                    return (
                                        <Suspense fallback={<Spinner />}>
                                            <ProfileContainer />
                                        </Suspense>
                                    )
                                }} />
                                <Route path="/support" component={Support} />
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

export default connect(mapStateToProps)(AuthRoutes)