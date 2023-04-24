import React from 'react';
import Navbar from '../components/UI/navbar/Navbar';
import Menu from '../components/UI/menu/Menu';
import { useContext } from 'react';
import { MenuContext } from '../context';
import { useEffect } from 'react';

export default function About() {
    const { setIsOpenMenu } = useContext(MenuContext);
    useEffect(() => { setIsOpenMenu(false); }, [])

    return (
        <div className='container'>
            <Menu />
            <Navbar />
            <div style={{ animation: 'extension 1s' }}>
                <h1>О нас</h1>
                <p>Тупа нереальные ребята и еще текст, просто потому что заставили (((</p>
                <p style={{ maxWidth: 1100 }}>С 2017 года создаем интерфейсы, веб-сайты, мобильные приложения для крупных правительственных организаций и коммерческих предприятий</p>
                <h2 style={{ marginTop: 80, marginBottom: 50 }}>Какие-то цифры нашей Компании</h2>
                <ul style={{ listStyleType: 'none', color: '#4336be', display: 'flex', justifyContent: 'center' }}>
                    <li style={{ display: 'flex', width: 300 }}>
                        <div>
                            <h1 style={{ color: '#4336be' }}>8</h1>
                            <p style={{ color: '#4336be', fontWeight: 700, marginTop: -30 }}>Лет</p>
                        </div>
                        <p style={{ color: '#4336be', marginTop: 75, marginLeft: 40 }}>Средний опыт сотрудников</p>
                    </li>
                    <li style={{ display: 'flex', width: 300 }}>
                        <div>
                            <h1 style={{ color: '#4336be' }}>21</h1>
                            <p style={{ color: '#4336be', fontWeight: 700, marginTop: -30 }}>День</p>
                        </div>
                        <p style={{ color: '#4336be', marginLeft: 40, marginTop: 55 }}>Средний срок разработки проектов</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
