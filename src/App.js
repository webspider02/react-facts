import Navbar from './components/Navbar';
import Main from './components/Main';
import './style.css';

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Main />
            </div>
        </div>
    );
}