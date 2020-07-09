import React from 'react'
import { NavLink } from 'react-router-dom'
import { memoComponent } from '../../hooks/memo.component';
import './select-page.scss'

const SelectPage = () => {
    return (
        <div itemScope itemType="http://schema.org/Event" className="selectPage page">
            <h1 className="selectPage__title"><span itemProp="about">Please select</span>option</h1>
            <div className="selectPage__buttons">
                <NavLink itemProp="offers" className="selectPage__button" to="/work">Start to work</NavLink>
                <NavLink itemProp="offers" className="selectPage__button" to="/prices">Add Counts</NavLink>
            </div>
        </div>
    )
}

export default memoComponent(SelectPage)
