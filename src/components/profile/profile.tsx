import React, { Fragment } from 'react'
import ProfileHeader from './profile-header/profile.header'
import ProfileMainInfo from './profile-main/profile.main'
import ProfileInfo from './profile-info/profile.info'
import { connect } from 'react-redux'
import { setProfileData } from '../../redux/reducers/profile.reducer'
import { setProfileEdit } from '../../redux/reducers/profile.reducer'
import { IProfileData } from '../../interfaces/interfaces'
import ProfileEdit from './profile-edit/profile.edit'
import './profile.scss'

const ProfilePage: React.FC = (props: any) => {


    return (
        <div className="page">
            <div itemScope itemProp="http://schema.org/Person" className="profile__inside__page">
                <div className="profile__page-content">
                    {
                        props.profile.edit
                            ? <ProfileEdit />
                            : <Fragment>
                                <ProfileHeader setEdit={props.setEdit} />
                                <div className="profile__content">
                                    <ProfileMainInfo />
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
        setData: (data: IProfileData) => dispatch(setProfileData(data)),
        setEdit: () => dispatch(setProfileEdit())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)