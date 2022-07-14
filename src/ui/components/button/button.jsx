import { PropTypes } from 'prop-types';
import { React } from 'react'; 
export const Button = ({label, handleClick, size}) => {
    let scale = 18;
    if (size === 'lg') scale = 30.875;
    if (size === 'md') scale = 18;
    let styles = {
        padding: '0.938rem 1.5rem',
        width: `${scale}rem`,
        height: '3rem',
        backgroundColor: '#3751FF',
        border: 'none',
        color: '#fff',
        fontFamily: 'Arial',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '20px',
        borderRadius: '8px',
        boxShadow: '0rem 0.25rem 0.75rem rgba(55, 81, 255, 0.24)'
    }
    return (
        <button onClick={handleClick} style={styles}>
            {label}
        </button>
    )
}

Button.prototype = {
    label: PropTypes.string,
    style: PropTypes.string,
    handleClick: PropTypes.func,
}