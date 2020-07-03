import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './profile.header.scss'
import { connect } from 'react-redux'

const ProfileHeader = (props: any) => {
    const { userName } = props.profile
    return (
        <div className="profile__header">
            <div itemProp="additionalName" className="profile__header-nickname">
                {userName}
            </div>
            <div className="profile__header-edit">
                <FontAwesomeIcon icon={faEdit} onClick={props.setEdit} />
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        profile: state.profilePage
    }
}

export default connect(mapStateToProps)(ProfileHeader)
