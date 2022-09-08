import React from 'react';
import s from '../Message.module.scss';


function Friend({name}) {
    return (
        <div className={s.item}>
            {name}
        </div>
    );
}

export default Friend;