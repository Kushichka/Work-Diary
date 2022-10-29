import { useSelector } from 'react-redux';

export const numToTime = (num) => {
    return num < 10 ? `0${num}` : num;
}

export const Data = () => {
    return useSelector(state => state.userData);
}

export const getTotalTime = () => {
    
    let totalHours = 0;
    let totalMinutes = 0;

    let totalOverHours = 0;
    let totalOverMinutes = 0;

    Data().forEach(el => {
        totalHours = totalHours + el.hours.hour;
        totalMinutes = totalMinutes + el.hours.minute;

        totalOverHours = totalOverHours + el.overtime.hour;
        totalOverMinutes = totalOverMinutes + el.overtime.minute;
    });

    totalHours = numToTime(totalHours);
    totalMinutes = numToTime(totalMinutes);
    totalOverHours = numToTime(totalOverHours);
    totalOverMinutes = numToTime(totalOverMinutes);

    return { totalHours, totalMinutes, totalOverHours, totalOverMinutes };
}