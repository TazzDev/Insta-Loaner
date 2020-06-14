import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <React.Fragment>
            <MFooter />
        <div id="footer">

            <div id="footerIcons">

            </div>
            <div id="footerEnd">
                <h5>&copy;2020&nbsp;Created&nbsp;by&nbsp;Insta&nbsp;Loaner</h5>
                <h5>Disclaimer
                <NavLink to="/privacy-policy" activeClassName="is-active" className="privbutton">Privacy Policy</NavLink></h5>
            </div>
        </div>
        </React.Fragment>
    )
}

const MFooter = () => (

    <div id="mFooter">
        <div id="credits">
            <h5>&copy;2020&nbsp;Created&nbsp;by&nbsp;Insta&nbsp;Loaner</h5>
            <h5>Disclaimer
                <NavLink to="/privacy-policy" activeClassName="is-active" className="privbutton">Privacy Policy</NavLink></h5>
        </div>
    </div>

)


export default Footer;