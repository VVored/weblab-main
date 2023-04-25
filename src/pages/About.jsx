import React from 'react';
import Navbar from '../components/UI/navbar/Navbar';
import Menu from '../components/UI/menu/Menu';
import { useContext } from 'react';
import { MenuContext } from '../context';
import { useEffect } from 'react';
import AboutListItem from '../components/UI/aboutList/AboutListItem';

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
                <ul className='aboutUl'>
                    <AboutListItem number={8} h="Лет" desk="Средний опыт сотрудников"/>
                    <AboutListItem number={21} h="день" desk="Средний срок разработки проектов"/>
                    <AboutListItem number=">20" h="" desk="Средний опыт сотрудников"/>
                    <AboutListItem number={1650} h="" desk="Идей у нашего дизайнера"/>
                </ul>
            </div>

        </div>
    )
}
