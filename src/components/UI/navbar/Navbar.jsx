import React from 'react';
import cls from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../../../context';
import { useEffect } from 'react';

function Navbar() {
  const { isOpenMenu, setIsOpenMenu} = useContext(MenuContext);
  const OpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
    console.log(isOpenMenu);
  }
  return (
    <header className={cls.header}>
      <Link to="/main"><h2><span>Web</span>lab</h2></Link>
      <button onClick={OpenMenu} className={cls.burger}>
        <hr className='burgerLine' width='32' />
        <hr className='burgerLine' width='24' />
        <hr className='burgerLine' width='32' />
      </button>
    </header>
  )
}

export default Navbar;
