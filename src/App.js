import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import Home from './Home';
import Services from './Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Blogs from './Blogs';
import FAQs from './FAQs';
function App() {
  return (
    <div className="App">
       <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} /> {/* Use "element" instead of "component" */}
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/faqs" element={<FAQs/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
