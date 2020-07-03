import React, { useState, useEffect, useContext } from 'react'
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import { useHttp } from '../../../hooks/http.hook'
import { AuthContext } from '../../../context/auth.context'
import { Spinner } from '../../spinner/spinner'
import { ILoginForm } from '../../../interfaces/interfaces'
import './login.scss'

const Login: React.FC = () => {
    const { loading, request, clearError } = useHttp()
    const [type, setType] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [form, setForm] = useState<ILoginForm>({
        email: '',
        password: ''
    })

    const auth = useContext(AuthContext)


    useEffect(() => {
        return () => {
            clearError()
        }
    }, [clearError])


    const passwordViewHandler = () => setType(!type)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [event.target.name]: (event.target as HTMLInputElement).value })
    }

    const loginHandler = async (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        try {
            const data = await request('/api/auth/login', 'POST', { ...form })
            clearError()
            auth.login(data.token, data.userId, data.count, data.email, data.userName)
        } catch (e) {
            setError(true)
        }
    }

    return (
        <div className="page">
            {loading
                ? <Spinner />
                : <div itemScope itemType="http://schema.org/CommunicateAction" className="register__form">
                    <div>
                        <h1 itemProp="name">Login</h1>
                    </div>
                    <div itemProp="actionStatus" className="login__error" style={error ? { display: "block" } : { display: "none" }}>
                        Email or password is wrong
                    </div>
                    <form className="login__form" onSubmit={loginHandler}>
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

                        <div className="login__btns">

                            <button
                                itemProp="startTime"
                                className="login__button"
                                disabled={loading}
                            >
                                Sign In</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default Login;