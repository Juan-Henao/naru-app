import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Characters from './components/Characters';
import Clans from './components/Clans';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
            <li>
              <Link to="/clans">Clans</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/clans" element={<Clans />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
