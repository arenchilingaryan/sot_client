import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import './profile.info.scss'

const ProfileInfo = (props: any) => {
    const { about, history } = props.profile

    return (
        <div className="profile__info">
            <div className="profile__about profile__block">
                <h3 className="profile__title">about me</h3>
                <div>
                    {about}
                </div>
            </div>
            <div className="profile__history profile__block" >
                <h3 className="profile__title">History</h3>

                {
                    history.length === false
                        ? <div>You don't have promoted history</div>
                        : <Fragment>
                            <h3>Total: {history.length} </h3>
                            <div className="profile__history-table">
                                <div className="history-table-block table-title-block">
                                    <span> # </span>
                                    <span> Link </span>
                                    <span> View </span>
                                    <span> Genre </span>
                                    <span> Amount </span>
                                    <span> Total price </span>
                                </div>
                                {
                                    history.map((el: any) => {
                                        const totalprice = el.amount * el.price
                                        return (
                                            <div className="history-table-block" key={el.code}>
                                                <span> {history.indexOf(el) + 1} </span>
                                                <span> <a target="_blank" rel="noopener noreferrer" href={el.link}>{el.link.substr(21)}</a> </span>
                                                <span> {el.trafic} </span>
                                                <span> {el.genre} </span>
                                                <span> {el.amount} </span>
                                                <span> {totalprice}$ </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </Fragment>
                }


            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        profile: state.profilePage
    }
}

export default connect(mapStateToProps)(ProfileInfo)
