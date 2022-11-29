import Broadcaster from './pages/Broadcaster'
import Genre from './pages/Genre'
import Title from './pages/Title'
import Home from './pages/Home'
import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/title" element={<Title />} />
            <Route path="/gnere" element={<Genre />} />
            <Route path="/broadcaster" element={<Broadcaster />} />
          </Routes>
      </BrowserRouter>  
    </div>
      
  );
}

export default App;
