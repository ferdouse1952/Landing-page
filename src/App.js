import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import Header from './components/Header/Header';
import Footer from './components/FooterSection/Footer';
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';







function App() {
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pricing" element={<Pricing/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
