import React from 'react';
import Navbar from '../components/UI/navbar/Navbar';
import Menu from '../components/UI/menu/Menu';
import { useContext } from 'react';
import { MenuContext } from '../context';
import { useEffect } from 'react';
import AboutListItem from '../components/UI/aboutList/AboutListItem';
import AboutPrincCard from '../components/UI/aboutPrincCard/AboutPrincCard';
import Footer from '../components/UI/footer/Footer';
import asabi from '../img/asabi.png';
import ural from '../img/ural.png';
import sicil from '../img/sicil.png';
import port from '../img/port.png';
import cinc from '../img/cinc.png';
import telecom from '../img/telekom.png';
import delta from '../img/delta.png';
import philar from '../img/philar.png';

export default function About() {
    const { setIsOpenMenu } = useContext(MenuContext);
    useEffect(() => { setIsOpenMenu(false); }, []);

    return (
        <div className='container'>
            <Menu />
            <Navbar />
            <div className='page'>
                <h1>О нас</h1>
                <p>Тупа нереальные ребята и еще текст, просто потому что заставили (((</p>
                <p style={{ maxWidth: 1100 }}>С 2017 года создаем интерфейсы, веб-сайты, мобильные приложения для крупных правительственных организаций и коммерческих предприятий</p>
                <h2 style={{ marginTop: 80, marginBottom: 50 }}>Какие-то цифры нашей Компании</h2>
                <ul className='aboutUl'>
                    <AboutListItem number={8} h="Лет" desk="Средний опыт сотрудников" />
                    <AboutListItem number={21} h="день" desk="Средний срок разработки проектов" />
                    <AboutListItem number=">20" h="" desk="Средний опыт сотрудников" />
                    <AboutListItem number={1650} h="" desk="Идей у нашего дизайнера" />
                </ul>
                <div className="princips">
                    <h2>Принципы</h2>
                    <p style={{ fontSize: 16, maxWidth: 728 }}>Мы работаем так, чтобы клиент контролировал ситуацию в любой момент времени и не боялся за результат.</p>
                </div>
                <div className="aboutPrincCardHolder">
                    <AboutPrincCard h='Интеграция и общая инфраструктура' p="Выстраиваем тесное и гибкое взаимодействие с клиентами. Для этого используем удобные системы коммуникации и управления проектами." />
                    <AboutPrincCard cls="dotes" h='Ответственность за проект' p="Наша работа не заканчивается на передаче макетов. Поддерживаем и развиваем проекты на протяжении их использования." />
                    <AboutPrincCard h='Открытая коммуникация' p="Мы — не черный ящик. Наши рабочие процессы на виду: у клиентов есть доступ к актуальному статусу и всем материалам проекта. " />
                    <AboutPrincCard h='Эффективные в мире digital' p="Мы не стараемся сделать сайт красивым или модным. Мы делаем его современным, а значит удобным для пользователя и эффективным для бизнеса." />
                </div>
                <div className="princips">
                    <h2>Наши клиенты</h2>
                    <p style={{ fontSize: 16, maxWidth: 728 }}>Создавать лучшие проекты невозможно без лучших клиентов. Мы с гордостью и благодарностью говорим о тех, с кем работали или продолжаем работать. </p>
                </div>
                <div className="image_wrapper">
                    <img src={ural} alt="" />
                    <img src={sicil} alt="" />
                    <img src={port} alt="" />
                    <img src={asabi} alt="" />
                    <img src={cinc} alt="" />
                    <img src={telecom} alt="" />
                    <img src={delta} alt="" />
                    <img src={philar} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}
