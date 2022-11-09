
export const onLogin = () => ({type: 'ON_LOGIN'});
export const onLogOut = () => ({type: 'ON_LOGOUT'});
export const onLoaded = () => ({type: 'ON_LOADED'});
export const calcTotalHours = (value) => ({type: 'CALC_TOTAL_HOURS', payload: value});
export const calcTotalOvertime = (value) => ({type: 'CALC_TOTAL_OVERTIME', payload: value});
