import React from 'react'
import cls from './Menu.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { MenuContext } from '../../../context'

export default function Menu() {
    const { isOpenMenu, setIsOpenMenu } = useContext(MenuContext);
    return (
        <div style={{ display: 'block' }}>
            <div className={isOpenMenu ? 'blur' : ''} onClick={() => setIsOpenMenu(false)} />
            <div className={isOpenMenu ? 'menu active' : 'menu'} onClick={(e) => { e.stopPropagation() }}>
                <ul className={cls.ul}>
                    <li><Link to="/about"><h1 className={cls.li}>О нас</h1></Link></li>
                    <li><Link to="/portfolio"><h1 className={cls.li}>Портфолио</h1></Link></li>
                    <li><Link><h1 className={cls.li}>Услуги</h1></Link></li>
                    <li><Link><h1 className={cls.li}>Контакты</h1></Link></li>
                </ul>
                <p className={cls.about}>454112, Челябинск,</p>
                <p className={cls.about} style={{ marginBottom: 40 }}>ул. Комсомольский проспект, 33Д, оф. 16</p>
                <p className={cls.about}>+7 351 750-20-48</p>
                <p className={cls.about} style={{ backgroundColor: '#696969', width: 'min-content' }}>info@weblab74.ru</p>
                <div className={cls.links}>
                    <font>Наши соц.сети</font>
                    <a href="*" style={{ backgroundColor: '#4336BE', color: 'white' }}>Facebook </a>
                    <a href="*" style={{ color: '#fff' }}>VKontakte</a>
                    <a href="*" style={{ color: '#fff' }}>Instagram</a>
                    <a href="*" style={{ color: '#fff' }}>Behance</a>
                </div>
            </div>
        </div>
    )
}
