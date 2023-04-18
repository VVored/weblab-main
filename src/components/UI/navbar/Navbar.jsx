import React from 'react';
import { useState } from 'react';
import cls from './Navbar.module.css';
import WelcomePage from '../../../pages/WelcomePage';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const aboutPage = () => {
    setMenu(!menu);
  }
  return (
    <header className={cls.header}>
      <Link to="/main"><h2><span>Web</span>lab</h2></Link>
      {/* <Link onClick={aboutPage} to="/about" className={cls.close}></Link> */}
      <Link onClick={aboutPage} to="/menu" className={cls.burger}>
        <hr width='32' />
        <hr width='24' />
        <hr width='32' />
      </Link>

    </header>
  )
}

export default Navbar;
