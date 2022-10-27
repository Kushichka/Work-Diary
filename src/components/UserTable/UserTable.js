import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calcTotalHours } from '../../redux/actions';
import s from '../../pages/UserProfile/UserProfile.module.scss';

const UserTable = () => {

    const data = useSelector(state => state.userData);
    const totalHours = useSelector(state => state.totalHours);
    const dispatch = useDispatch();
    const sub = useRef(true);

    useEffect(() => {
        let tempHours = 0;
    
        const calcTime = (a, b) => {
            return +new Date(`2022-02-22T${b}:00`).getHours() - +new Date(`2022-02-22T${a}:00`).getHours();
        }
    
        const calcHours = () => {
            data.reduce((prev, curr) => {
                return tempHours += calcTime(curr.shiftStart, curr.shiftEnd);
            }, tempHours);
        }

        if(sub.current) {
            sub.current = false;
            calcHours();
            dispatch(calcTotalHours(tempHours));
        }
    }, []);

    const days = data.map(el => {
        
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
                            <td rowSpan={5}>{totalHours}</td>
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
                            <td rowSpan={5}>{totalHours}</td>
                            <td className={s.colNine} rowSpan={5}>0</td>
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