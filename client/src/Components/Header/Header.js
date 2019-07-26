import React from 'react';
import Image from 'react-bootstrap/Image';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <header>
        <a href="/home">
          <Image id="sproutImg" src="./assets/img/SproutHeader.gif" fluid />
        </a>
      </header>
    </div>
  );
}

export default Header;