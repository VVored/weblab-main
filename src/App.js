import './App.css';
import WelcomePage from './pages/WelcomePage';
import About from './pages/About';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MenuContext } from './context';
import { useState } from 'react';

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <MenuContext.Provider value={{
            isOpenMenu,
            setIsOpenMenu,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/*' element={<Navigate to="/main" replace />} />
                    <Route exact element={<WelcomePage />} path="/main" key="/main" />
                    <Route exact element={<About />} path="/about" key="/about" />          
                </Routes>
            </BrowserRouter>
        </MenuContext.Provider>
    );
}

export default App;
