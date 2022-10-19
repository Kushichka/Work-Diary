
const initialState = {
    isLogged: false
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ON_LOGIN': 
            return {
                ...state,
                isLogged: true
            }
        case 'ON_LOGOUT': 
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}