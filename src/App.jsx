import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';

import Contact from './components/Contact';
import Reservation from './components/Reservation';
import Team from './components/Team';
import News from './components/News';
import FAQ from './components/FAQ.JSX';
import Order from './components/Order';



function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className="font-montserrat">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/team" element={<Team />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/order" element={<Order />} />
        
        </Routes>
      </div>
    </div>
  </Router>

  )
}

export default App
