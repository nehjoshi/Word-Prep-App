import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Learning from './pages/Learning';

import "./styles/global/index.css";

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning/:letter" element={<Learning />} />
      </Routes>
    </Router>

  );
}

export default App;
