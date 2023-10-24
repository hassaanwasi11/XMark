import React from "react";
import NavBar from "./NavBar";
import heading from "./images/Heading.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import card1SVG from "./images/icon1.png";
import card2SVG from "./images/icon2.png";
import card3SVG from "./images/icon3.png";
import card4SVG from "./images/icon4.png";
import service1 from "./images/Service1.png";
import service2 from "./images/Service2.png";
import service3 from "./images/Service3.png";
import service4 from "./images/Service4.png";
import service5 from "./images/Service5.png";
import service6 from "./images/Service6.png";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import  { useState } from "react";
import WhatsApp from "./whatsapp";
function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      title: "Amazon Pay per click (PPC) management",
      paragraph:
        "Our Amazon Pay Per Click (PPC) Management service is designed to optimize your advertising campaigns on the Amazon platform. We'll carefully oversee and adjust your PPC ads to ensure they are cost-effective and generate the best results. By entrusting us with your Amazon PPC management, you can boost your product visibility, drive sales, and maximize your ROI on the platform, allowing you to focus on your core business while we handle the intricacies of Amazon advertising.",
      buttonText: "Learn More 1",
      imageSrc: service1, // Main card image for Card 1
      svgImage: card1SVG,
      price: "9.99", // SVG image for Card 1
    },
    {
      title: "Conversion rate optimization",
      paragraph:
        "Conversion Rate Optimization, or CRO, is the process of improving your website or digital assets to encourage more visitors to take desired actions. These actions could include making a purchase, signing up for a newsletter, or filling out a contact form. By optimizing your website for better conversion rates, you'll turn more of your visitors into customers or leads, ultimately increasing the effectiveness of your online presence and achieving your business goals.",
      buttonText: "Learn More 2",
      imageSrc: service2, // Main card image for Card 2
      svgImage: card2SVG,
      price: "9.99", // SVG image for Card 2
    },
    {
      title: "Landing Page optimization",
      paragraph:
        "Landing Page Optimization is the art of refining and perfecting the webpage where your visitors first arrive. By fine-tuning the content, design, and user experience of your landing pages, you can increase the chances of visitors taking the desired action, whether it's making a purchase, filling out a form, or any other goal you have in mind. This results in more successful conversions and a more effective online presence for your business.",
      buttonText: "Learn More 3",
      imageSrc: service3, // Main card image for Card 3
      svgImage: card3SVG,
      price: "9.99", // SVG image for Card 3
    },
    {
      title: "Full Account Management",
      paragraph:
        "Our Full Account Management service offers a complete and hands-on solution to handle all aspects of your online account, whether it's related to e-commerce, marketing, or any other digital operations. We take care of the day-to-day management, strategic planning, and optimization, allowing you to concentrate on the bigger picture of growing your business. With our expertise, you can rest assured that your accounts are in capable hands, ensuring efficiency and success in your online endeavors.",
      buttonText: "Learn More 3",
      imageSrc: service4, // Main card image for Card 3
      svgImage: card4SVG,
      price: "9.99", // SVG image for Card 3
    },
    {
      title: "Product Launch",
      paragraph: "Our Product Launch service is all about strategically introducing your products to the market. We plan and execute the launch process to ensure maximum visibility and impact. This involves everything from market research to promotional strategies, so you can successfully introduce new products and capture your target audience's attention. With our expertise, you'll make a memorable and successful entrance into the market.",
      buttonText: "Learn More 3",
      imageSrc: service5, // Main card image for Card 3
      svgImage: card4SVG, // SVG image for Card 3
      price: "9.99",
    },
    {
      title: "Off Amazon Advertisement",
      paragraph:
        "Our Product Launch service is all about strategically introducing your products to the market. We plan and execute the launch process to ensure maximum visibility and impact. This involves everything from market research to promotional strategies, so you can successfully introduce new products and capture your target audience's attention. With our expertise, you'll make a memorable and successful entrance into the market.",
      buttonText: "Learn More 3",
      imageSrc: service6, // Main card image for Card 3
      svgImage: card4SVG, // SVG image for Card 3
      price: "9.99", // SVG image for Card 3
    },

    // Add more card data objects as needed
  ];

  return (
    <>
      <NavBar />
      <hr />
      <div class="relative">
        <img src={heading} alt="Your Image" class="w-full" />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 class="text-white text-4xl sm:text-6xl font-bold">
            <span>Taking </span>
            <span className="text-[#4cbfc7]">Your Business </span>
            <br />
            <span>To Another </span>
            <span className="text-[#4cbfc7]"> Level </span>
          </h1>
        </div>
      </div>
      <div className="container sm:mt-[-50px] mt-4!important ">
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card
                className={`custom-card-style bg-[#E6EEF0] mt-4 p-3 text-white`}
                style={{
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                  transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              <Card.Body
                className="card-body"
                style={{
                  transition: 'transform 0.3s ease',
                }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={card.svgImage}
                    alt={`Card ${index + 1} SVG`}
                    className="mr-2"
                  />
                  <h5 className="font-sans font-semibold sm:text-2xl text-start">
                    {card.title}
                  </h5>
                </div>
                <Card.Text className="text-left mt-2 text-[#979797] font-sans">
                  {card.paragraph}
                </Card.Text>
                <div className="text-center">
                  <img
                    src={card.imageSrc}
                    alt={`Card ${index + 1}`}
                    className="img-fluid min-h-[190px]"
                  />
                </div>
                <p className="mt-3 text-[#979797] text-left">
                  Starting From Just:{" "}
                  <span className="text-[#006261]">${card.price}</span>
                </p>
                <Button
                  variant="outline-primary"
                  className="custom-button align-self-start mt-4"
                >
                  <span className="text-2xl">Get Service Now</span>
                  {/* add your FontAwesomeIcon here */}
                </Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </Row>
      </div>
      <ContactForm />
      <Footer />
      <WhatsApp/>
    </>
  );
}

export default Services;
