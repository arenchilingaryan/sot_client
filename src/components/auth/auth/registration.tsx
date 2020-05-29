import React, { useState, useEffect, SyntheticEvent } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useHttp } from '../../../hooks/http.hook'
import { IRegisterForm } from '../../../interfaces/interfaces';
import axios from 'axios'
import './login.scss'

const Registration: React.FC = () => {
    const { loading, request } = useHttp()

    const [error, setError] = useState<boolean>(false)
    const [type, setType] = useState<boolean>(false)
    const [form, setForm] = useState<IRegisterForm>({
        nickName: '',
        email: '',
        password: '',
        phone: '',
        location: ''
    })

    useEffect(() => {
        return () => {
            setError(false)
        }
    }, [error])

    useEffect(() => {
        axios.get('http://geoplugin.net/json.gp').then(res => {
                setForm({...form, location: res.data.geoplugin_city})
            })
    }, [])


    const passwordViewHandler = () => setType(!type)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async (event: SyntheticEvent) => {
        event.preventDefault()
        try {
            await request('/api/auth/register', 'POST', { ...form }).then(res => console.log(res))
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div className="register__form page">
            <div>
                <h1>Wellcome To App</h1>
            </div>
            <div className="login__error" style={error ? { display: "block" } : { display: "none" }}>
                Error! Please, try again
            </div>
            <form className="login__form" onSubmit={registerHandler}>
                <label htmlFor="email">NickName:</label>
                <input className="login__input"
                    onChange={changeHandler}
                    name="nickName" />
                <label htmlFor="email">Email:</label>
                <input className="login__input"
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
                <input className="login__input"
                    onChange={changeHandler}
                    type="number"
                    name="phone" />

                <div className="login__btns">
                    <button
                        className="login__button"
                        disabled={loading}
                        onClick={registerHandler}
                    >
                        Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Registration;