import React from 'react';
import style from './button.module.css'

const MyButton = (props) => {
    return (
        <button {...props} className={style.myBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;