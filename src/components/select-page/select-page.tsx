import React from 'react'
import { NavLink } from 'react-router-dom'
import './select-page.scss'

const SelectPage = () => {
    return (
        <div className="selectPage page">
            <h1 className="selectPage__title"><span>Please select</span>&nbsp;&nbsp;option</h1>
            <div className="selectPage__buttons">
                <NavLink to="/work"><button className="selectPage__button">Start to work</button></NavLink>
                <NavLink to="/prices"><button className="selectPage__button">Add Counts</button></NavLink>
            </div>
        </div>
    )
}

export default SelectPage
