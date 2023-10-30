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
    <footer className=" text-white font-sans px-2 sm:px-0 py-3 mt-4" style={{ background: 'linear-gradient(to right, #041562 70%, #11468F)'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            {/* First Column */}
            <div className="flex text-center">
            {/* <img src={logo} width={'10%'} /> */}
            <h1 className='text-4xl  ml-2' style={{fontFamily:'-moz-initial',color:'white'}}>Team X-Mark</h1>
            </div>
            <p className='text-sm sm:text-lg text-left'>To empower ecommerce sellers to effectively oversee, enhance, and expand their global business operations.</p>
           
          </div>
          <div className="col-md-3 col-sm-6">
            {/* Second Column */}
            <h5 className="text-left">Services:</h5>
            <p className="text-left">SEO Service</p>
            <p className="text-left">Amazon PPC</p>
            <p className="text-left">Account management</p>
            <p className="text-left">Brand Scaling</p>
            <p className="text-left">Influencer’s marketing</p>
            <p className="text-left">Listing Promotion</p>
          </div>
          <div className="col-md-3 col-sm-6">
            {/* Third Column */}
            <h5 className="text-left">Free Tools:</h5>
            <p className="text-left">FBA Calculator</p>
            <p className="text-left">ROI Calculator</p>
            <p className="text-left">Amazon PPC Audit</p>
            <p className="text-left">Amazon Listing Audit</p>
          </div>
        
          <div className="col-md-3 col-sm-6">
            {/* Fourth Column */}
            <h5 className="text-left">Resources:</h5>
            <p className="text-left">About us</p>
            <p className="text-left">Careers</p>
            <p className="text-left">Blogs</p>
            <p className="text-left">Cheat Sheets</p>
            <p className="text-left">Newsletters</p>
            <p className="text-left">Guides</p>
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
            <p className="text-white">&copy; 2023 Team XMark</p>
          </div> </div>   
      </div>
      </div>
    </footer>
  );
}

export default Footer;
