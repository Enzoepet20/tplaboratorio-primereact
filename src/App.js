import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Planetas from './pages/Planetas';
import Historia from './pages/Historia';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/planetas" element={<Planetas />} />
                <Route path="/historia" element={<Historia />} />
            </Routes>
        </Router>
    );
};

export default App;
