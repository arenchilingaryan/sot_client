import { IProfileData } from '../../interfaces/interfaces'
export { };

const initialState: IProfileData = {
    _id: '',
    img: '',
    userName: '',
    birthday: '',
    languages: '',
    email: '',
    phoneNumber: '',
    locationProfile: '',
    about: '',
    edit: false,
    age: '',
    history: []
}

export const setProfileEdit = () => ({ type: 'TOGGLE_PROFILE_EDIT' })
export const setProfileData = (data: IProfileData) => ({ type: 'SET_PROFILE_DATA', data })
export const updateProfileData = (form: IProfileData) => ({ type: 'UPDATE_PROFILE_DATA', form })
export const updateProfileImg = (img: string) => ({ type: 'UPDATE_PROFILE_IMG', img })


export default function profileReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'TOGGLE_PROFILE_EDIT':
            return { ...state, edit: !state.edit }
        case 'SET_PROFILE_DATA': {
            const { user, history } = action.data
            const { _id, birthday, languages, email, phoneNumber, locationProfile, about, age, userName, img } = user
            return {
                ...state,
                _id,
                img,
                userName,
                birthday,
                languages,
                email,
                phoneNumber,
                locationProfile,
                about,
                edit: false,
                history,
                age
            }
        }
        case 'UPDATE_PROFILE_DATA': {
            const { birthday, languages, phone, locationProfile, about, age, userName } = action.form
            return {
                ...state,
                userName,
                birthday,
                languages,
                phoneNumber: phone,
                locationProfile,
                about,
                edit: false,
                age
            }
        }
        case 'UPDATE_PROFILE_IMG': {
            return { ...state, img: action.img }
        }

        default: return state
    }
}