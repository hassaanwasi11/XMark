import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SidebarIcon from "./images/sidebar.png";
import logo from './images/logo1.png';

const NavBar = () => {
  const circleStyle = {
    width: "29.98px", // Adjust the size of the circle as needed
    height: "30px", // Adjust the size of the circle as needed
    borderRadius: "50%", // Makes it a circle
    backgroundColor: "#F6F6F6", // Set the background color
    marginRight: "5px", // Add spacing between the circle and text
  };
  return (
    <nav  style={{ background: 'linear-gradient(to right, #121212 50%, #A5E9E1)'}}>
      <div className="flex items-center justify-between ml-8 mr-8">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="/">
              
            <div className="flex text-center">
            {/* <img src={logo} width={'10%'} /> */}
              <h1 className='text-4xl  ml-2' style={{fontFamily:'cursive',color:'white'}}>X-Mark</h1>
            </div>

                {/* <div className="mr-2 mb-2" style={circleStyle}></div>
                <h1 className="text-4xl text-[#F6F6F6]">LOGO</h1> */}
          
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
    background: 'none', // Remove background color
    border: 'none',     // Remove border
    padding: 0,  
    marginLeft:'100px'       // Remove padding
  }} >
            <img src={SidebarIcon} alt="Sidebar Icon" width="30" height="30" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto text-xl sm:space-x-24 sm:ml-12 text-custom-nav-color ">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Services" className="whitespace-nowrap">Our Services</Nav.Link>
                {/* <NavDropdown title="Our Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"  >Action</NavDropdown.Item>
                  <NavDropdown.Item href="/Services">
                    Our Services{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="/AboutUs" className="whitespace-nowrap">About Us</Nav.Link>
                <Nav.Link href="/contactus"className="whitespace-nowrap">Contact Us</Nav.Link>
                <Nav.Link href="/Blogs">Blogs</Nav.Link>
                <Nav.Link href="#link">FAQs</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="hidden sm:block">
          <Button variant="outline-primary" className="custom-button ">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <span className="text-2xl">Call Now</span>
          </Button>{" "}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;