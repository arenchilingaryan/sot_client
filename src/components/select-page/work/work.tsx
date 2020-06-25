import React, { useContext, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { Spinner } from '../../spinner/spinner'
import { SelectMenu } from '../../../UI/select/select'
import { setSelect } from '../../../UI/select/setSelect'
import { IBodyWork } from '../../../interfaces/interfaces'
import { AuthContext } from '../../../context/auth.context'
import './work.scss'


export const Work: React.FC = () => {
    const [error, setError] = useState<string>('')
    const [done, setDone] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [genre, setGenre] = useState<string>('')

    const auth = useContext(AuthContext)

    const select = setSelect('Comedy', 'Dance', 'Fashion', 'Food', 'Lifestyle', 'Music', 'Sports', 'Twerk Team', 'Fitness')

    const views = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        const endCount: number = auth.userCount - e.target.attributes.price.value
        try {
            const body: IBodyWork = {
                link: e.target.link.value,
                trafic: e.target.attributes.type.value,
                timeSet: e.target.attributes.time.value,
                email: auth.email,
                price: endCount,
                cash: e.target.attributes.price.value,
                genre
            }
            axios.post(`/api/view`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                }).then(res => {
                    if (res.status === 200) {
                        setLoading(false)
                        auth.login(auth.token, auth.userId, endCount, auth.email)
                        setDone(`Your views will be done in 24 hrs`)
                        setError('')
                    } else {
                        setLoading(false)
                        setError('Page Is Wrong. Try again')
                        setDone('')
                    }
                })
        } catch (e) {

        }
    }

    return (
        <div className="page">
            <h1 className="work__status" style={{ color: 'red' }} > {error} </h1>
            <h1 className="work__status" style={{ color: 'green' }} > {done} </h1>
            {
                loading
                    ? <Spinner />
                    : <div className="work__wrapper">
                        {
                            auth.userCount >= 5
                                ?
                                //@ts-ignore
                                <form price="5" time="10000" type="1000" id="min-view" className="work__card" onSubmit={views}>
                                    <h3>1000 Views</h3>
                                    <input placeholder="Enter Your Link" name="link" className="login__input" type="text" />
                                    <SelectMenu select={select} setParam={setGenre} />
                                    <button className="work__button">Start</button>
                                </form>
                                : <div className="work__card">
                                    <h1 className="work__disableTitle">Buy coints for 1000 views!</h1>
                                    <NavLink to="/prices"><button className="workPage__buyCountsButton">Add Counts</button></NavLink>
                                </div>
                        }

                        {
                            auth.userCount >= 10
                                ?
                                //@ts-ignore
                                <form price="10" time="10000" type="3000" id="view" className="work__card" onSubmit={views}>
                                    <h3>3000 Views</h3>
                                    <input placeholder="Enter Your Link" name="link" className="login__input" type="text" />
                                    <SelectMenu select={select} setParam={setGenre} />
                                    <button className="work__button">Start</button>
                                </form>
                                : <div className="work__card">
                                    <h1 className="work__disableTitle">3000 Views 10$</h1>
                                    <NavLink to="/prices"><button className="workPage__buyCountsButton">Add Counts</button></NavLink>
                                </div>
                        }

                        {
                            auth.userCount >= 25
                                ?
                                //@ts-ignore
                                <form price="25" time="3000" type="10000" id="max-view" className="work__card" onSubmit={views}>
                                    <h3>10000 Views</h3>
                                    <input placeholder="Enter Your Link" name="link" className="login__input" type="text" />
                                    <SelectMenu select={select} setParam={setGenre} />
                                    <button className="work__button">Start</button>
                                </form>
                                : <div className="work__card">
                                    <h1 className="work__disableTitle">10000 Views 25$</h1>
                                    <NavLink to="/prices"><button className="workPage__buyCountsButton">Add Counts</button></NavLink>
                                </div>
                        }
                    </div>
            }

        </div>
    )
}