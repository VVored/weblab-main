import React from 'react'
import vector from '../img/Group.svg';

export default function welcomePage() {
    return (
        <div className="container">
            <div style={{ width: '50%', textAlign: 'left' }}>
                <h1>Разработка сайтов и продвижение</h1>
                <p>Cоздаем интерфейсы аналитических систем, мобильные приложения и digital-сервисы для государства и бизнеса</p>
                <div style={{ display: 'flex', }}>
                    <a href="*"><p className="project">Обсудить ваш проект</p></a>
                    <div className="arrow">
                        <div style={{ overflow: 'auto', border: '1px solid #4336be', transform: 'rotate(180deg)', position: 'absolute', width: 100, height: 0, top: 645, left: 647 }}></div>
                        <div style={{ overflow: 'auto', border: '1px solid #4336be', backgroundColor: '#4336be', transform: 'rotate(135deg)', position: 'absolute', width: 5.5, height: 0, left: 745, top: 647 }}></div>
                        <div style={{ overflow: 'auto', border: '1px solid #4336be', backgroundColor: '#4336be', transform: 'rotate(-135deg)', position: 'absolute', width: 5.5, height: 0, left: 745, top: 643 }}></div>
                    </div>
                </div>
                <div className="socialNetwork">
                    <font>Наши соц.сети</font>
                    <a href="*" style={{ backgroundColor: '#4336BE', color: 'white' }}>Facebook </a>
                    <a href="*" style={{ color: '#696969' }}>VKontakte</a>
                </div>
            </div>
            <div style={{ width: '50%' }}>
                <img src={vector} className="vector_element" style={{ width: 710 }} alt="(((" />
            </div>
        </div>
    )
};
