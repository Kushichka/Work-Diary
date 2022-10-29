import { numToTime, getTotalTime, Data } from '../../redux/selectors';
import style from '../../pages/UserProfile/UserProfile.module.scss';

const UserTable = () => {

    const { totalHours, totalMinutes, totalOverHours, totalOverMinutes } = getTotalTime();

    const days = Data().map(el => {

        const shiftStart = `${numToTime(el.shift.start.hour)}:${numToTime(el.shift.start.minute)}`;
        const shiftEnd = `${numToTime(el.shift.end.hour)}:${numToTime(el.shift.end.minute)}`;

        const breakStart = `${numToTime(el.breaks[0].start.hour)}:${numToTime(el.breaks[0].start.minute)}`;
        const breakEnd = `${numToTime(el.breaks[0].end.hour)}:${numToTime(el.breaks[0].end.minute)}`;

        const hours = `${numToTime(el.hours.hour)}:${numToTime(el.hours.minute)}`;
        const overtime = `${numToTime(el.overtime.hour)}:${numToTime(el.overtime.minute)}`;
        
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
                    {el.day === 1 &&
                        <>
                            <td rowSpan={5}>{totalHours}:{totalMinutes}</td>
                            <td className={`${style.odd} ${style.colNine}`} rowSpan={5}>{totalOverHours}:{totalOverMinutes}</td>
                        </>
                    }
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
                    {el.day === 1 &&
                        <>
                            <td rowSpan={5}>{totalHours}:{totalMinutes}</td>
                            <td className={`${style.odd} ${style.colNine}`} rowSpan={5}>{totalOverHours}:{totalOverMinutes}</td>
                        </>
                    }
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

export default UserTable;