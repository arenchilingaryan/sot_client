import React, { useContext } from 'react'
import { connect } from 'react-redux'
import { useHttp } from '../../../hooks/http.hook'
import { AuthContext } from '../../../context/auth.context'
import { updateProfileImg } from '../../../redux/reducers/profile.reducer'
import { IMapState } from '../../../interfaces/interfaces'
import ProfileMainInfo from './profile.main.js'
import './profile.main.scss'


const ProfileMainInfoContainer = (props: any) => {
  const { request, loading } = useHttp()
  const auth = useContext(AuthContext)

  const handleFileSelect: any = (evt: any) => {
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

  return <ProfileMainInfo handleFileSelect={handleFileSelect} profile={props.profile} loading={loading} />
}

function mapStateToProps(state: IMapState) {
  return {
    profile: state.profilePage
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    updateImg: (img: any) => dispatch(updateProfileImg(img))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMainInfoContainer)
