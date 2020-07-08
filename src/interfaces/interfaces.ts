export interface ISelect {
    id: number
    title: string
}

export interface IBodyWork {
    link: any
    trafic: number
    timeSet: number
    email: string
    price: number
    genre: string
    cash: string
}

export interface IAuthContext {
    token: string
    userId: string
    userCount: number
    email: string
    userName: string
    login: any
    logout: any
    isAuthenticated: boolean
}

export interface ILoginForm {
    email: string
    password: string
}

export interface IRegisterForm {
    nickName: string
    email: string
    password: string
    phone: string
    location: string
}


export interface IProfileData {
    _id: string
    img: string
    userName: string
    birthday: string
    languages: string
    email: string
    phoneNumber: string
    locationProfile: string
    about: string
    age: string
    edit: boolean
    history: []
}

export interface IProfileForm {
    _id: string
    img: string
    userName: string
    birthday: string
    languages: string
    email: string
    phoneNumber: string
    locationProfile: string
    about: string
    age: string
}

export interface IMapState {
    profilePage?: IProfileData
}