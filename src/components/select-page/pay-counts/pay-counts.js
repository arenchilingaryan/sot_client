import React, { useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import { useHttp } from '../../../hooks/http.hook'
import { Spinner } from '../../spinner/spinner'
import './pay-counts.scss'

export const PayPage = () => {

    const { loading, error, request } = useHttp()

    const auth = useContext(AuthContext)

    const payHandler = async (e) => {
        e.preventDefault()
        try {
            const newCount = auth.userCount + Number(e.target.pay.value)
            await request('/api/pay', 'POST', { count: newCount, email: auth.email }, { Authorization: `Bearer ${auth.token}` })
                .then(auth.login(auth.token, auth.userId, newCount, auth.email))
        } catch (e) {

        }

    }

    return (
        <div className="page">
            {
                loading
                    ? <Spinner />
                    : <form className="payPage__form" onSubmit={payHandler}>
                    {
                        error
                        ? <h1 style={{ color: 'red' }} > Error </h1>
                        : null
                    }
                        <h3 className="payPage__title" >Enter the цифра, ёбана в рот</h3>
                        <input name="pay" className="payPage__input" type="number" />
                        <button className="payPage__button">Add counts</button>
                    </form>
            }
        </div>
    )
}