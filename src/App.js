import './App.css';
import WelcomePage from './pages/welcomePage';
import Navbar from './components/UI/navbar/Navbar';
import { useState } from 'react';
import { MenuContext } from './context';
import Menu from './components/UI/menu/Menu';
import About from './pages/About';

function App() {
    const [menu, setMenu] = useState(false);
    return (
        // <MenuContext.Provider value={{
        //     menu,
        //     setMenu
        // }}>
        //     <div className="App">
        //         <Navbar />
        //         {menu
        //             ? <Menu style={{ animation: 'extension 1s' }} />
        //             : <WelcomePage style={{ animation: 'extension 1s', display: 'flex' }} />
        //         }
        //     </div>
        // </MenuContext.Provider>
        <About/>
    );
}

export default App;
