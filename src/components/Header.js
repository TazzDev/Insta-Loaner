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
                <span className="navlinks"  id="loanbtn">
              LOANS
                </span>

            <NavLink to="/financial-services" activeClassName="is-active" className="navlinks">FINANCIAL SERVICES</NavLink>
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
        <NavLink to="/about" activeClassName="is-active" className="navlinks">ABOUT US</NavLink>
        </Menu>
        <hr id="mHeadLine"/>
    </div>
)

export default Header;