import React, { useEffect } from 'react'
import './get-started.scss'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

const GetStarted: React.FC = () => {

    useEffect(() => {
        axios.get('http://geoplugin.net/json.gp').then(res => {
            const location = res.data.geoplugin_city
            axios.post('/api/visit', { location })
        })
    }, [])
    return (
        <div className='page'>
            <div className="inside__page starting__inside">
                <div className="starting__center">
                    <h1>Shot On Top</h1>
                </div>

                <p>Shot on Top – мировой проект, благодаря которому креативные и талантливые персоны могут быть услышаны и стать известными.</p>

                <p>Shot on Top связан с приложением Triller, в которым вы можете продвигать свои публикации в топ.</p>

                <p>В месте с Shot on Top можно увеличить количество просмотров и лайков под постами в приложении Triller. </p>
                <p>Shot on Top – Целься в топ! </p>
                <div className="starting__center">
                    <NavLink to="/login">
                        <Button className="starting__button">Sign Ip</Button>
                    </NavLink>
                    <NavLink to="/register">
                        <Button className="starting__button">Sign Up</Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default GetStarted