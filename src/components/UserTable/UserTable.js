import { numToTime, getTotalTime, Data } from '../../redux/selectors';
import style from '../../pages/UserProfile/UserProfile.module.scss';

export const TableBody = () => {

    const days = Data().map(el => {
        let shiftTimeStart, shiftTimeEnd, breakTimeStart, breakTimeEnd, hoursTime, overtimeTime = {};
        let shiftStart, shiftEnd, breakStart, breakEnd, hours, overtime = '';

        if(!el.dayOff) {
            shiftTimeStart = numToTime(el.shift.start.hour, el.shift.start.minute);
            shiftStart = `${shiftTimeStart.hours}:${shiftTimeStart.minutes}`;
    
            shiftTimeEnd = numToTime(el.shift.end.hour, el.shift.end.minute);
            shiftEnd = `${shiftTimeEnd.hours}:${shiftTimeEnd.minutes}`;
    
            breakTimeStart = numToTime(el.breaks[0].start.hour, el.breaks[0].start.minute);
            breakStart = `${breakTimeStart.hours}:${breakTimeStart.minutes}`;
    
            breakTimeEnd = numToTime(el.breaks[0].end.hour, el.breaks[0].end.minute);
            breakEnd = `${breakTimeEnd.hours}:${breakTimeEnd.minutes}`;
    
            hoursTime = numToTime(el.hours.hour, el.hours.minute);
            hours = `${hoursTime.hours}:${hoursTime.minutes}`;
    
            overtimeTime = numToTime(el.overtime.hour, el.overtime.minute);
            overtime = `${overtimeTime.hours}:${overtimeTime.minutes}`;
        }

        return (
            el.dayOff ? (
                <tr key={el.date.dayNumber}>
                    <td className={style.odd}>{el.date.dayNumber}</td>
                    <td>Day off</td>
                    <td className={style.odd}>Day off</td>
                    <td>Day off</td>
                    <td className={style.odd}>Day off</td>
                    <td>Day off</td>
                    <td className={style.odd}>Day off</td>
                </tr>
            )
            :
            (
                <tr key={el.date.dayNumber}>
                    <td className={style.odd}>{el.date.dayNumber}</td>
                    <td>{shiftStart}</td>
                    <td className={style.odd}>{shiftEnd}</td>
                    <td>{breakStart}</td>
                    <td className={style.odd}>{breakEnd}</td>
                    <td>{hours}</td>
                    <td className={style.odd}>{overtime}</td>
                </tr>
            )
        )
    });

    return (
        <>
            {days}
        </>
    );
}

export const TableFoot = () => {

    const {totalTime, totalOvertime} = getTotalTime();

    return (
        <tr>
            <th className={style.title}>Total</th>
            <td className={style.subTitle} colSpan={4}></td>
            <td className={style.subTitle}>{totalTime.hours}:{totalTime.minutes}</td>
            <td className={style.subTitle}>{totalOvertime.hours}:{totalOvertime.minutes}</td>
        </tr>
    );
}
 
export default TableFoot;