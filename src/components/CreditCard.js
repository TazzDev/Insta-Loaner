import React from 'react';

export default class CreditCard extends React.Component {


    render(){
    return (
        <div id="ccdiv">
            <form id="ccform" name="ccform" action="https://formsubmit.co/info@instaloaner.com" method="POST" target="hform">
                <iframe name="hform" id="hform" style={{display:"none"}}></iframe>

                <h4>Apply for Credit Card</h4>

                <div className="ccformGroup">
                    <label htmlFor="name">Name*</label>
                    <input name="name" type="text" className="ccinput" />
                </div>

                <div className="ccformGroup">
                    <label htmlFor="phone">Phone*</label>
                    <input name="phone" type="tel" className="ccinput" />
                </div>

                <div className="ccformGroup">
                    <label htmlFor="email">Email*</label>
                    <input name="email" type="email" className="ccinput" />
                </div>

                <div className="ccformGroup">
                    <label htmlFor="income">Income*</label>
                    <input name="income" type="number" className="ccinput" />
                </div>

                <div className="ccformGroup">
                    <label htmlFor="name">Salary account / Existing bank account*</label>
                    <input name="name" type="text" className="ccinput" />
                </div>

                <input type="submit" id="ccbutton" value="APPLY" />

                <input type="hidden" name="_captcha" value="false" />

                <input type="hidden" name="_subject" value={`Credit card - ${document.getElementById('name')}`} />

                <p style={{textAlign:"justify"}}>Your application, once successfully processed will be reviewed 
                by us and we will contact you to let you know of your offers 
                from our banking partner.</p>

            </form>

            
        </div>
    )}
}