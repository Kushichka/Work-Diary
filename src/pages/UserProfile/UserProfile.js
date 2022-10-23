import NavBar from "../../components/NavBar/NavBar";
import s from './UserProfile.module.scss';
import { useSelector, useDispatch } from 'react-redux';
// import { calcTotalHours } from './../../redux/actions';

const UserProfile = () => {

    // const dispatch = useDispatch();
    const data = useSelector(state => state.userData);
    // let totalHours = useSelector(state => state.totalHours);
    // let totalOver = useSelector(state => state.totalOvertime);

    const days = data.map(el => {

        // dispatch(calcTotalHours, el.shiftEnd - el.shiftStart);

        return (
            el.dayOff ? (
                <tr key={el.day}>
                    <td className={s.colOne}>{el.day}</td>
                    <td>Day off</td>
                    <td className={s.colThree}>Day off</td>
                    <td>Day off</td>
                    <td className={s.colFive}>Day off</td>
                    <td>Day off</td>
                    <td className={s.colSeven}>Day off</td>
                    {el.day === 1 && 
                        <>
                            <td rowSpan={5}>0</td>
                            <td className={s.colNine} rowSpan={5}>0</td>
                        </>
                    }
                </tr>
            )
            :
            (
                <tr key={el.day}>
                    <td className={s.colOne}>{el.day}</td>
                    <td>{el.shiftStart}</td>
                    <td className={s.colThree}>{el.shiftEnd}</td>
                    <td>{el.breaks[1].start}</td>
                    <td className={s.colFive}>{el.breaks[1].end}</td>
                    <td>{el.hours}</td>
                    <td className={s.colSeven}>{el.overTime}</td>
                    {el.day === 1 && 
                        <>
                            <td rowSpan={5}>0</td>
                            <td className={s.colNine} rowSpan={5}>0</td>
                        </>
                    }
                </tr>
            )
        )
    });

    return (
        <>
            <NavBar />
            <div className={s.tableWrapper}>
                <table className={s.table}>
                    <thead>
                        <tr>
                            <th className={s.monthTitle} colSpan={9}>September 2022</th>
                        </tr>
                        <tr className={s.titles}>
                            <th rowSpan={2}>Date</th>
                            <th colSpan={2}>Working shift</th>
                            <th colSpan={2}>Breaks</th>
                            <th rowSpan={2}>Hours</th>
                            <th rowSpan={2}>Overtime</th>
                            <th colSpan={2}>Total</th>
                        </tr>
                        <tr className={s.titles}>
                            <td>Start</td>
                            <td>End</td>
                            <td>Start</td>
                            <td>End</td>
                            <td>Hours</td>
                            <td>Overtime</td>
                        </tr>
                    </thead>
                    <tbody>
                        {days}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserProfile;