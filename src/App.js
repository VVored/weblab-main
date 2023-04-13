import './App.css';
import WelcomePage from './pages/welcomePage';
import Navbar from './components/UI/navbar/Navbar';
import {useState} from 'react';
import { MenuContext } from './context';

function App() {
    const [menu, setMenu] = useState(false);
    return (
        <MenuContext.Provider value={{
            menu,
            setMenu
        }}>
            <div className="App">
                <Navbar />
                <WelcomePage />
            </div>
        </MenuContext.Provider>
    );
}

export default App;
