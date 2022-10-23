import NavBar from "../../components/NavBar/NavBar";
import s from './UserProfile.module.scss';

const UserProfile = () => {

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
                        <tr>
                            <td className={s.colOne}>01</td>
                            <td>07:00</td>
                            <td className={s.colThree}>15:00</td>
                            <td>10:30</td>
                            <td className={s.colFive}>11:00</td>
                            <td>8:00</td>
                            <td className={s.colSeven}>0</td>
                            <td rowSpan={5}>262:30</td>
                            <td className={s.colNine} rowSpan={5}>5:30</td>
                        </tr>
                        <tr>
                            <td className={s.colOne}>02</td>
                            <td>Day off</td>
                            <td className={s.colThree}>Day off</td>
                            <td>Day off</td>
                            <td className={s.colFive}>Day off</td>
                            <td>Day off</td>
                            <td className={s.colSeven}>Day off</td>
                        </tr>
                        <tr>
                            <td className={s.colOne}>03</td>
                            <td>07:00</td>
                            <td className={s.colThree}>15:00</td>
                            <td>10:30</td>
                            <td className={s.colFive}>11:00</td>
                            <td>7:00</td>
                            <td className={s.colSeven}>1:00</td>
                        </tr>
                        <tr>
                            <td className={s.colOne}>04</td>
                            <td>07:00</td>
                            <td className={s.colThree}>15:00</td>
                            <td>10:30</td>
                            <td className={s.colFive}>11:00</td>
                            <td>8:00</td>
                            <td className={s.colSeven}>0:30</td>
                        </tr>
                        <tr>
                            <td className={s.colOne}>05</td>
                            <td>07:00</td>
                            <td className={s.colThree}>15:00</td>
                            <td>10:30</td>
                            <td className={s.colFive}>11:00</td>
                            <td>7:30</td>
                            <td className={s.colSeven}>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserProfile;