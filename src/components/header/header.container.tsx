import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { connect } from 'react-redux'
import { toggleMenu } from '../../redux/reducers/menu.reducer'
import { toggleMobileMenu } from '../../redux/reducers/menu.mobile.reducer'
import Header from './header'
import './header.scss'



const HeaderContainer = (props: any) => {
  const auth = useContext(AuthContext)

  function logoutHandler(event: React.MouseEvent) {
    event.preventDefault()
    auth.logout()
  }

  return <Header
    menu={props.menu}
    mobileMenu={props.mobileMenu}
    auth={auth}
    toggleMenuType={props.toggleMenuType}
    toggleMobileMenu={props.toggleMobileMenu}
    logoutHandler={logoutHandler}
  />
}

function mapStateToProps(state: any) {
  return {
    menu: state.menu.open,
    mobileMenu: state.mobileMenu.open
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    toggleMenuType: () => dispatch(toggleMenu()),
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)


// localStorage.setItem('userData', JSON.stringify({userId: '5eb326698a36493415fce61e', token: '91d98829jd1j898921je128e81d8989j12j8d8912e812ijd2198dj129d8', userCount: 95, email: 'arenchilingaryan@yandex.ru', userName: 'privet'}))
