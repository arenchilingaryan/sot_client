import React, { useState, useContext } from 'react'
import { connect } from 'react-redux'
import { IProfileData } from '../../../interfaces/interfaces'
import { setProfileEdit, setProfileData, updateProfileData } from '../../../redux/reducers/profile.reducer'
import './profile.edit.scss'
import { useHttp } from '../../../hooks/http.hook'
import { AuthContext } from '../../../context/auth.context'
import { Spinner } from '../../spinner/spinner'

const ProfileEdit: React.FC = (props: any) => {
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()

    const { _id, about, userName, birthday, languages, email, phoneNumber, locationProfile, age, img } = props.profile 
    const [form, setForm] = useState({
        img,
        userName,
        birthday,
        languages,
        email,
        phoneNumber,
        locationProfile,
        age,
        about,
        _id
    })

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [event.target.name]: (event.target as HTMLInputElement).value })
    }

    const editHandler = async (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = await request('/api/profile/updateinfo', 'POST', { ...form }, {
            Authorization: `Bearer ${auth.token}`
        })

        if (data) {
            // WTF
            const req = { user: form, history: props.profile.history }
            props.setData(req)
            auth.login(auth.token, auth.userId, auth.userCount, auth.email, form.userName)
        }
    }

    return (
        <form onSubmit={editHandler} className="profile__editPage">
            <h1>Fill out the required</h1>
            <div className="profile__editForm">
                <div className="profile__edit-inputBlock">
                    <label htmlFor="userName">Username&nbsp;:&nbsp;</label>
                    <input onChange={changeHandler} name="userName" type="text" value={form.userName} className="profile__edit-input" />
                </div>
                <div className="profile__edit-inputBlock">
                    <label htmlFor="birthday">Birthday&nbsp;:&nbsp;</label>
                    <input onChange={changeHandler} name="birthday" type="text" value={form.birthday} className="profile__edit-input" />
                </div>
                <div className="profile__edit-inputBlock">
                    <label htmlFor="phoneNumber">Phone Number&nbsp;:&nbsp;</label>
                    <input onChange={changeHandler} name="phoneNumber" type="text" value={form.phoneNumber} className="profile__edit-input" />
                </div>
                <div className="profile__edit-inputBlock">
                    <label htmlFor="languages">Languages&nbsp;:&nbsp;</label>
                    <input onChange={changeHandler} name="languages" type="text" value={form.languages} className="profile__edit-input" />
                </div>
                <div className="profile__edit-inputBlock">
                    <label htmlFor="age">Age&nbsp;:&nbsp;</label>
                    <input onChange={changeHandler} name="age" type="text" value={form.age} className="profile__edit-input" />
                </div>
                <div className="profile__edit-inputBlock">
                    <label htmlFor="about">About me&nbsp;:&nbsp;</label>
                    <textarea onChange={changeHandler} className="profile__edit-textarea profile__edit-input" value={form.about} name="about" />
                </div>
            </div>
            {
                loading 
                ? <Spinner />
                : <button className="profile__edit-button" >Save</button>
            }
        </form>
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
        setEdit: () => dispatch(setProfileEdit()),
        updateData: (form: any) => dispatch(updateProfileData(form))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)