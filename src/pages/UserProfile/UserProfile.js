import { TableBody, TableFoot } from "../../components/UserTable/UserTable";
import style from './UserProfile.module.scss';

const UserProfile = () => {
    return (
        <>
            <div className={style.tableWrapper}>
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th className={style.monthTitle} colSpan={9}>September 2022</th>
                        </tr>
                        <tr>
                            <th className={style.title} rowSpan={2}>Date</th>
                            <th className={style.title} colSpan={2}>Working shift</th>
                            <th className={style.title} colSpan={2}>Breaks</th>
                            <th className={style.title} rowSpan={2}>Hours</th>
                            <th className={style.title} rowSpan={2}>Overtime</th>
                        </tr>
                        <tr>
                            <td className={style.subTitle}>Start</td>
                            <td className={style.subTitle}>End</td>
                            <td className={style.subTitle}>Start</td>
                            <td className={style.subTitle}>End</td>
                        </tr>
                    </thead>
                    <tbody>
                        <TableBody />
                    </tbody>
                    <tfoot>
                        <TableFoot />
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default UserProfile;