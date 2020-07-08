import React, { useState, useContext } from 'react'
import { connect } from 'react-redux'
import { IProfileData, IProfileForm } from '../../../interfaces/interfaces'
import { setProfileEdit, setProfileData, updateProfileData } from '../../../redux/reducers/profile.reducer'
import { useHttp } from '../../../hooks/http.hook'
import { AuthContext } from '../../../context/auth.context'
import ProfileEditForm from './profile.edit.form'
import './profile.edit.scss'

const ProfileEdit: React.FC = (props: any) => {
    const auth = useContext(AuthContext)
    const { request, loading } = useHttp()

    const { _id, about, userName, birthday, languages, email, phoneNumber, locationProfile, age, img } = props.profile
    const [form, setForm] = useState<IProfileForm>({
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
        <ProfileEditForm
            loading={loading}
            form={form}
            changeHandler={changeHandler}
            editHandler={editHandler}
        />
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
        updateData: (form: IProfileData) => dispatch(updateProfileData(form))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit)