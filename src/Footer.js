import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icon1 from './images/social1.svg';
import icon2 from './images/social2.svg';
import icon3 from './images/social3.svg';
import icon4 from './images/social4.svg';
import logo from './images/logo1.png';


function detectMob() {
  if (window.innerWidth <= 500 && window.innerHeight <= 920) return 'mobile';
  if (window.innerWidth <= 1024 && window.innerHeight <= 1244) return 'tablet';
  if (window.innerWidth <= 1440 && window.innerHeight <= 1244) return 'laptop_small';
  else return 'laptop_large';
}
const isMobile = detectMob();

// Get Guidance From Front End Experts, About this code, improvements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
function Footer() {
  const circleStyle = {
    width: '29.98px', // Adjust the size of the circle as needed
    height: '30px', // Adjust the size of the circle as needed
    borderRadius: '50%', // Makes it a circle
    backgroundColor: 'white', // Set the background color
    marginRight: '5px', // Add spacing between the circle and text
  };

  return (
    <footer className=" text-white font-sans px-2 sm:px-0 py-3 mt-4" style={{ background: 'linear-gradient(to right, #121212 70%, #A5E9E1)'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            {/* First Column */}
            <div className="flex text-center">
            <img src={logo} width={'10%'} />
              <h1 className='text-3xl font-sans'>LOGO</h1>
            </div>
            <p className='text-sm sm:text-lg text-left'>Company info dolor sit amet consectetur. Adipiscing in non ulla mco rper at quam amet tortor in quam. Sollicitudin elementum dui enim erat pulvinar consecteculis.</p>
           
          </div>
          <div className="col-md-3 col-sm-6">
            {/* Second Column */}
            <h5 className="text-left">Header 1</h5>
            <p className="text-left">Subheader 1.1</p>
            <p className="text-left">Subheader 1.2</p>
            <p className="text-left">Subheader 1.3</p>
          </div>
          <div className="col-md-3 col-sm-6">
            {/* Third Column */}
            <h5 className="text-left">Header 2</h5>
            <p className="text-left">Subheader 2.1</p>
            <p className="text-left">Subheader 2.2</p>
            <p className="text-left">Subheader 2.3</p>
          </div>
        
          <div className="col-md-3 col-sm-6">
            {/* Fourth Column */}
            <h5 className="text-left">Header 3</h5>
            <p className="text-left">Subheader 3.1</p>
            <p className="text-left">Subheader 3.2</p>
            <p className="text-left">Subheader 3.3</p>
          
          </div> 
        
            
        
        
        <p className="text-start">Get In Touch</p> {/* Hide on medium and larger screens */}
           
        <div className='md:flex'> <div className="mt-2 flex space-x-12 sm:space-x-7">
              {/* Social Media Icons */}
              <a href="#" className="text-white">
                <img src={icon1} alt="Social Icon 1"/>
              </a>
              <a href="#" className="text-white">
                <img src={icon2} alt="Social Icon 2" />
              </a>
              <a href="#" className="text-white">
                <img src={icon3} alt="Social Icon 3" />
              </a>
              <a href="#" className="text-white">
                <img src={icon4} alt="Social Icon 4" />
              </a>
            </div>
          
            </div>
            <div className="row">
          <div className="col-md-12 text-right">
            <p className="text-white">&copy; 2023 Your Company</p>
          </div> </div>   
      </div>
      </div>
    </footer>
  );
}

export default Footer;
