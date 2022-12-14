import React from 'react';

function Post({props}) {
  return (
    <div className="posts__item">
      <div className="posts__avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="posts__info">
        <div className="posts__name">{props.name}</div>
        <div className="posts__text">{props.text}</div>
      </div>
    </div>
  );
}

export default Post;