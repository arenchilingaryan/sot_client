import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import { connect } from 'react-redux'
import { toggleMenu } from '../../redux/reducers/menu.reducer'
import { toggleMobileMenu } from '../../redux/reducers/menu.mobile.reducer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserCircle,
  faHome,
  faFileInvoiceDollar,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons'
import './header.scss'

type HeaderProps = {
    menu: boolean
    mobileMenu: boolean
    toggleMenuType: () => void
    toggleMobileMenu: () => void
}

const Header: React.FC<HeaderProps> = props => {
    const auth = useContext(AuthContext)

    function logoutHandler(event: React.MouseEvent) {
        event.preventDefault()
        auth.logout()
    }

    return (
      <div>
        <nav className={ props.menu ? "header header__open" : "header" }>
            <ul className="header__items">
              <div>&#160;&#160;&#160;</div>
              {auth.email === null ? null : <li onClick={props.toggleMenuType} > <NavLink className="header__nav" to="/me">My Account</NavLink> </li>}
              {auth.token ? <li onClick={props.toggleMenuType}> <NavLink className="header__nav" to="/select">Select Options</NavLink> </li> : null}
              {auth.email === null ? <li onClick={props.toggleMenuType} > <NavLink className="header__nav" to="/">Home</NavLink> </li> : null}
              <li onClick={props.toggleMenuType}> <NavLink className="header__nav" to="/faq">FAQ</NavLink> </li>
              <li onClick={props.toggleMenuType}> <NavLink className="header__nav" to="/about">About Us</NavLink> </li>
              <li onClick={props.toggleMenuType}> <NavLink className="header__nav" to="/support">Support</NavLink> </li>
              {auth.email === null ? null : <li onClick={props.toggleMenuType} className="header__nav subNav">{auth.userName}: {auth.userCount} $</li>}
              {auth.email === null ? null : <li onClick={props.toggleMenuType}> <NavLink className="header__nav" onClick={logoutHandler} to="/logout">Logout</NavLink> </li>}
            </ul>
        </nav>
        <nav className="header__mobile">
            <ul className="header__mobile-items">
              {auth.token ? <li> <NavLink className="header__mobile__nav" to="/prices"><FontAwesomeIcon icon={faFileInvoiceDollar} /></NavLink> </li> : null}
              {auth.token ? <li> <NavLink className="header__mobile__nav" to="/work"><FontAwesomeIcon icon={faPlusSquare} /></NavLink> </li> : null}
              {auth.email === null ? <li> <NavLink className="header__mobile__nav" to="/"><FontAwesomeIcon icon={faHome} /></NavLink> </li> : null}
              {auth.email === null ? null : <li> <NavLink className="header__mobile__nav" to="/me"><FontAwesomeIcon icon={faUserCircle} /></NavLink> </li>}
            </ul>
            <div className="settings__mobile">
              <div className="settings__mobile__icon" onClick={props.toggleMobileMenu}>
                <span></span>
              </div>
              <ul className="settings__mobile__open" style={ props.mobileMenu ? {display: 'block'} : {display: 'none'} } >
                {auth.email === null ? null : <li onClick={props.toggleMobileMenu} > <NavLink className="header__nav" to="/me">My Account</NavLink> </li>}
                {auth.token ? <li onClick={props.toggleMobileMenu}> <NavLink className="header__nav" to="/select">Select Options</NavLink> </li> : null}
                {auth.email === null ? <li onClick={props.toggleMobileMenu} > <NavLink className="header__nav" to="/">Home</NavLink> </li> : null}
                <li onClick={props.toggleMobileMenu}> <NavLink className="header__nav" to="/faq">FAQ</NavLink> </li>
                <li onClick={props.toggleMenuType}> <NavLink className="header__nav" to="/support">Support</NavLink> </li>
                <li onClick={props.toggleMobileMenu}> <NavLink className="header__nav" to="/about">About Us</NavLink> </li>
                {auth.email === null ? null : <li onClick={props.toggleMobileMenu} className="header__nav subNav">{auth.userName}: {auth.userCount} $</li>}
                {auth.email === null ? null : <li onClick={props.toggleMobileMenu}> <NavLink className="header__nav" onClick={logoutHandler} to="/logout">Logout</NavLink> </li>}
              </ul>
            </div>
        </nav>
      </div>

    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)


// localStorage.setItem('userData', JSON.stringify({userId: '5eb326698a36493415fce61e', token: '91d98829jd1j898921je128e81d8989j12j8d8912e812ijd2198dj129d8', userCount: 95, email: 'arenchilingaryan@yandex.ru', userName: 'privet'}))
