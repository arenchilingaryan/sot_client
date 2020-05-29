import React, { useEffect, useContext, Fragment } from 'react'
import { connect } from 'react-redux';
import { setProfileData } from '../../redux/reducers/profile.reducer'
import { setProfileEdit } from '../../redux/reducers/profile.reducer'
import { IProfileData } from '../../interfaces/interfaces'
import { useHttp } from '../../hooks/http.hook'
import ProfilePage from './profile'
import { AuthContext } from '../../context/auth.context'
import { Spinner } from '../spinner/spinner'

const ProfileContainer = (props: any) => {
    const { request, loading } = useHttp()
    const auth = useContext(AuthContext)

    useEffect((): any => {
        
        request(
            '/api/profile/getinfo',
            'POST',
            {
                email: auth.email,
                userId: auth.userId
            },
            {
                Authorization: `Bearer ${auth.token}`
            }
        )
        .then(data => props.setData(data))
    }, [])

    return (
        <Fragment>
            {
                loading
                    ? <Spinner />
                    : <ProfilePage />
            }
        </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)