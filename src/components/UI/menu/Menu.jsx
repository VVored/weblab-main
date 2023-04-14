import React from 'react'
import cls from './Menu.module.css'

export default function Menu({style}) {
    return (
        <div className='container' style={style}>
            <ul className={cls.ul}>
                <li><a><h1>О нас</h1></a></li>
                <li><a><h1>Портфолио</h1></a></li>
                <li><a><h1>Услуги</h1></a></li>
                <li><a><h1>Контакты</h1></a></li>
            </ul>
            <p className={cls.about}>454112, Челябинск,</p>
            <p className={cls.about} style={{ marginBottom: 40 }}>ул. Комсомольский проспект, 33Д, оф. 16</p>
            <p className={cls.about}>+7 351 750-20-48</p>
            <p className={cls.about} style={{ backgroundColor: '#B5B5B5', width: 'min-content' }}>info@weblab74.ru</p>
            <div className={cls.links}>
                <font>Наши соц.сети</font>
                <a href="*" style={{ backgroundColor: '#4336BE', color: 'white' }}>Facebook </a>
                <a href="*" style={{ color: '#696969' }}>VKontakte</a>
                <a href="*" style={{ color: '#696969' }}>Instagram</a>
                <a href="*" style={{ color: '#696969' }}>Behance</a>
            </div>
        </div>
    )
}
