import React from 'react'
import { NavLink } from 'react-router-dom'
import Palm from '../../img/select.jpeg'
import Dust from '../../img/selectsec.jpeg'
import './select-page.scss'

const SelectPage = () => {
    return (
        <div className="selectPage page">
            <h1 className="selectPage__title"><span>Please select</span>&nbsp;&nbsp;option</h1>
            <div className="selectPage__img-container">
                <img src={Palm} alt="sorry :'(" />
                <img src={Dust} alt="sorry :'(" />
            </div>
            <div className="selectPage__buttons">
                <NavLink to="/work"><button className="selectPage__button">Start to work</button></NavLink>
                <NavLink to="/prices"><button className="selectPage__button">Add Counts</button></NavLink>
            </div>
        </div>
    )
}

export default SelectPage
