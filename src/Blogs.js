import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import Footer from './Footer';
import {Card,Button } from 'react-bootstrap'; // Assuming you have Bootstrap components imported
import blog1 from './images/blog11.png';
import blog2 from './images/blog22.png';
import blog3 from './images/blog33.png';
import blog4 from './images/blog44.png';
import blog5 from './images/blog55.png';
import blog6 from './images/blog66.png';
import ContactForm from './ContactForm';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import service1 from './images/blog21.png';
import service2 from './images/blog23.png';
import service3 from './images/blog24.png';
import service4 from './images/blog25.png';
import service5 from './images/blog26.png';
import popular1 from './images/popular1.png';
import popular2 from './images/popular2.png';
import popular3 from './images/popular3.png';
function Blogs(){
  const cardData = [
    {
      title: 'Latest News Of June 2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 1',
      imageSrc: service1, // Main card image for Card 1
     
    },
    {
      title: '2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 2',
      imageSrc: service2, // Main card image for Card 2
    
    
    },
    {
      title: 'Bigg News Of June 2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 3',
      imageSrc: service3, // Main card image for Card 3
      
    },
    {
        title: 'Latest News Of June 2023 Cras porttitor scelerisque cras arcu',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
        buttonText: 'Learn More 3',
        imageSrc: service4, // Main card image for Card 3
      
      },
      {
        title: 'Bigg News Of June 2023 Cras porttitor scelerisque cras arcu',
        paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
        buttonText: 'Learn More 3',
        imageSrc: service5, // Main card image for Card 3
       
      },
     
      
    // Add more card data objects as needed
  ];
  const cardData1 = [
    {
      title: 'Latest News Of June 2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 1',
      imageSrc: popular1, // Main card image for Card 1
     
    },
    {
      title: '2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 2',
      imageSrc: popular2, // Main card image for Card 2
    
    
    },
    {
      title: 'Bigg News Of June 2023 Cras porttitor scelerisque cras arcu',
      paragraph: 'Lorem ipsum dolor sit amet consectetur. Cras porttitor scelerisque cras arcu egestas pharetra sit ultrices cras arcu egestas pharetras.',
      buttonText: 'Learn More 3',
      imageSrc: popular3, // Main card image for Card 3
      
    },
    // Add more card data objects as needed
  ];
    return(
        <>
        <NavBar /><div className="flex flex-col items-center mt-10">
            <h className="text-6xl font-sans font-bold ">Our <span className='text-[#006261]'>Blogs</span></h>
            <p className='font-sans text-[#979797] mt-4'>A Center for all our Resources and Insights</p>
            <div className="flex items-center w-[45%] mt-2">
    <input
        className="w-full py-2 px-4 outline-none bg-[#F1F1F1] rounded-l-full"
        type="text"
        placeholder="Search..."
    />
    <button className="flex items-center bg-[#006261] hover:bg-[#029b98] text-white font-bold py-2 px-4 rounded-r-full">
        <FontAwesomeIcon className='mr-2' icon={faSearch} />
        <span className="mr-2">Search</span>
    </button>
</div>

        </div>
       
        <div className="sm:flex bg-[#E6EEF0] mt-5">
  {/* Left Big Card */}
  <div className="sm:w-1/2 p-4 mb-5 sm:mb-0 flex flex-col text-left" style={{ height: 'calc(100vh - 150px)' }}>
    <div className="bg-white shadow-md rounded-lg flex-grow">
      <img src={blog1} alt="Blog" className="w-full h-auto rounded-t-lg" />
      <div className="p-4">
        <p className="text-sm text-gray-600"><FontAwesomeIcon icon={faClock} className="mr-2" /> June 8,2023</p>
        <h2 className="text-xl font-semibold">Latest News Of June 2023 Cras porttitor scelerisque cras arcu adhlka iadhaklnx ajkaj .</h2>
        <p className="text-gray-700">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu Return on investment (ROI) calculator that returns total ROI rate and annualized ROI using either actual dates of investmentReturn on investment (ROI) calculator that returns total ROI rate and annualized ROI using either actual dates of investment investmentReturn on investment (ROI) calculator that returns total ROI rate and annualized ROI using either actual dates of investment</p>
        <Button variant="outline-primary" className="custom-button align-self-start mt-4"><span>Read Full</span>
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
    </div>
  </div>

  {/* Right Five Blog Cards */}
  <div className="sm:w-1/2 p-4">
  <Card className="mb-4 h-[120px] border-none text-left">
    <div className="flex">
      <Card.Img variant="left" src={blog2} className="rounded-l-lg" style={{ width: '30%', height:'139px' }} />
      <Card.Body>
        <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
        <h className="text-base font-bold">Latest News Of June 2023 Cras porttitor scelerisque cras lorem ipsum web and aps arcu.</h>
        <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
      </Card.Body>
    </div>
  </Card>
  <Card className="mb-4 h-[120px] border-none text-left">
    <div className="flex">
      <Card.Img variant="left" src={blog3} className="rounded-l-lg" style={{ width: '30%', height:'139px' }} />
      <Card.Body>
        <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
        <h className="text-base font-bold">Latest News Of June 2023 Cras porttitor scelerisque cras lorem ipsum web and aps arcu.</h>
        <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="mt-1 ml-2" />
                    </Card.Link>
      </Card.Body>
    </div>
  </Card>
  <Card className="mb-4 h-[120px] border-none text-left">
    <div className="flex">
      <Card.Img variant="left" src={blog4} className="rounded-l-lg" style={{ width: '30%', height:'139px' }} />
      <Card.Body>
        <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
        <h className="text-base font-bold">Latest News Of June 2023 Cras porttitor scelerisque cras lorem ipsum web and aps arcu.</h>
        <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
      </Card.Body>
    </div>
  </Card>
  <Card className="mb-4 h-[120px] border-none text-left">
    <div className="flex">
      <Card.Img variant="left" src={blog5} className="rounded-l-lg" style={{ width: '30%', height:'139px' }} />
      <Card.Body>
        <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
        <h className="text-base font-bold">Latest News Of June 2023 Cras porttitor scelerisque cras lorem ipsum web and aps arcu.</h>
        <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
      </Card.Body>
    </div>
  </Card>
  <Card className="mb-4 h-[120px] border-none text-left">
    <div className="flex">
      <Card.Img variant="left" src={blog6} className="rounded-l-lg" style={{ width: '30%', height:'139px' }} />
      <Card.Body>
        <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
        <h className="text-base font-bold">Latest News Of June 2023 Cras porttitor scelerisque cras lorem ipsum web and aps arcu.</h>
        <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
      </Card.Body>
    </div>
  </Card>
  {/* Repeat this structure for the remaining four cards */}
</div>
</div>
<div className=' bg-[#E6EEF0] mt-7'>
<div className="text-4xl font-sans font-bold pt-10"><span className='text-[#006261]'>Most</span> Recents</div>
<Container className='mt-4!important pb-10'>
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className={`custom-card-style1 mt-4`}> {/*${index >= 3 ? 'mt-4' : ''} */}
            <div className="text-center">
                  <img src={card.imageSrc} alt={`Card ${index + 1}`} className="img-fluid min-h-[190px]" />
                </div>
              <Card.Body>
            
                <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
                <div className="d-flex align-items-center">
                  <h5 className='font-sans font-semibold sm:text-2xl'>{card.title}</h5>
                </div>
                <Card.Text className='text-left mt-2 text-[#979797] font-sans'>{card.paragraph}</Card.Text>
              
                {/* <Button variant="primary">{card.buttonText}</Button> */}
                <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    <div className=' bg-[#E6EEF0] mt-7'>
<div className="text-4xl font-sans font-bold pt-10"><span className='text-[#006261]'>Most</span> Popular</div>
<Container className='mt-4!important pb-10'>
      <Row>
        {cardData1.map((card, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className={`custom-card-style1 mt-4`}> {/*${index >= 3 ? 'mt-4' : ''} */}
            <div className="text-center">
                  <img src={card.imageSrc} alt={`Card ${index + 1}`} className="img-fluid min-h-[190px]" />
                </div>
              <Card.Body>
            
                <Card.Text className="text-sm text-gray-600">        <FontAwesomeIcon icon={faClock} className="mr-2" />
        June 8,2023</Card.Text>
                <div className="d-flex align-items-center">
                  <h5 className='font-sans font-semibold sm:text-2xl'>{card.title}</h5>
                </div>
                <Card.Text className='text-left mt-2 text-[#979797] font-sans'>{card.paragraph}</Card.Text>
              
                {/* <Button variant="primary">{card.buttonText}</Button> */}
                <Card.Link href="#" className="text-[#FA6B02] flex no-underline">
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
                    </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <Button variant="outline-primary" className="custom-button align-self-start mt-4 mb-5"><div className='text-4xl p-2'><span>Browse Full</span>
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" /> </div>
        </Button>
    </div>



 
<ContactForm/>
        <Footer />
        </>
    );
  
};
export default Blogs;