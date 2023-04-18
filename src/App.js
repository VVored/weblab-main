import './App.css';
import WelcomePage from './pages/WelcomePage';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MenuPage from './pages/MenuPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<WelcomePage />} path="/main" key="/main" />
                <Route element={<MenuPage />} path="/menu" key="/menu" />
                <Route element={<About />} path="/about" key="/about" />
                <Route path='/*' element={<Navigate to="/main" replace/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
