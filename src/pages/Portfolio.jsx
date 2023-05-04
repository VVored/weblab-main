import React from 'react';
import { useEffect } from 'react';
import Menu from '../components/UI/menu/Menu';
import Navbar from '../components/UI/navbar/Navbar';
import { useContext } from 'react';
import { MenuContext } from '../context';
import macbookAsabi from '../img/Macbook Pro 01.png';

export default function Portfolio() {
    const { setIsOpenMenu } = useContext(MenuContext);
    useEffect(() => { setIsOpenMenu(false); }, []);
    return (
        <div className='container'>
            <Menu />
            <Navbar />
            <div className='page'>
                <h1>Наши работы</h1>
                <p style={{marginBottom: 100}}>Все проекты показать невозможно, поэтому здесь представлены наши свежие работы.</p>
                <div className="portElement">
                    <div className="portElementTxt">
                        <h2>Разработка сайта ресторана <span style={{color: '#1C5947'}}>"Sicilia"</span></h2>
                        <p>
                            Ресторан нетривиальной средиземноморской кухни, завоевавший любовь гостей еще в начале нулевых, в марте 2018 года ресторан получил новый интерьер и концепцию.
                        </p>
                        <p>Разработка современного и адаптивного под мобильные устройства сайта на основе фирменного стиля ресторана. Возможность оплаты блюд онлайн.</p>
                        <div style={{display: 'flex', marginTop: 60, alignItems: 'center'}}>
                            <a href="/">Посмотреть кейс</a>
                            <div className="arrowBlack"></div>
                        </div>
                    </div>
                    <div className="portElementImgs">
                        <img className='portImgAsabi' src={macbookAsabi} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
