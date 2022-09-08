import React from 'react';
import Friend from './Friend/Friend';
import s from './Message.module.scss'

function Message({data}) {
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {data.friend.map((item, id)=> <Friend key={id} name={item}/>)}
            </div>
            <div className={s.messages}>
                <div className={s.messagesin}>Hello, how are you?</div> <br/>
                <div className={s.messagesout}>Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?</div>
            </div>
        </div>
    );
}

export default Message;