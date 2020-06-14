import React from 'react';
import Phone from '../../public/images/contactus/phone.png';
import Email from '../../public/images/contactus/email.png';
import Address from '../../public/images/contactus/address.png';



const ContactUs = () => {
    return (
        <div id="contactus">
            <div className="contactbox">
                <img src={Phone} alt="phone" className="cLogo"/>
                <p>+91-7591992290</p>
            </div>

            <div className="contactbox">
            <img src={Email} alt="email" className="cLogo"/>
            <p>info@instaloaner.com</p>
            </div>

            <div className="contactbox">
            <img src={Address} alt="address" className="cLogo"/>
            <p>Insta Loaner, kurumpelil HSE, vadakevilla, sancharimukk, Kollam PO, Kerala, India. Pincode - 691010 </p>
            </div>
        </div>
    )
}

export default ContactUs;