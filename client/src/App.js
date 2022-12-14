//Styling
import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Map from './components/Map';
import MediaBar from './components/MediaBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import Page from 'react';

//Pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Mail from './components/Contact';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
      <MediaBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sendmail" element={<Mail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <div className='h-32'></div>
      <Map />
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
