import React from 'react';
import ContactUs from './ContactUs'

const PrivacyPolicy = () => {
    return(
        <React.Fragment>
        <div id="privacy">
            <div className="background"></div>
            <h4>Privacy Policy</h4>
            <p>
            By using the website and/or registering yourself at you authorize
             us & our associate partners to contact you via email or phone call 
             and offer you their services for the product you have opted for, 
             imparting product knowledge, offer promotional offers running on website
              & offers offered by the associated third parties. And Irrespective of 
              the fact if also you have registered yourself under DND or DNC or NCPR 
              service, you still authorize us to give you a call from the & associate 
              partners for the above mentioned purposes till 60 days of your registration with us.
            </p><br/>
            <p>
            Also during registration, you may be requested to register your mobile phone and email 
            id, pager, or other device to receive text messages, notifications, and other services 
            to your wireless device. By registration you authorize us to send sms/email alerts to 
            you for your login details and any other service requirements or some advertising 
            messages/emails from us.
            </p>
        </div>
        <ContactUs/>
        </React.Fragment>
    )
}

export default PrivacyPolicy;