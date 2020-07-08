import React from 'react'
import { Spinner } from '../../spinner/spinner'
import { IProfileForm } from '../../../interfaces/interfaces';

type ProfileEditFormProps = {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  editHandler: (event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void
  form: IProfileForm
  loading: boolean
}

const ProfileEditForm:React.FC<ProfileEditFormProps> = (props) => {
  const { editHandler, changeHandler, form, loading } = props
  const { userName, birthday, phoneNumber, languages, age, about } = form
  return (
    <form onSubmit={editHandler} className="profile__editPage">
      <h1>Fill out the required</h1>
      <div className="profile__editForm">
        <div className="profile__edit-inputBlock">
          <label htmlFor="userName">Username&nbsp;:&nbsp;</label>
          <input onChange={changeHandler} name="userName" type="text" value={userName} className="profile__edit-input" />
        </div>
        <div className="profile__edit-inputBlock">
          <label htmlFor="birthday">Birthday&nbsp;:&nbsp;</label>
          <input onChange={changeHandler} name="birthday" type="text" value={birthday} className="profile__edit-input" />
        </div>
        <div className="profile__edit-inputBlock">
          <label htmlFor="phoneNumber">Phone Number&nbsp;:&nbsp;</label>
          <input onChange={changeHandler} name="phoneNumber" type="text" value={phoneNumber} className="profile__edit-input" />
        </div>
        <div className="profile__edit-inputBlock">
          <label htmlFor="languages">Languages&nbsp;:&nbsp;</label>
          <input onChange={changeHandler} name="languages" type="text" value={languages} className="profile__edit-input" />
        </div>
        <div className="profile__edit-inputBlock">
          <label htmlFor="age">Age&nbsp;:&nbsp;</label>
          <input onChange={changeHandler} name="age" type="text" value={age} className="profile__edit-input" />
        </div>
        <div className="profile__edit-inputBlock">
          <label htmlFor="about">About me&nbsp;:&nbsp;</label>
          <textarea onChange={changeHandler} className="profile__edit-textarea profile__edit-input" value={about} name="about" />
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

export default ProfileEditForm