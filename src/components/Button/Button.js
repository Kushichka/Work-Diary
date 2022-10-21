import { useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from '../../redux/actions';

const Button = ({ name, event }) => {

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(onLogin());
    }

    const [isHover, setIsHover] = useState(false);

    const style = {
        backgroundColor: 'transparent',
        border: 'none',
        color: isHover ? '#bfd4df' : '#fff',
        fontSize: 'inherit',
        cursor: 'pointer',
        transition: '.1s'
    }

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    return (
        <>
            <button
                style={style}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={(event) => handleSubmit(event)}
            >
                {name}
            </button>
        </>
    );
}

export default Button;