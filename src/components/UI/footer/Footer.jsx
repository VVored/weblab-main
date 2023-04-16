import React from 'react';
import cls from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={cls.footer}>
            <div className='container'>
                <div className={cls.footer__flex}>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <div className={cls.adress}>
                                <p className={cls.p1}>454112, Челябинск,</p>
                                <p className={cls.p1}>ул. Комсомольский проспект, 33Д, оф. 16</p>
                            </div>
                            <div>
                                <p className={cls.p1}>+7 351 750-20-48</p>
                                <p className={cls.p1} style={{ backgroundColor: '#B5B5B5' }}>info@weblab74.ru </p>
                            </div>
                        </div>
                        <div className={cls.links}>
                            <font>Наши соц.сети</font>
                            <a href="*" style={{ backgroundColor: '#4336BE', color: 'white' }}>Facebook </a>
                            <a href="*" style={{ color: '#696969' }}>VKontakte</a>
                            <a href="*" style={{ color: '#696969' }}>Instagram</a>
                            <a href="*" style={{ color: '#696969' }}>Behance</a>
                        </div>
                    </div>
                    <div>
                        <p className={cls.p2}>Политика конфиденциальности</p>
                        <p className={cls.p2}>© 2019. Weblab. digital studio</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
