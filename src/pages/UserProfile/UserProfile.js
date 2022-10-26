import NavBar from "../../components/NavBar/NavBar";
import UserTable from "../../components/UserTable/UserTable";
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
                        <UserTable />
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserProfile;