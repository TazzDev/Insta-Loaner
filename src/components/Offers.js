import React from 'react';

const Offers = ()=> {
    return (
        <React.Fragment>
        <h3 id="offerTitle">Latest Offers for the Month</h3>
        <hr style={{width: "12rem"}}/>
        <div id="offerContainer">
            <div className="offerCard">
                <h4>Home Loans</h4>
            </div>
            <div className="offerCard">
                <h4>Home Loans</h4>
            </div>
            <div className="offerCard">
                <h4>Home Loans</h4>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Offers;