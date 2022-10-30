import { useSelector } from 'react-redux';

export const numToTime = (h, m) => {

    const time = {hours: 0, minutes: 0}
    
    time.hours = h;

    if(m >= 60) {
        time.hours += Math.floor(m / 60); 
        time.minutes = m % 60;
    } else time.minutes = m;

    if(time.hours < 10) time.hours = `0${time.hours}`;
    if(time.minutes < 10) time.minutes = `0${time.minutes}`;

    return time;
}

export const Data = () => {
    return useSelector(state => state.userData);
}

export const getTotalTime = () => {
    
    const hoursTime = {hours: 0, minutes: 0};
    const overTime = {hours: 0, minutes: 0};

    Data().forEach(el => {
        hoursTime.hours += el.hours.hour;
        hoursTime.minutes += el.hours.minute;

        overTime.hours += el.overtime.hour;
        overTime.minutes += el.overtime.minute;
    });
    
    const totalTime = numToTime(hoursTime.hours, hoursTime.minutes);
    const totalOvertime = numToTime(overTime.hours, overTime.minutes);

    return { totalTime, totalOvertime };
}