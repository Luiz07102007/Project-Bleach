
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './css/App.css';


import Home from './pages/Home';
import Shinigami from './pages/Shinigami';
import Quincy from './pages/Quincy';
import Hollow from './pages/Hollow';
import Fullbringer from './pages/Fullbringer';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <Link to="/" className="nav-logo">
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Bleach_%28manga%29_Logo.svg/2560px-Bleach_%28manga%29_Logo.svg.png" alt="Bleach Logo" />
          </Link>
          <div className="nav-links" >
            <Link to="/shinigami">Shinigami</Link>
            <Link to="/quincy">Quincy</Link>
            <Link to="/hollow">Hollow</Link>
            <Link to="/fullbringer">Fullbringer</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shinigami" element={<Shinigami />} />
          <Route path="/quincy" element={<Quincy />} />
          <Route path="/hollow" element={<Hollow />} />
          <Route path="/fullbringer" element={<Fullbringer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;