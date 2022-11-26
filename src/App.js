import Broadcaster from './pages/Broadcaster'
import Gnere from './pages/Gnere'
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
            <Route path="/gnere" element={<Gnere />} />
            <Route path="/broadcaster" element={<Broadcaster />} />
          </Routes>
      </BrowserRouter>  
    </div>
      
  );
}

export default App;
