import React from 'react';
import { useContext } from 'react';
import Menu from '../components/UI/menu/Menu';
import Navbar from '../components/UI/navbar/Navbar';
import { MenuContext } from '../context';
import vector from '../img/Group.svg';
import { useEffect } from 'react';

export default function WelcomePage() {
    const {setIsOpenMenu} = useContext(MenuContext);
    useEffect(() => { setIsOpenMenu(false); }, [])
    return (
        <div>
            <Menu/>
            <Navbar />
            <div className="container" style={{ display: 'flex', animation: 'extension 1s' }}>
                <div style={{ width: '50%', textAlign: 'left' }}>
                    <h1>Разработка сайтов и продвижение</h1>
                    <p>Cоздаем интерфейсы аналитических систем, мобильные приложения и digital-сервисы для государства и бизнеса</p>
                    <div style={{ display: 'flex' }}>
                        <a href="*"><p className="project">Обсудить ваш проект</p></a>
                        <div className="arrow" style={{ border: '1px solid #4336be', transform: 'rotate(180deg)', width: 100, height: 0, marginTop: 40, marginLeft: 100 }}></div>
                    </div>
                    <div className="socialNetwork">
                        <font style={{color: 'black'}}>Наши соц.сети</font>
                        <a href="*" style={{ backgroundColor: '#4336BE', color: 'white' }}>Facebook </a>
                        <a href="*" style={{ color: '#696969' }}>VKontakte</a>
                    </div>
                </div>
                <div style={{ width: '50%' }}>
                    <img src={vector} className="vector_element" style={{ width: 710 }} alt="(((" />
                </div>
            </div>
            
        </div>
    )
};
