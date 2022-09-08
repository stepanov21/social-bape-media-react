import React from 'react';
import {BiRightArrowAlt} from 'react-icons/bi';

function AddPost(props) {
    return (
        <div className="posts__send send">
          <p className="send__title">My posts</p>
          <textarea className="send__field"></textarea>
          <button className="send__button">Send <BiRightArrowAlt className="send__arrow"/><div></div></button>
        </div>
    );
}

export default AddPost;