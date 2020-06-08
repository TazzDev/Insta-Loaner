import React from 'react';
import Home from '../../public/images/Home.png';
import Property from '../../public/images/Property.png';
import Personal from '../../public/images/Personal.png';

const Offers = ()=> {
    return (
        <React.Fragment>
            <MOffers />
            <div id="offer">
        <h3 id="offerTitle">Latest Offers for the Month</h3>
        <hr style={{width: "12rem"}}/>
        <div id="offerContainer">
            <div className="offerCard">
                <img src={Home} alt="logo" className="offerLogo"/>
                <h4 style={{color:"#ffa40b"}}>Home Loans</h4>
                <p style={{color:"#ffa40b"}}>Starting from 8.25%</p>
            </div>
            <div className="offerCard">
                <img src={Property} alt="logo" className="offerLogo"/>
                <h4 style={{color:"#8edba7"}}>Loan against <br/>property</h4>
                <p style={{color:"#8edba7"}}>Starting from 9.00%</p>
            </div>
            <div className="offerCard">
                <img src={Personal} alt="logo" className="offerLogo"/>
                <h4 style={{color:"#809c53"}}>Personal Loans</h4>
                <p style={{color:"#809c53"}}>Starting from 10.75%</p>
            </div>
        </div>
        </div>
        </React.Fragment>
    )
}

const MOffers = () => (
        <div id="mOffer">
        <h3 id="mOfferTitle">Latest Offers for the Month</h3>
        <hr style={{width: "12rem"}}/>
        <div id="mOfferContainer">
            <div className="mOfferCard">
                <img src={Home} alt="logo" className="mOfferLogo"/>
                <h4 style={{color:"#ffa40b"}}>Home Loans</h4>
                <p style={{color:"#ffa40b"}}>Starting from 8.25%</p>
            </div>
            <div className="mOfferCard">
                <img src={Property} alt="logo" className="mOfferLogo"/>
                <h4 style={{color:"#8edba7"}}>Loan against <br/>property</h4>
                <p style={{color:"#8edba7"}}>Starting from 9.00%</p>
            </div>
            <div className="mOfferCard">
                <img src={Personal} alt="logo" className="mOfferLogo"/>
                <h4 style={{color:"#809c53"}}>Personal Loans</h4>
                <p style={{color:"#809c53"}}>Starting from 10.75%</p>
            </div>
        </div>
        </div>

)

export default Offers;