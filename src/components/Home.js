import React from 'react';
import { NavLink } from 'react-router-dom';
import {Why} from './Why';
import Compare from './Compare';
import Offers from './Offers';
import Personal from '../../public/images/Personal.png';
import Business from '../../public/images/Business.png';
import HomeImg from '../../public/images/Home.png';
import Property from '../../public/images/Property.png';
import CreditScore from '../../public/images/CreditScore.png';
import CreditCard from '../../public/images/CreditCard.png';
import ContactUs from './ContactUs';

const Home = () => {
    return (
        <React.Fragment>
        <MobileHome />
        <div style={{margin: '0', padding: '0'}} id="home" >
        <div className="background"></div>
    {/*The background render*/}
        <div id="formSection">
            <div className="quote">
                <h1>MAXIMIZE YOUR<br/>
                CREDIT QUOTIENT!</h1>
                <p style={{color:"white",fontSize:"1.8rem",color:"rgba(255,255,255,0.5)",marginRight:"2rem"}}>COMPARE AND APPLY FOR THE BEST POSSIBLE OFFERS.</p>
            </div>

            <form id="homeForm" action="https://formsubmit.co/thomsonbingo@gmail.com" method="POST">
                    <legend>Get an instant quote now!</legend>
                    <div className="formControls">

                        <div className="formGroup">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" />
                        </div>

                    </div>
                    <input type="submit" value="Go!" className="button"/>
            </form>
        </div>

        <div id="linkSection">
            <NavLink to="/personal-loan" className="linkLogo">
                <img src={Personal}></img>
                <p>PERSONAL LOAN</p>
            </NavLink>

            <NavLink to="/business-loan" className="linkLogo">
                <img src={Business}></img>
                <p>BUSINESS LOAN</p>
            </NavLink>

            <NavLink to="/home-loan" className="linkLogo">
                <img src={HomeImg}></img>
                <p>HOME LOAN</p>
            </NavLink>

            <NavLink to="/loan-against-property" className="linkLogo">
                <img src={Property}></img>
                <p>PROPERTY LOAN</p>
            </NavLink>
        </div>
        <Why />
        <Compare />
        <Offers />
        <ContactUs/>
        </div>
        </React.Fragment>
    )
}

const MobileHome = () => (
    <div id="mHome">
        <div className="mQuote">
            <h1>MAXIMIZE YOUR CREDIT 
            <br/>QUOTIENT!</h1>
            <p>Compare & apply for personalized loans with leading lenders and choose with ease</p>
        </div>

        <NavLink id="mHomeButton" to="/personal-loan">Apply Now</NavLink>

        <div className="mLinkSection">
            <NavLink to="/personal-loan" className="mLinkLogo">
                <img src={Personal}></img>
                <p>Personal Loan</p>
            </NavLink>

            <NavLink to="/business-loan" className="mLinkLogo">
                <img src={Business}></img>
                <p>Business Loan</p>
            </NavLink>

            <NavLink to="/home-loan" className="mLinkLogo">
                <img src={HomeImg}></img>
                <p>Home Loan</p>
            </NavLink>
        </div>
        <div className="mLinkSection">

            <NavLink to="/loan-against-property" className="mLinkLogo">
                <img src={Property}></img>
                <p>Property Loan</p>
            </NavLink>

            <NavLink to="/credit-score" className="mLinkLogo">
                <img src={CreditScore}></img>
                <p>Credit Score</p>
            </NavLink>

            <NavLink to="/credit-card" className="mLinkLogo">
                <img src={CreditCard}></img>
                <p>Credit Card</p>
            </NavLink>
        </div>

        <Why />
        <Compare />
        <ContactUs/>

    </div>
)

export default Home;