import React, { useState, useEffect, SyntheticEvent } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useHttp } from '../../../hooks/http.hook'
import { IRegisterForm } from '../../../interfaces/interfaces'
import { useHistory } from 'react-router'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios'
import './login.scss'
import { Spinner } from '../../spinner/spinner'
import { memoComponent } from '../../../hooks/memo.component';

const Registration: React.FC = () => {
    const { loading, request, error } = useHttp()

    const history = useHistory()

    const [type, setType] = useState<boolean>(false)
    const [form, setForm] = useState<IRegisterForm>({
        nickName: '',
        email: '',
        password: '',
        phone: '',
        location: ''
    })

    useEffect(() => {
        axios.get('http://geoplugin.net/json.gp').then(res => {
            setForm({ ...form, location: res.data.geoplugin_city })
        })
    }, [])


    const passwordViewHandler = () => setType(!type)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async (event: SyntheticEvent) => {
        event.preventDefault()
        try {
            const data = await request('/api/auth/register', 'POST', { ...form })
            if (data) {
                history.push('/login')
            }
        } catch (e) {

        }
    }

    const phoneHandler = (phoneNumber: string) => {
        setForm({ ...form, phone: phoneNumber })
    }

    return (
        <div className="page">
            <div itemScope itemType="http://schema.org/RegisterAction" className="register__form">
                <div>
                    <h1 itemProp="name">Register</h1>
                </div>
                <div className="login__error" style={error ? { display: 'block' } : { display: 'none' }}>
                    {error}
                </div>
                <form className="login__form" onSubmit={registerHandler}>
                    <label htmlFor="email">Username:</label>
                    <input className="login__input"
                        onChange={changeHandler}
                        name="nickName" />
                    <label htmlFor="email">Email:</label>
                    <input className="login__input"
                        itemProp="sameAs"
                        onChange={changeHandler}
                        name="email" />
                    <div className="login__input-line">
                        <EyeOutlined
                            style={type ? { display: "block" } : { display: "none" }}
                            className="password-eye-open"
                            onClick={passwordViewHandler}
                        />
                        <EyeInvisibleOutlined
                            style={type ? { display: "none" } : { display: "block" }}
                            className="password-eye-closed"
                            onClick={passwordViewHandler}
                        />
                        <label htmlFor="password">Password:</label>
                        <input className="login__input"
                            onChange={changeHandler}
                            type={type ? "text" : "password"}
                            name="password" />
                    </div>
                    <label htmlFor="number">Phone:</label>
                    <PhoneInput
                        country={'us'}
                        onChange={phoneHandler}
                    />

                    <div className="login__btns">
                        {
                            loading
                                ? <Spinner />
                                : <button
                                    itemProp="potentialAction"
                                    className="login__button"
                                    disabled={loading}
                                    onClick={registerHandler}
                                >
                                    Sign Up</button>
                        }

                    </div>
                </form>
            </div>
        </div>
    )
}

export default memoComponent(Registration)