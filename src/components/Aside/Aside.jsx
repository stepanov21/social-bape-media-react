import React from 'react';
import { NavLink } from 'react-router-dom';


function Aside(props) {
  return (
    <aside className="aside">
      <ul className="aside__list">
        <li className='aside__item-list'>
          <NavLink to='/profile'>Profile</NavLink>
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
    </aside>
  );
}

export default Aside;