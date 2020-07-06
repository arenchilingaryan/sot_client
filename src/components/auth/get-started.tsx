import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import './get-started.scss'
import { memoComponent } from '../../hooks/memo.component';

const GetStarted: React.FC = () => {

    useEffect(() => {
        axios.get('http://geoplugin.net/json.gp').then(res => {
            const location = res.data.geoplugin_city
            axios.post('/api/visit', { location })
        })
    }, [])


    return (
        <div className='page'>
            <div className="starting__inside">
                <div itemScope itemType="http://schema.org/SoftwareApplication" className="inside__page starting__inside">
                    <div className="starting__inside">
                        <div className="starting__center">
                            <h1 itemProp="name">Shot On Top</h1>
                        </div>
                        <div itemProp="description" className="starting__text">
                            <p>Shot on Top is a world project which can help   to creative and talented people become heard and famous.</p>

                            <p>Shot on Top works on the Triller platform where you can promote your publications to the top.</p>

                            <p> Together with Shot on Top, you can increase the reach of your target audience, as well as the number of views and likes under posts in the Triller app. </p>
                        </div>
                        <div className="starting__center">
                            <NavLink to="/login" className="starting__button">Sign In</NavLink>
                            <NavLink to="/register" className="starting__button">Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default memoComponent(GetStarted)