import React from 'react';
import {FiSettings} from "react-icons/fi";

function Header(props) {
    return (
        <header className="header">
        <div className="header__logo">
          <img src="https://miro.medium.com/fit/c/176/176/1*gr0GOdQpf1e7uIyEDceg3w.png" alt="" />
        </div>
        <div className="header__settings">
          <FiSettings/>
        </div>
      </header>
    );
}

export default Header;