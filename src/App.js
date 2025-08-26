import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Navigation from './components/Navigation';
import About from './Pages/About/aboutUs';
import Contact from './Pages/Contact/contactUs';
import NotFound from './Pages/NotFound';
import ScrollToTop from './components/ScrollTotop';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <div className="sticky top-0 z-50" style={{ backdropFilter: "blur(80px)" }}>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="sticky top-0 z-50" style={{ backdropFilter: "blur(80px)" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
