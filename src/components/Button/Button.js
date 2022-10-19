import { useState } from "react";

const Button = ({ name }) => {

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
            >
                {name}
            </button>
        </>
    );
}

export default Button;