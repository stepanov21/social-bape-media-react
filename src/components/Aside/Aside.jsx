import React from 'react';
import { NavLink } from 'react-router-dom';


function Aside(props) {
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li className='aside__item-list'>
          <NavLink to='/'>Profile</NavLink>
        </li>
        <li className='aside__item-list'>
          <NavLink to='/message' >Message</NavLink>
        </li>
        <li className='aside__item-list'>
          <NavLink to='/news' >News</NavLink>
        </li>
        <li className='aside__item-list'>
          <NavLink to='/music' >Music</NavLink>
        </li>
      </ul>
      <div className="best-friends">
        <div className="best-friend">
          <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg" alt="" />
        </div>
        <div className="best-friend">
          <img src="https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff1624f685407965b0180_Bored%20Ape%200-%20Image%201.png" alt="" />
        </div>
        <div className="best-friend">
          <img src="https://uploads-ssl.webflow.com/5ead65b4cd1146b85071bfdf/608ff2a12bc39c3ff457ae36_Bored%20Ape%208622-%20Image%202.png" alt="" />
        </div>
        <div className="best-friend">
          <img src="https://pbs.twimg.com/card_img/1564993354965843969/umANxwBx?format=png&name=small" alt="" />
        </div>
      </div>
    </aside>
  );
}

export default Aside;