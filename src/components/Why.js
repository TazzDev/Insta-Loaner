import React from 'react';
import Ben1 from '../../public/images/ben1.png';
import Ben2 from '../../public/images/ben2.png';
import Ben3 from '../../public/images/ben3.png';
import Ben4 from '../../public/images/ben4.png';


const Why = () => {
    return (
        <div id="whyContainer">
            <div id="content">
                <h1>Why Choose Us?</h1><hr/>
                <h4>Enjoy Multiple Benefits When You Take A Loan</h4>
                <div id="benefits">
                    <span className="benefit">
                    <img src={Ben1} className="benpic"></img>
                    <h3>2 Step Loan Process</h3>
                    <p>Register – Share your basic details like – 
                        Name mobile and location Offers – Our team will contact you directly. 
                        Choose the right option as per your need</p>
                    </span>

                    <span className="benefit">
                    <img src={Ben2} className="benpic"></img>
                    <h3>Best Rate of Interest</h3>
                    <p>Banks provides the best option available basis your profile
Compare from various offering on our platform</p>
                    </span>

                    <span className="benefit">
                    <img src={Ben3} className="benpic"></img>
                    <h3>Best Rate of Interest</h3>
                    <p>Banks provides the best option available basis your profile
Compare from various offering on our platform</p>
                    </span>

                    <span className="benefit">
                    <img src={Ben4} className="benpic"></img>
                    <h3>Best Rate of Interest</h3>
                    <p>Banks provides the best option available basis your profile
Compare from various offering on our platform</p>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Why;