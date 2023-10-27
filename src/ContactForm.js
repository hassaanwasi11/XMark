import React from "react";
import contact1 from './images/contact11.png';
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,} from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
    return(
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 font-sans">
            {/* Content on the left */}
            <h2 className='font-bold text-start'>Available <span className="text-[#E57C23]"> 24/7 </span> to Serve  <span className="text-[#E57C23]">YOU </span></h2>
            <p className="text-[#979797]">
            We are available always to help our precious clients to contact us just fill the form.
            </p>
            <img src={contact1} alt="Contact" className="img-fluid" />
          </div>
          <div className="col-md-6 text-white font-sans">
            {/* Contact form on the right */}
            <div className="box  rounded p-4" style={{ background: 'linear-gradient(to right, #041562 10%, #11468F)'}}>
              <h2 className="mb-4 font-bold">Contact Form</h2>
              <form>
                <div className="mb-3">
                  <h4 htmlFor="name" className="form-label text-start">Enter your name</h4>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name here"
                  />
                </div>
                <div className="mb-3">
                <h4 htmlFor="email" className="form-label text-start">Enter your email</h4>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enteryouremail@here"
                  />
                </div>
                <div className="mb-3">
                <h4 htmlFor="message" className="form-label text-start">Enter your message here.</h4>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter your message here"
                  ></textarea>
                </div>
                <div className="text-start">
                <Button variant="outline-primary" className="custom-button align-self-start mt-4">            
                <span className="text-2xl">Submit</span>
                <FontAwesomeIcon icon={faCheck} className="ml-2" />
              </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        );
    }
    
    export default ContactForm;