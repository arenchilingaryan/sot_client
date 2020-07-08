import React from 'react'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IProfileData } from '../../../interfaces/interfaces'
import './profile.header.scss'

type ProfileHeaderProps = {
    profile: IProfileData
    setEdit: () => void
}

const ProfileHeader:React.FC<ProfileHeaderProps> = (props) => {
    const { profile, setEdit } = props
    const { userName } = profile
    return (
        <div className="profile__header">
            <div itemProp="additionalName" className="profile__header-nickname">
                {userName}
            </div>
            <div className="profile__header-edit">
                <FontAwesomeIcon icon={faEdit} onClick={setEdit} />
            </div>
        </div>
    )
}

export default ProfileHeader
