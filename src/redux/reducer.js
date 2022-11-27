import { initialState } from './initialState';

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
        case 'ON_LOADED': 
            return {
                ...state,
                isLoaded: true
            }
        case 'CALC_TOTAL_HOURS': 
            return {
                ...state,
                totalHours: action.payload
            }
        case 'CALC_TOTAL_OVERTIME': 
            return {
                ...state,
                totalOvertime: action.payload
            }
        case 'CHANGE_USER_DATA': 
            return {
                ...state,
                userData: action.payload
            }
        case 'CHANGE_FIRST_NAME': 
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    firstName: action.payload
                }
            }
        case 'CHANGE_LAST_NAME': 
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    lastName: action.payload
                }
            }
        case 'CHANGE_EMAIL': 
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    email: action.payload
                }
            }
        case 'CHANGE_ROLE': 
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    role: action.payload
                }
            }
        default:
            return state
    }
}