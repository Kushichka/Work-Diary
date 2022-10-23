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
        default:
            return state
    }
}