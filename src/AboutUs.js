import React from "react";
import NavBar from "./NavBar";
import img1 from "./images/about-us.png";
import Footer from "./Footer";
import img2 from "./images/aboutus.png";
import ContactForm from "./ContactForm";
import image1 from "./images/image111.png";
import image2 from "./images/image222.png";
import image3 from "./images/image333.png";
import image4 from "./images/image444.png";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import service1 from './images/card1.png';
import service2 from './images/card2.png';
import service3 from './images/card3.png';
import service4 from './images/card4.png';
import service5 from './images/card5.png';
import service6 from './images/card6.png';
import service7 from './images/card7.png';
import service8 from './images/card8.png';
import WhatsApp from "./whatsapp";
import { Slide } from 'react-reveal';
import LightSpeed from 'react-reveal/LightSpeed';

function AboutUs() {
  const cardData = [
    {
      title: 'Experienced Team',
      paragraph: 'Our team consists of skilled People,and project managers.',
      imageSrc: service1, // Main card image for Card 1

    },
    {
      title: 'Cutting-edge Technology',
      paragraph: 'We use the latest technology and tools to deliver high-quality solutions.',
      imageSrc: service2, // Main card image for Card 2
     
    },
    {
      title: 'Agile Development',
      paragraph: 'We use the latest technology and tools to deliver high-quality solutions.',
      imageSrc: service3, // Main card image for Card 3
 
    },
    {
        title: 'Fast Turnaround',
        paragraph: 'Our team consists of skilled People,and project managers.',
     
        imageSrc: service4, // Main card image for Card 3
       
      },
      {
        title: 'Experienced Team',
        paragraph: 'Our team consists of skilled People,and project managers.',
        imageSrc: service5, // Main card image for Card 3
        
    
      },
      {
        title: 'Quality Assurance',
        paragraph: 'We conduct rigorous testing to ensure high-quality and error-free solutions.',
        
        imageSrc: service6, // Main card image for Card 3
        // SVG image for Card 3
      },
      {
        title: 'Available 24/7',
        paragraph: 'Our team consists of skilled People,and project managers.',
        
        imageSrc: service7, // Main card image for Card 3
        // SVG image for Card 3
      },
      {
        title: 'Affordable Pricing',
        paragraph: 'Our team consists of skilled People,and project managers.',
        
        imageSrc: service8, // Main card image for Card 3
        // SVG image for Card 3
      },
      
    // Add more card data objects as needed
  ];
  return (
    <>
      <NavBar />
      <hr />
      <Slide left>
      <div class="relative">
        <img src={img1} alt="Your Image" class="w-full" />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        
          <h1 class="text-white text-3xl sm:text-6xl font-bold">
            <span>Revolutionize </span>
            <span className="text-[#E57C23]">Your </span>
            <span className="text-white">Amazon </span>
            <br />
            <span className="text-[#E57C23]">Business </span>
            <span className="text-white">with </span>
            <span className="text-[#E57C23]">Team X-Mark</span>
          </h1>
        </div>
      </div>
      </Slide>
      <div class="flex items-center justify-center ">
       <div class="text-center">
         <img src={img2} alt="Your Image" class="mx-auto mt-[-40px]" />
        </div>
      </div>
      <div className="container flex sm:flex-row flex-wrap-reverse flex-col mt-5 p-2 ">
       <Slide left>
         <div className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold sm:text-4xl mb-4 sm:text-start text-center">
            <span className="text-[#E57C23] text-left">Our </span>{" "}
            <span className="text-[#11468F]">Introduction</span>{" "}
          </p>
          <p className="sm:text-base text-sm text-start font-sans mb-4 text-[#979797]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing in non
            ullamcorper at quam amet tortor in quam. Sollicitudin elementum dui
            enim erat pulvinar consectetur volutpat. Diam lectus metus in
            integer tempor. Facilisis cras aliquet nisi sed vulputate proin
            consectetur dolor iaculis.volutpat. Diam lectus metus in integer
            tempor. Facilisis cras aliquet nisi sed vulputate proin consectetur
            dolor iaculis.volutpat. Diam lectus metus in integer tempor.
            Facilisis cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor iaculis.
          </p>
        </div>
        </Slide>
        <Slide right>
        <div className="w-full md:w-1/2 px-4">
          <img
            src={image1} // Replace with your image URL
            alt=" Description"
            className="w-full h-auto"
          />
        </div> 
        </Slide>
      </div>
      <div className="container flex sm:flex-row flex-wrap-reverse flex-col mt-5 p-2 ">
    <Slide left>
            <div className="w-full md:w-1/2 px-4">
          <img
            src={image2} // Replace with your image URL
            alt=" Description"
            className="w-full h-auto"
          />
        </div>
        </Slide>

       <Slide right> 
     
        <div className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold sm:text-4xl mb-4 sm:text-start text-center">
            <span className="text-[#E57C23] text-left">Our </span>{" "}
            <span>Goals</span>{" "}
          </p>
          <p className="sm:text-base text-sm text-start font-sans mb-4 text-[#979797]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing in non
            ullamcorper at quam amet tortor in quam. Sollicitudin elementum dui
            enim erat pulvinar consectetur volutpat. Diam lectus metus in
            integer tempor. Facilisis cras aliquet nisi sed vulputate proin
            consectetur dolor iaculis.volutpat. Diam lectus metus in integer
            tempor. Facilisis cras aliquet nisi sed vulputate proin consectetur
            dolor iaculis.volutpat. Diam lectus metus in integer tempor.
            Facilisis cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor iaculis.
          </p>
        </div>
        </Slide>
      </div>
      <div className="container flex sm:flex-row flex-wrap-reverse flex-col mt-5 p-2 ">
<Slide left>
        <div className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold sm:text-4xl mb-4 sm:text-start text-center">
            <span className="text-[#E57C23] text-left">Our </span>{" "}
            <span>Priorities</span>{" "}
          </p>
          <p className="sm:text-base text-sm text-start font-sans mb-4 text-[#979797]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing in non
            ullamcorper at quam amet tortor in quam. Sollicitudin elementum dui
            enim erat pulvinar consectetur volutpat. Diam lectus metus in
            integer tempor. Facilisis cras aliquet nisi sed vulputate proin
            consectetur dolor iaculis.volutpat. Diam lectus metus in integer
            tempor. Facilisis cras aliquet nisi sed vulputate proin consectetur
            dolor iaculis.volutpat. Diam lectus metus in integer tempor.
            Facilisis cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor iaculis.
          </p>
        </div>
        </Slide>
       <Slide right>
        <div className="w-full md:w-1/2 px-4">
          <img
            src={image3} // Replace with your image URL
            alt=" Description"
            className="w-full h-auto"
          />
        </div>
        </Slide>
      </div>
      <div className="container flex sm:flex-row flex-wrap-reverse flex-col mt-5 p-2 ">
   <Slide left>
      <div className="w-full md:w-1/2 px-4">
          <img
            src={image4} // Replace with your image URL
            alt=" Description"
            className="w-full h-auto"
          />
        </div>
        </Slide>
        <Slide right>   
        <div className="w-full md:w-1/2 px-4">
          <p className="text-xl font-bold sm:text-4xl mb-4 sm:text-start text-center">
            <span className="text-[#E57C23] text-left">Our </span>{" "}
            <span>Agenda</span>{" "}
          </p>
          <p className="sm:text-base text-sm text-start font-sans mb-4 text-[#979797]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing in non
            ullamcorper at quam amet tortor in quam. Sollicitudin elementum dui
            enim erat pulvinar consectetur volutpat. Diam lectus metus in
            integer tempor. Facilisis cras aliquet nisi sed vulputate proin
            consectetur dolor iaculis.volutpat. Diam lectus metus in integer
            tempor. Facilisis cras aliquet nisi sed vulputate proin consectetur
            dolor iaculis.volutpat. Diam lectus metus in integer tempor.
            Facilisis cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor
            iaculis.volutpat. Diam lectus metus in integer tempor. Facilisis
            cras aliquet nisi sed vulputate proin consectetur dolor iaculis.
          </p>
        </div>
        </Slide>
      </div>
      <div className="bg-[#E6EEF0]">
      <Container className='mt-4'>
  <Row>
    {cardData.map((card, index) => (
      <Col key={index} sm={12} md={6} lg={3} className="mb-4 d-flex ">
        <Card className={`custom-card-style bg-white mt-5 p-3 w-100 d-flex flex-column`} style={{ width: '250px', height: '400px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '150px' }}>
            <img src={card.imageSrc} alt={`Card ${index + 1}`} className="img-fluid" style={{ objectFit: 'cover', maxHeight: '100%', maxWidth: '100%' }} />
          </div>
          <Card.Body className="d-flex flex-column">
            <div className="text-center mt-3">
              <h5 className='font-sans font-semibold sm:text-2xl'>{card.title}</h5>
            </div>
            <Card.Text className='text-center mt-2 text-[#979797] font-sans'>{card.paragraph}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
</div>
      <ContactForm />
      <Footer />
      <WhatsApp/>
    </>
  );
}

export default AboutUs;
