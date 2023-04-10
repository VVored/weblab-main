import './App.css';
import Navbar from './components/UI/navbar/Navbar';
import vector from './img/Group.svg';
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <div style={{ width: '50%', textAlign: 'left' }}>
                    <h1>Разработка сайтов и продвижение</h1>
                    <p>Cоздаем интерфейсы аналитических систем, мобильные приложения и digital-сервисы для государства и бизнеса</p>
                    <div style={{ display: 'flex', }}>
                        <a href="*"><p className="project">Обсудить ваш проект</p></a>
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
        </div>
    );
}

export default App;
