import React from 'react'
import cls from './Menu.module.css'

export default function Menu() {
    return (
        <div className='container'>
            <ul className={cls.ul}>
                <li><a><h1>О нас</h1></a></li>
                <li><a><h1>Портфолио</h1></a></li>
                <li><a><h1>Услуги</h1></a></li>
                <li><a><h1>Контакты</h1></a></li>
            </ul>
            <p className={cls.about}>454112, Челябинск,</p>
            <p className={cls.about} style={{marginBottom: 40}}>ул. Комсомольский проспект, 33Д, оф. 16</p>
            <p className={cls.about}>+7 351 750-20-48</p>
            <p className={cls.about} style={{backgroundColor: '#B5B5B5'}}>info@weblab74.ru</p>
        </div>
    )
}
