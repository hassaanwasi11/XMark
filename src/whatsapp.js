import React, { useState } from "react";
import whatsapp from './images/whatsapp.png';

function WhatsApp() {
    const [isHovered, setIsHovered] = useState(false);
    const openWhatsApp = () => {
        // Replace '1234567890' with your phone number
        window.open("https://wa.me/+923015812498", "_blank");
    };

    return(
        <div
            onClick={openWhatsApp}
            className={`fixed bottom-4 right-4 p-3 md:p-4 bg-green-500 text-white rounded-full cursor-pointer flex items-center ${isHovered ? 'scale-110' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ transition: 'transform 0.3s ease' }}
        >
            <img src={whatsapp} alt="WhatsApp Icon" className="h-5 md:h-6 w-5 md:w-6 mr-2" />
            <span className="text-xs md:text-sm">WhatsApp us Now</span>
        </div>
    );
}

export default WhatsApp;
