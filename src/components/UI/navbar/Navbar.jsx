import React from 'react';
import cls from './Navbar.module.css';

function Navbar() {
  const click = () => {
    console.log('mew');
  }
  return (
    <header className={cls.header}>
      <h2><span>Web</span>lab</h2>
      <button onClick={click} className={cls.burger}>
        <hr width='32'/>
        <hr width='24'/>
        <hr width='32'/>
      </button>
    </header>
  )
}

export default Navbar;
