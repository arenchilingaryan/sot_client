import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { IProfileData } from '../../../interfaces/interfaces'
import ProfileHistoryTableItem from './profile.history.table'
import './profile.info.scss'

type ProfileInfoProps = {
    profile: IProfileData
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    const { about, history } = props.profile

    type historyElement = {
        amount: number
        link: string
        genre: string
        trafic: string
        price: number
        code: string
    }

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
                    !history
                        ? <div>You don't have promoted history</div>
                        : <Fragment>
                            <h3>Total: {history.length} </h3>
                            <div className="profile__history-table">
                                <div className="history-table-block table-title-block">
                                    <span> # </span>
                                    <span itemProp="identifier"> Link </span>
                                    <span> View </span>
                                    <span> Genre </span>
                                    <span> Amount </span>
                                    <span itemProp="price"> Total price </span>
                                </div>
                                {
                                    history.map((el: historyElement) => {
                                        return (
                                            <Fragment key={el.code}>
                                                <ProfileHistoryTableItem idx={1} {...el} />
                                            </Fragment>
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
