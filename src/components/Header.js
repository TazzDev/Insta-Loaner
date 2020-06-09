import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../public/images/il.png';
import {slide as Menu} from 'react-burger-menu';


const Header = () => (
    <React.Fragment>
    <MobileHeader/>
    <header>
        
        <NavLink to="/" activeClassName="is-active" 
            activeStyle={{
                textDecoration: "none",
                marginLeft: "5%"
                }}>

            <img src={Logo} className="logo"></img>
            
            </NavLink>
    
        <nav>
            <NavLink to="/about" activeClassName="is-active" className="navlinks">ABOUT US</NavLink>
                <span className="navlinks" id="loanbtn">
                  LOANS

                  <div id="loandropmenu">
                    <NavLink to="/personal-loan" activeClassName="is-active" className="dropitem">Personal Loan</NavLink>
                    <NavLink to="/home-loan" activeClassName="is-active" className="dropitem">Home Loan</NavLink>
                    <NavLink to="/business-loan" activeClassName="is-active" className="dropitem">Business Loan</NavLink>
                    <NavLink to="/loan-against-property" activeClassName="is-active" className="dropitem">Loan against Property</NavLink>
                  </div>

                </span>

            <span className="navlinks" id="finbtn">
              FINANCIAL SERVICES
              
              <div id="findropmenu">
                    <NavLink to="/emi-calculator" activeClassName="is-active" className="dropitem">Calculate EMI</NavLink>
                    <NavLink to="/credit-score" activeClassName="is-active" className="dropitem">Credit Score</NavLink>
                  </div>
              </span>
            <NavLink to="/join-as-partner" activeClassName="is-active" className="navlinks">JOIN AS PARTNER</NavLink>
        </nav>
    </header>
    </React.Fragment>
);


/**
 * Styles for the burger 
 * menu are given below,
 * do not tamper
 */

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

const MobileHeader = () => (
    <div id="mHeader">
        
        <NavLink to="/" activeClassName="is-active"><img src={Logo} className="mLogo" /></NavLink>
        <Menu styles={styles} right>
          <div style={{display:"flex",flexDirection:"column",outline:"none"}}>
            <NavLink to="/about" activeClassName="is-active" className="mNavlinks">ABOUT US</NavLink>
            <NavLink to="/join-as-partner" activeClassName="is-active" className="mNavlinks">JOIN AS PARTNER</NavLink>
            <NavLink to="/personal-loan" activeClassName="is-active" className="mNavlinks">PERSONAL LOAN</NavLink>
            <NavLink to="/home-loan" activeClassName="is-active" className="mNavlinks">HOME LOAN</NavLink>
            <NavLink to="/business-loan" activeClassName="is-active" className="mNavlinks">BUSINESS LOAN</NavLink>
            <NavLink to="/loan-against-property" activeClassName="is-active" className="mNavlinks">PROPERTY LOAN</NavLink>
            <hr style={{width:"100%", marginBottom:"15%"}}/>
            <NavLink to="/credit-score" activeClassName="is-active" className="mNavlinks">CREDIT SCORE</NavLink>
            <NavLink to="/emi-calculator" activeClassName="is-active" className="mNavlinks">CALCULATE EMI</NavLink>
          </div>
        </Menu>
        <hr id="mHeadLine"/>
    </div>
)

export default Header;