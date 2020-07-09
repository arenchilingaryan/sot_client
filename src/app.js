import React from 'react'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './components/routes/router'
import { AuthContext } from './context/auth.context'
import { connect } from 'react-redux'
import { toggleMenu } from './redux/reducers/menu.reducer'
import HeaderContainer from './components/header/header.container'
import './app.scss'


function App(props) {


  const { token, login, logout, userId, userCount, email, userName } = useAuth()

  const isAuthenticated = !!token

  const routes = useRoutes(isAuthenticated)

  return (
    <AuthContext.Provider value={{
      token, userId, userCount, email, login, logout, userName, isAuthenticated
    }}>
        <div className="app__wrapper">
          <HeaderContainer />
          <h1 className="menu__button" onClick={props.toggleMenu} > MENU </h1>
          {routes}
        </div>
    </AuthContext.Provider>
  )
}

function mapStateToProps(state) {
  return {
    menu: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleMenu: () => dispatch(toggleMenu())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
