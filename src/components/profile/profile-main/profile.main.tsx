import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faLocationArrow, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import defaultUser from '../../../img/User.jpg'
import { connect } from 'react-redux'
import { useHttp } from '../../../hooks/http.hook'
import { AuthContext } from '../../../context/auth.context'
import { updateProfileImg } from '../../../redux/reducers/profile.reducer'
import { Spinner } from '../../spinner/spinner'
import './profile.main.scss'


const ProfileMainInfo = (props: any) => {
    const { request, loading } = useHttp()
    const auth = useContext(AuthContext)

    const handleFileSelect = (evt: any) => {
        const f = evt.target.files[0]
        const reader = new FileReader()
        reader.onload = (function (theFile) {
            return async function (e: any) {
                var binaryData = e.target.result
                const base64String = window.btoa(binaryData)
                try {
                    const imgReq = await request(
                        '/api/profile/updateimg',
                        'POST',
                        { email: auth.email, img: base64String },
                        {
                            Authorization: `Bearer ${auth.token}`
                        }
                    )
                    if (!imgReq) {
                        return console.log('poka')
                    } else {
                        props.updateImg(base64String)
                    }

                } catch (e) {
                    throw e
                }
            }
        })(f)
        if (!f) {
            return null
        }
        reader.readAsBinaryString(f)
    }

    const { birthday, languages, email, phoneNumber, locationProfile, age, img } = props.profile
    return (
        <div className="profile__main-info">
            <div className="profile__personal profile__block">

                {
                    loading
                        ? <Spinner />
                        : <div className="profile__image">
                            <img className="profile__userImg"
                                itemProp="image"
                                src={img === '' ? defaultUser : `data:image/png;base64,${img}`}
                                alt={defaultUser}
                            />
                            <div className="profile__image-upload">
                                <label htmlFor="file-input">
                                    <FontAwesomeIcon className="profile__uploadIcon" icon={faFileUpload} />
                                </label>
                                <input onChange={handleFileSelect} className="file-input" id="file-input" type="file" />
                            </div>
                        </div>
                }
                <h3 className="profile__title">Personal</h3>
                <div className="profile__personal-content">
                    <div className="profile__personal-title">
                        <span itemProp="birthDate">Birthday</span>
                        <span>Age</span>
                        <span>Languages</span>
                    </div>
                    <div className="profile__personal-desc">
                        <span itemProp="birthDate">&nbsp;:&nbsp; {birthday} </span>
                        <span>&nbsp;:&nbsp; {age} </span>
                        <span>&nbsp;:&nbsp; {languages}</span>
                    </div>
                </div>
            </div>
            <div className="profile__contact profile__block">
                <h3 itemProp="contactPoint" className="profile__title">Contact</h3>
                <div className="profile__contact-content">
                    <div className="profile__contact-icons">
                        <span itemProp="email"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <span itemProp="telephone"><FontAwesomeIcon icon={faPhoneAlt} /></span>
                        <span itemProp="address"><FontAwesomeIcon icon={faLocationArrow} /></span>
                    </div>
                    <div className="profile__contact-desc">
                        <span itemProp="email">&nbsp;:&nbsp; {email} </span>
                        <span itemProp="telephone">&nbsp;:&nbsp; {phoneNumber} </span>
                        <span itemProp="address">&nbsp;:&nbsp; {locationProfile} </span>
                    </div>
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
        updateImg: (img: any) => dispatch(updateProfileImg(img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainInfo)
