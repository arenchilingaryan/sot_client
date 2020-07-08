import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { IProfileData } from '../../interfaces/interfaces'
import { setProfileEdit } from '../../redux/reducers/profile.reducer'
import ProfileEdit from './profile-edit/profile.edit'
import ProfileHeader from './profile-header/profile.header'
import ProfileInfo from './profile-info/profile.info'
import ProfileMainInfoContainer from './profile-main/profile.main.container';
import './profile.scss'

type ProfilePageProps = {
    profile: IProfileData
    setEdit: () => void
}

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
    const { setEdit, profile } = props
    return (
        <div className="page">
            <div itemScope itemProp="http://schema.org/Person" className="profile__inside__page">
                <div className="profile__page-content">
                    {
                        props.profile.edit
                            ? <ProfileEdit />
                            : <Fragment>
                                <ProfileHeader setEdit={setEdit} profile={profile} />
                                <div className="profile__content">
                                    <ProfileMainInfoContainer />
                                    <ProfileInfo />
                                </div>
                            </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state: any) {
    return {
        profile: state.profilePage
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        setEdit: () => dispatch(setProfileEdit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)