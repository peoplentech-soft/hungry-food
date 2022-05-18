import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import "swiper/css/bundle";
import About from './components/About/About';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CheckMenu from './components/CheckMenu/CheckMenu';
import SpecialItems from './components/SpecialItems/SpecialItems';
import Event from './components/Event/Event';
import Booking from './components/Booking/Booking';
import Gallery from './components/Gallery/Gallery';
import Chefs from './components/Chefs/Chefs';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <WhyChooseUs />
      <CheckMenu /> 
      <SpecialItems />
      <Event />
      <Booking />
      <Gallery />
      <Chefs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
