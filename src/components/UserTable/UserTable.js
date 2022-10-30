import { numToTime, getTotalTime, Data } from '../../redux/selectors';
import style from '../../pages/UserProfile/UserProfile.module.scss';

export const TableBody = () => {

    const days = Data().map(el => {

        const shiftTimeStart = numToTime(el.shift.start.hour, el.shift.start.minute);
        const shiftStart = `${shiftTimeStart.hours}:${shiftTimeStart.minutes}`;

        const shiftTimeEnd = numToTime(el.shift.end.hour, el.shift.end.minute);
        const shiftEnd = `${shiftTimeEnd.hours}:${shiftTimeEnd.minutes}`;

        const breakTimeStart = numToTime(el.breaks[0].start.hour, el.breaks[0].start.minute);
        const breakStart = `${breakTimeStart.hours}:${breakTimeStart.minutes}`;

        const breakTimeEnd = numToTime(el.breaks[0].end.hour, el.breaks[0].end.minute);
        const breakEnd = `${breakTimeEnd.hours}:${breakTimeEnd.minutes}`;

        const hoursTime = numToTime(el.hours.hour, el.hours.minute);
        const hours = `${hoursTime.hours}:${hoursTime.minutes}`;

        const overtimeTime = numToTime(el.overtime.hour, el.overtime.minute);
        const overtime = `${overtimeTime.hours}:${overtimeTime.minutes}`;
        
        return (
            el.dayOff ? (
                <tr key={el.day}>
                    <td className={style.odd}>{el.day}</td>
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
                <tr key={el.day}>
                    <td className={style.odd}>{el.day}</td>
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