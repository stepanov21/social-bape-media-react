import React from 'react';
import s from './Message.module.scss'

function Message(props) {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                <div className={s.item}>Igor Stepanov</div>
            </div>
            <div className={s.messages}>
                <div className={s.item}>Hello, how are you?</div>
            </div>
        </div>
    );
}

export default Message;