import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <MFooter />
        <div id="footer">
            <div id="footerIcons">

            </div>
            <div id="footerEnd">
                <h5>&copy;2020&nbsp;Created&nbsp;by&nbsp;Thomson&nbsp;Martin</h5>
                <h5>Disclaimer
                Privacy Policy</h5>
            </div>
        </div>
        </React.Fragment>
    )
}

const MFooter = () => (
    <div id="mFooter">
        <div id="credits">
            <h5>&copy;2020&nbsp;Created&nbsp;by&nbsp;Thomson&nbsp;Martin</h5>
            <h5>Disclaimer
                Privacy Policy</h5>
        </div>
    </div>
)


export default Footer;