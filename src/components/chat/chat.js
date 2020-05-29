import React, { useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import './chat.scss'



export const Chat = () => {
    const [messageData, setMessageData] = useState([])
    const [message, setMessage] = useState('')
    const { request, loading } = useHttp()

    const messageSubmit = (e) => {
        e.preventDefault()
        request('/api/chat', 'POST', { message })
        .then(res => {
            const myMessageObj = {
                message,
                key: Math.random(),
                me: true
            }
            const answerMessageObj = {
                message: res.answer,
                key: Math.random(),
                me: false
            }
            const messagesCollection = [...messageData, myMessageObj, answerMessageObj ]
            setMessageData(messagesCollection)
            setMessage('')
        })
    }

    const changeHandler = (e) => {
        setMessage(e.target.value)
    }

    return (
        <div className="chat__wrapper">
            <ul className="chat__messageWrapper">
                {
                    messageData.map(el => {
                        return (
                            <li key={el.key} className="chat__item" >
                                {el.me ? <span className="chat__me">ME:</span> : <span>Site:</span>}
                                <span>{el.message}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <form onSubmit={messageSubmit} >
                <input onChange={changeHandler} className="chat__input" type="text" value={message} />
                <button disabled={loading} className="chat__button">Send</button>
            </form>
        </div>
    )
}
