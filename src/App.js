import React, { useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Layanan from './components/Layanan/Layanan';
import Sidebar from './components/Sidebar/Sidebar';
import Kontak from './components/Kontak/Kontak';
import Document from './components/Document/Document';
import Whatsapp from './components/Whatsapp/Whatsapp';
import Gallery from './components/Gallery/Gallery';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
}
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero/>
      <About/>
      <Document/>
      <Layanan/>
      <Gallery/>
      <Kontak/>
      <Footer/>
      <Whatsapp/>
    </Router>
  );
}

export default App;

