
const initialState = {
    isLogged: false,
    name: '',
    surname: '',
    email: '',
    password: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_DATA':
            return { ...state, name: action.payload.name, surname: action.payload.surname, email: action.payload.email, password: action.payload.password }
        case 'SET_IS_LOGGED':
            return { ...state, isLogged: true}
        default:
            return state
    }
}

export default reducer
