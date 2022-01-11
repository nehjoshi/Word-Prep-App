import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Learning from './pages/Learning';
import Practice from './pages/Practice';
import NavigatorBot from './pages/NavigatorBot';

import "./styles/global/index.css";

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning/:letter" element={<Learning />} />
        <Route path="/practice/:letter/:key" element={<Practice />} />
        <Route path="/navigator" element={<NavigatorBot />} />
      </Routes>
    </Router>

  );
}

export default App;
