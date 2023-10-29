// Home.js
import React, { useState, useEffect } from "react";
import img1 from "./images/home1.png";
import img2 from "./images/img2.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBookOpen,
  faCalculator,
  faHandshake,
  faPhone,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import img3 from "./images/Info Frame.png";
import Slide1 from "./images/slide 1.png";
import Slide2 from "./images/slide2.png";
import Slide3 from "./images/slide3.png";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import icon1 from "./images/icon11.svg";
import icon2 from "./images/icon22.svg";
import icon3 from "./images/icon33.svg";
import icon4 from "./images/icon44.svg";
import calculator from "./images/Calculator.png";
import dashboard from "./images/Dashborad.png";
import casestudies from "./images/casestudies.png";
import custom from "./images/package.png";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import WhatsApp from "./whatsapp";
import { useSpring, animated } from "react-spring";
import home2 from "./images/home2.png";
import home3 from "./images/home3.png";
import home4 from "./images/home4.png";

const AnimatedNumber = ({ finalNumber }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentNumber < finalNumber) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 10); // Adjust the interval time based on the animation speed

    return () => clearInterval(interval);
  }, [currentNumber, finalNumber]);

  return <>{currentNumber}</>;
};

const Home = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Define the spring animation for the first image
  const firstImageAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Define the spring animation for the second image
  const secondImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    config: { duration: 1000 },
  });

  return (
    <>
      <NavBar />
      <hr />

      <div className="container-fluid flex sm:flex-row flex-wrap-reverse flex-col mt-5 ">
        <div className="w-full md:w-1/2 px-4">
          <div className="flex items-center mb-4">
            <animated.img
              style={firstImageAnimation}
              src={img2}
              alt="First Animated Image"
              className="mr-4"
            />
            <animated.h2
              style={headingAnimation}
              className="text-xl sm:text-3xl font-semibold font-sans"
            >
              One-stop marketing agency dedicated to serving Amazon and
              e-commerce brands
            </animated.h2>
          </div>
          <p className="text-2xl font-bold sm:text-6xl mb-4 text-start text-[#E57C23]">
            <span>X-Mark: </span>{" "}
            <span className="text-[#041562]">Mark your </span>{" "}
            <span>Success </span>
            <span className=" text-[#041562]">With us</span>
          </p>
          <p className="sm:text-lg text-base text-start font-sans mb-4 ">
            Your dedicated in-house advertising team for Amazon, focused on
            effectively expanding advertising campaigns and developing
            successful strategies without relying on AI – just consistent,
            diligent work powered by strong systems and a sharp team.{" "}
          </p>
          <Button
            variant="outline-primary"
            className="custom-button mr-auto sm:mr-36 justify-center!important items-center!important"
          >
            <FontAwesomeIcon icon={faHandshake} className="mr-2" />
            <span className="text-2xl">Schedule Meeting</span>
          </Button>{" "}
        </div>
        <div className="w-full md:w-1/2 px-4 float-md-end">
          <animated.img
            style={secondImageAnimation}
            src={img1} // Replace with your image URL
            alt=" Description"
            className="w-auto h-auto"
          />
        </div>
      </div>
      <div className="row-container flex flex-col sm:flex-row items-center sm:justify-evenly mt-7 justify-center">
        <div className="item-container p-2">
          <img src={home2} alt="Your Image" className="image" />
          <div className="number-container">
            <h1 className="text-[#11468F] font-bold text-5xl mt-2">
              <AnimatedNumber finalNumber={200} />+
            </h1>
            <p>Happy Customers</p>
          </div>
        </div>

        <div className="item-container p-2">
          <img src={home3} alt="Your Image" className="image" />
          <div className="number-container">
            <h1 className="text-[#E57C23] font-bold text-5xl mt-2">
              <AnimatedNumber finalNumber={100} />+
            </h1>
            <p>Team Members</p>
          </div>
        </div>

        <div className="item-container p-2">
          <img src={home4} alt="Your Image" className="image" />
          <div className="number-container">
            <h1 className="text-[#11468F] font-bold text-5xl mt-2">
              <AnimatedNumber finalNumber={7} />+
            </h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>

      <Carousel indicators={false} className="hidden sm:block">
        <Carousel.Item>
          <img className="d-block w-100" src={Slide1} alt="First slide" />
          <Carousel.Caption className="text-center align-middle items-center">
            <h3 className="font-bold text-2xl sm:text-8xl">
              First slide label
            </h3>
            <p className="sm:text-xl text-base">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <div>
              <Button
                variant="outline-primary"
                className="custom-button1 m-auto"
              >
                <span className="sm:text-4xl text-base ">Get Started</span>
              </Button>{" "}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="font-bold text-8xl">Second slide label</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button variant="outline-primary" className="custom-button1 m-auto">
              <span className="text-4xl">Get Started</span>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Slide3} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="font-bold text-8xl">Second slide label</h3>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button variant="outline-primary" className="custom-button1 m-auto">
              <span className="text-4xl">Get Started</span>
            </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel.Items for additional slides */}
      </Carousel>
      <div className="pb-5 mb-5 mt-5 " style={{ background: "#11468F" }}>
        {" "}
        <div className="row mt-3 sm:mt-10">
          {/* Big box on the left */}
          <div className="col-lg-6 mt-2 sm:mt-5">
            <div className="px-4 mt-10">
              <p className="text-2xl sm:text-5xl mb-4">
                <span className="font-semibold text-[#E57C23]">
                  Our Services,{" "}
                </span>{" "}
                <br />
                <span className="font-semibold text-[#ffffff]">
                  Serving thousands of{" "}
                </span>{" "}
                <br />
                <span className="font-semibold text-[#E57C23]">Happy </span>
                <span className="font-semibold text-[#ffff]">Customers. </span>
              </p>
              <p className="text-base sm:text-lg mb-4 text-[#BEBEBE]">
                Lorem ipsum dolor sit amet consectetur. Adipiscing in non
                ullamcorper at quam amet tortor in quam. Sollicitudin elementum
                dui enim erat pulvinar consectetur volutpat. Diam lectus metus
                in integer tempor. Facilisis cras aliquet nisi sed vulputate
                proin consectetur dolor iaculis.{" "}
              </p>
              <Button
                variant="outline-primary"
                className="custom-button mr-auto sm:mr-36 sm:mt-12"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <span className="text-2xl">Call Now</span>
              </Button>{" "}
            </div>
          </div>
          {/* Four small boxes on the right */}
          <div className="col-lg-6">
            <div className="row sm:mt-5 mr-0" style={{ marginRight: "0px" }}>
              {/* First pair of small boxes */}
              <div className="col-md-6">
                <Card
                  style={{ width: "18rem" }}
                  className="mt-3 ml-6 sm:ml-0 sm:mt-5"
                >
                  <Card.Body>
                    <div className="flex">
                      <img src={icon1} alt="Description" className="mr-4" />
                      <Card.Title
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bolder",
                          margin: "5px",
                          marginTop: "10px",
                        }}
                      >
                        SEO on Amazon
                      </Card.Title>
                    </div>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className="text-[#979797] font-sans font-bold mt-2">
                    Our Amazon SEO strategy is highly effective and is expected to deliver significant improvements in search rankings within a 90-day timeframe.
                    </Card.Text>

                    <Card.Link
                      href="#"
                      className="text-[#E57C23] flex no-underline"
                    >
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 mt-1"
                      />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card style={{ width: "18rem" }} className="ml-16 sm:ml-0 mt-3">
                  <Card.Body>
                    <div className="flex">
                      <img src={icon2} alt="Description" className="mr-4" />
                      <Card.Title
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bolder",
                          margin: "5px",
                          marginTop: "10px",
                        }}
                      >
                        PPC 
                      </Card.Title>
                    </div>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className="text-[#979797] font-sans font-bold mt-2">
                    Achieving increased revenue, reduced Advertising Cost of Sales (ACOS), and transparent advertising management.
                    </Card.Text>

                    <Card.Link
                      href="#"
                      className="text-[#E57C23] flex no-underline"
                    >
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 mt-1"
                      />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              {/* Second pair of small boxes */}
              <div className="col-md-6">
                <Card
                  style={{ width: "18rem" }}
                  className="ml-6 sm:ml-0 mt-3 sm:mt-5"
                >
                  <Card.Body>
                    <div className="flex">
                      <img src={icon3} alt="Description" className="mr-4" />
                      <Card.Title
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bolder",
                          margin: "5px",
                          marginTop: "10px",
                        }}
                        
                      >
                       	Account Management
                      </Card.Title>
                    </div>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className="text-[#979797] font-sans font-bold mt-2">
                    We will handle the responsibility of managing your platform, relieving you of the associated stress.
                    </Card.Text>

                    <Card.Link
                      href="#"
                      className="text-[#E57C23] flex no-underline"
                    >
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 mt-1"
                      />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-md-6">
                <Card
                  style={{ width: "18rem" }}
                  className="ml-16 sm:ml-0  mt-3"
                >
                  <Card.Body>
                    <div className="flex">
                      <img src={icon4} alt="Description" className="mr-4" />
                      <Card.Title
                        style={{
                          fontFamily: "sans-serif",
                          fontWeight: "bolder",
                          margin: "5px",
                          marginTop: "10px",
                        }}
                      >
                       Brand Establishment
                      </Card.Title>
                    </div>
                    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                    <Card.Text className="text-[#979797] font-sans font-bold mt-2">
                    Let’s join hands to build a brand from scratch and to take it to the next level.
                    </Card.Text>

                    <Card.Link
                      href="#"
                      className="text-[#E57C23] flex no-underline"
                    >
                      <span>Read more </span>{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 mt-1"
                      />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div
            className={`col-md-6 mb-4  ${isHovered1 ? "scale-105" : ""}`}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            style={{ transition: "transform 0.3s ease" }}
          >
            <div className="bg-[#11468F] rounded-2xl  h-[600px]">
              <div className="box p-4 d-flex flex-column align-items-start">
                <h2 className="font-sans font-bold text-white">
                  <span className="text-[#E57C23]">ROI</span> Calculator
                </h2>
                <p className="text-[#979797] font-sans text-lg text-start">
                  Return on investment (ROI) calculator that returns total ROI
                  rate and annualized ROI using either actual dates of
                  investment.
                </p>
              </div>

              <div className="flex justify-content-center align-items-center">
                <img src={calculator} alt="Box 1" className="img-fluid" />
              </div>
              <div className="box p-4 d-flex flex-column align-items-start">
                <Button
                  variant="outline-primary"
                  className="custom-button align-self-start"
                >
                  <FontAwesomeIcon icon={faCalculator} className="mr-2" />
                  <span className="text-2xl">Calculate Now</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`col-md-6 mb-4  ${isHovered2 ? "scale-105" : ""}`}
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            style={{ transition: "transform 0.3s ease" }}
          >
            <div className="bg-[#11468F] rounded-2xl h-[600px]">
              <div className="box p-4 d-flex flex-column align-items-start">
                <h2 className="font-sans font-bold text-white">
                  <span className="text-[#E57C23]">Dashboard </span> And Graphs
                </h2>
                <p className="text-[#979797] font-sans text-lg text-start">
                  Lorem ipsum dolor sit amet consecte tur .uam amet Adipiscing
                  in non ullamcorper at quam amet tortor
                </p>
              </div>

              <div className="flex justify-content-center align-items-center">
                <img
                  src={dashboard}
                  style={{ height: "313px" }}
                  alt="Box 1"
                  className="img-fluid"
                />
              </div>
              <div className="box p-4 d-flex flex-column align-items-start">
                <Button
                  variant="outline-primary"
                  className="custom-button align-self-start"
                >
                  <span className="text-2xl">See more</span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className={`col-md-6 mb-4  ${isHovered3 ? "scale-105" : ""}`}
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            style={{ transition: "transform 0.3s ease" }}
          >
            <div className="bg-[#11468F] rounded-2xl h-[600px]">
              <div className="box p-4 d-flex flex-column align-items-start">
                <h2 className="font-sans font-bold text-white">
                  <span className="text-[#E57C23]">Package</span> Customization
                </h2>
                <p className="text-[#979797] font-sans text-lg text-start">
                  Customize your own plans according to your goals and Business.
                </p>
              </div>

              <div className="flex justify-content-center align-items-center">
                <img
                  src={custom}
                  alt="Box 1"
                  style={{ height: "313px" }}
                  className="img-fluid"
                />
              </div>
              <div className="box p-4 d-flex flex-column align-items-start">
                <Button
                  variant="outline-primary"
                  className="custom-button align-self-start"
                >
                  <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                  <span className="text-2xl">Customize Now</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={`col-md-6 mb-4  ${isHovered4 ? "scale-105" : ""}`}
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            style={{ transition: "transform 0.3s ease" }}
          >
            <div className="bg-[#11468F] rounded-2xl h-[600px]">
              <div className="box p-4 d-flex flex-column align-items-start">
                <h2 className="font-sans font-bold text-white">
                  <span className="text-[#E57C23]">Case</span> Studies
                </h2>
                <p className="text-[#979797] font-sans text-lg text-start">
                  Case studies involve in-depth research into a given subject,in
                  order to understand its functionality and successes.
                </p>
              </div>

              <div className="flex justify-content-center align-items-center">
                <img
                  src={casestudies}
                  alt="Box 1"
                  style={{ height: "313px" }}
                  className="img-fluid"
                />
              </div>
              <div className="box p-4 d-flex flex-column align-items-start">
                <Button
                  variant="outline-primary"
                  className="custom-button align-self-start"
                >
                  <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                  <span className="text-2xl">See More</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" mt-2 pb-2"
        style={{
          background: "linear-gradient(to right, #041562 20%, #11468F)",
        }}
      >
        <h1 className="text-center font-sans p-4 font-semibold text-white">
          <span>Latest From </span>
          <span className="text-[#E57C23]">Our Blogs</span>
        </h1>
        <div className="sm:flex justify-center space-x-8">
          <Card
            className="m-3 sm:m-0 w-[21rem] sm:w-[25rem] p-3"
            style={{ border: "none", borderRadius: "10px" }}
          >
            <Card.Img className="mt-2" variant="top" src={blog1} />
            <Card.Body>
              {/* <Card.Text>
      <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                        <span className="text-2xl">See More</span>
        </Card.Text> */}
              <Card.Title className="text-start">
                Bigg News Of June 2023 Cras porttitor scelerisque cras arcu
              </Card.Title>
              <Card.Text className="text-start">
                Return on investment (ROI) calculator that returns total ROI
                rate and annualized ROI using either actual dates of investment
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#" className="text-[#E57C23] flex ">
                <span>Read more </span>{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3 sm:m-0 w-[21rem] sm:w-[25rem]"
            style={{ border: "none", borderRadius: "10px" }}
          >
            <Card.Img className="mt-2" variant="top" src={blog2} />
            <Card.Body>
              {/* <Card.Text>
      <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                        <span className="text-2xl">See More</span>
        </Card.Text> */}
              <Card.Title className="text-start">
                Bigg News Of June 2023 Cras porttitor scelerisque cras arcu
              </Card.Title>
              <Card.Text className="text-start">
                Return on investment (ROI) calculator that returns total ROI
                rate and annualized ROI using either actual dates of investment
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#" className="text-[#E57C23] flex ">
                <span>Read more </span>{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
              </Card.Link>
            </Card.Body>
          </Card>
          <Card
            className="p-3 m-3 sm:m-0 w-[21rem] sm:w-[25rem]"
            style={{ border: "none", borderRadius: "10px" }}
          >
            <Card.Img className="mt-2" variant="top" src={blog3} />
            <Card.Body>
              {/* <Card.Text>
      <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                        <span className="text-2xl">See More</span>
        </Card.Text> */}
              <Card.Title className="text-start">
                Bigg News Of June 2023 Cras porttitor scelerisque cras arcu
              </Card.Title>
              <Card.Text className="text-start">
                Return on investment (ROI) calculator that returns total ROI
                rate and annualized ROI using either actual dates of investment
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#" className="text-[#E57C23] flex ">
                <span>Read more </span>{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 mt-1" />
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Button
          variant="outline-primary"
          className="custom-button align-self-start mt-4"
        >
          <span className="text-2xl">See more</span>
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
      <ContactForm />
      <Footer />
      <WhatsApp />
    </>
  );
};

export default Home;
