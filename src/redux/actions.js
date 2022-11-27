
export const onLogin = () => ({type: 'ON_LOGIN'});
export const onLogOut = () => ({type: 'ON_LOGOUT'});
export const onLoaded = () => ({type: 'ON_LOADED'});
export const calcTotalHours = (value) => ({type: 'CALC_TOTAL_HOURS', payload: value});
export const calcTotalOvertime = (value) => ({type: 'CALC_TOTAL_OVERTIME', payload: value});
export const changeUserData = (value) => ({type: 'CHANGE_USER_DATA', payload: value});
export const changeFirstName = (value) => ({type: 'CHANGE_FIRST_NAME', payload: value});
export const changeLastName = (value) => ({type: 'CHANGE_LAST_NAME', payload: value});
export const changeEmail = (value) => ({type: 'CHANGE_EMAIL', payload: value});
export const changeRole = (value) => ({type: 'CHANGE_ROLE', payload: value});
