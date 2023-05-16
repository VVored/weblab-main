import React from 'react';
import { useEffect } from 'react';
import Menu from '../components/UI/menu/Menu';
import Navbar from '../components/UI/navbar/Navbar';
import { useContext } from 'react';
import { MenuContext } from '../context';
import macbookSicilia from '../img/Macbook Pro 01.png';

export default function Portfolio() {
    const { setIsOpenMenu } = useContext(MenuContext);
    useEffect(() => { setIsOpenMenu(false); }, []);
    return (
        <div className='container'>
            <Menu />
            <Navbar />
            <div className='page'>
                <h1>Наши работы</h1>
                <p style={{ marginBottom: 100 }}>Все проекты показать невозможно, поэтому здесь представлены наши свежие работы.</p>
                <div className="portElement">
                    <div className="portElementTxt">
                        <h2>Разработка сайта ресторана <span style={{ color: '#1C5947' }}>«Sicilia»</span></h2>
                        <p>
                            Ресторан нетривиальной средиземноморской кухни, завоевавший любовь гостей еще в начале нулевых, в марте 2018 года ресторан получил новый интерьер и концепцию.
                        </p>
                        <p>Разработка современного и адаптивного под мобильные устройства сайта на основе фирменного стиля ресторана. Возможность оплаты блюд онлайн.</p>
                        <div style={{ display: 'flex', marginTop: 60, alignItems: 'center' }}>
                            <a href="/">Посмотреть кейс</a>
                            <div className="arrowBlack"></div>
                        </div>
                    </div>
                    <div className="portElementImgs siciliaImg">
                        <img className='portImgAsabi' src={macbookSicilia} alt="" />
                    </div>
                </div>
                <div className="portElement">
                    <div className="portElementImgs asabiImg">
                        <img className='portImgAsabi' src={macbookSicilia} alt="" />
                    </div>
                    <div className="portElementTxt">
                        <h2>Разработка сайта ресторана  <span style={{ color: '#F6343B' }}>«Asabi»</span></h2>
                        <p>
                            Ресторан нетривиальной средиземноморской кухни, завоевавший любовь гостей еще в начале нулевых, в марте 2018 года ресторан получил новый интерьер и концепцию.
                        </p>
                        <p>Разработка современного и адаптивного под мобильные устройства сайта на основе фирменного стиля ресторана. Возможность оплаты блюд онлайн.</p>
                        <div style={{ display: 'flex', marginTop: 60, alignItems: 'center' }}>
                            <a href="/">Посмотреть кейс</a>
                            <div className="arrowBlack"></div>
                        </div>
                    </div>
                </div>
                <div className="portElement">
                    <div className="portElementTxt">
                        <h2>Разработка сайта  <span style={{ color: '#1840A7' }}>Челябинского цинкового завода</span></h2>
                        <p>
                            Выпуск сайта Челябинского Цинкового завода, крупнейшего российского предприятия по производству цинка и сплавов на его основе.
                            Фирменный стиль, структура и мобильная версия сайта.
                        </p>
                        <div style={{ display: 'flex', marginTop: 60, alignItems: 'center' }}>
                            <a href="/">Посмотреть кейс</a>
                            <div className="arrowBlack"></div>
                        </div>
                    </div>
                    <div className="portElementImgs cincImg">
                        <img className='portImgAsabi' src={macbookSicilia} alt="" />
                    </div>
                </div>
                <div className="portElement">
                    <div className="portElementImgs asabiImg">
                        <img className='portImgAsabi' src={macbookSicilia} alt="" />
                    </div>
                    <div className="portElementTxt shebImg">
                        <h2>Разработка сайта для <span style={{ color: '#2A80B9' }}>Щебеночного завода</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci minima, fuga praesentium dolore doloribus voluptatibus maiores consequatur molestias ad modi illo nostrum earum culpa quod at officia ea ipsam.
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus similique odit, in doloribus recusandae officia velit inventore rerum maiores iusto! Enim fuga quasi ipsa neque rerum dolorem molestiae tempore ipsum.</p>
                        <div style={{ display: 'flex', marginTop: 60, alignItems: 'center' }}>
                            <a href="/">Посмотреть кейс</a>
                            <div className="arrowBlack"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
