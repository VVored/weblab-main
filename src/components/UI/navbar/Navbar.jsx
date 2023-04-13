import React from 'react';
import { useContext } from 'react';
import { MenuContext } from '../../../context';
import cls from './Navbar.module.css';

function Navbar() {
  const {menu, setMenu} = useContext(MenuContext);
  const openOrCloseMenu = () => {
    setMenu(!menu);
    console.log(menu);
  }
  return (
    <header className={cls.header}>
      <h2><span>Web</span>lab</h2>
      <button onClick={openOrCloseMenu} className={cls.burger}>
        <hr width='32'/>
        <hr width='24'/>
        <hr width='32'/>
      </button>
    </header>
  )
}

export default Navbar;
