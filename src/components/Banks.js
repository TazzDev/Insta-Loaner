import React from 'react';
import One from '../../public/images/icons/1.svg';
import Two from '../../public/images/icons/2.svg';
import Three from '../../public/images/icons/3.svg';
import Four from '../../public/images/icons/4.svg';
import Five from '../../public/images/icons/5.svg';
import Six from '../../public/images/icons/6.svg';
import Seven from '../../public/images/icons/7.svg';
import Eight from '../../public/images/icons/8.svg';
import Nine from '../../public/images/icons/9.svg';
import Ten from '../../public/images/icons/10.svg';
import Eleven from '../../public/images/icons/11.svg';
import Twelve from '../../public/images/icons/12.svg';
import Thirteen from '../../public/images/icons/13.svg';
import Fourteen from '../../public/images/icons/14.svg';
import Fifteen from '../../public/images/icons/15.png';
import Sixteen from '../../public/images/icons/16.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banks = () => {
    AOS.init();
    return (
        <React.Fragment>
            <MBanks />
        <div className="iconContainer">
            <img src={One} alt="text" className="bankIcon"/>
            <img src={Two} alt="text" className="bankIcon"/>
            <img src={Three} alt="text" className="bankIcon"/>
            <img src={Four} alt="text" className="bankIcon"/>
            <img src={Five} alt="text" className="bankIcon"/>
            <img src={Six} alt="text" className="bankIcon"/>
            <img src={Seven} alt="text" className="bankIcon"/>
            <img src={Eight} alt="text" className="bankIcon"/>
            <img src={Nine} alt="text" className="bankIcon"/>
            <img src={Ten} alt="text" className="bankIcon"/>
            <img src={Eleven} alt="text" className="bankIcon"/>
            <img src={Twelve} alt="text" className="bankIcon"/>
            <img src={Thirteen} alt="text" className="bankIcon"/>
            <img src={Fourteen} alt="text" className="bankIcon"/>
            <img src={Fifteen} alt="text" className="bankIcon"/>
        </div>
        </React.Fragment>
    )
}

const MBanks = () => {
    return (
        <div id="mBankContainer">
        <div className="mIconContainer" data-aos="fade-left" ata-aos-duration="1000">
            <img src={One} alt="text" className="mBankIcon"/>
            <img src={Two} alt="text" className="mBankIcon"/>
            <img src={Three} alt="text" className="mBankIcon"/>
            <img src={Four} alt="text" className="mBankIcon"/>
        </div>
        <div className="mIconContainer" data-aos="fade-right" ata-aos-duration="1500">
            <img src={Five} alt="text" className="mBankIcon"/>
            <img src={Six} alt="text" className="mBankIcon"/>
            <img src={Seven} alt="text" className="mBankIcon"/>
            <img src={Eight} alt="text" className="mBankIcon"/>
        </div>
        <div className="mIconContainer" data-aos="fade-left" ata-aos-duration="2000">
            <img src={Nine} alt="text" className="mBankIcon"/>
            <img src={Ten} alt="text" className="mBankIcon"/>
            <img src={Eleven} alt="text" className="mBankIcon"/>
            <img src={Twelve} alt="text" className="mBankIcon"/>
        </div>
        <div className="mIconContainer" data-aos="fade-right" ata-aos-duration="3000">
            <img src={Thirteen} alt="text" className="mBankIcon"/>
            <img src={Fourteen} alt="text" className="mBankIcon"/>
            <img src={Fifteen} alt="text" className="mBankIcon"/>
            <img src={Sixteen} alt="text" className="mBankIcon"/>
        </div>
        </div>
    )
}



export default Banks;