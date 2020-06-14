import React from 'react';
import queryString from 'query-string';
import Slider from 'react-rangeslider';
import BankBox from './BankBox';

import YesBank from '../../public/images/bankIcons/personal/yesbank.png';

import 'react-rangeslider/lib/index.css'

export default class PLSubmit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amtValue: 10,
            trmValue: 10,
        }
    }

    handleAmtChange = value => {
        this.setState({
            amtValue: value
        })
      };

    handleTrmChange = value => {
        this.setState({
            trmValue: value
        })
      };

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values.amt) 
        console.log(values.loc) 
        console.log(values.name) 
        console.log(values.phn) 
        console.log(values.inc)
        console.log(values.emp)  
        console.log(values.tme) 
        document.getElementById("fullName").value = values.name;
        document.getElementById("phone").value = values.phn;
        document.getElementById("location").value = values.loc;
        document.getElementById("amount").value = values.amt;
        document.getElementById("employment").value = values.emp;
        document.getElementById("income").value = values.inc;
        document.getElementById("time").value = values.tme;
        document.getElementById("sub").value = `LAP Loan - ${values.name}`

        document.getElementById("hiddenForm").submit()
      }

    render() {
        const {amtValue, trmValue} = this.state;
    return (
        <div>
            <div id="bg" className="background"></div>
            {/* Code for hidden form submit start*/}


            <form id="hiddenForm" action="https://formsubmit.co/info@instaloaner.com" target="hForm" method="POST" style={{display:"none"}}>
                <iframe name="hForm" style={{display:"none"}}/>

                        <input type="text" name="fullName" id="fullName" />

                        <input type="tel" name="phone" id="phone" />

                        <input type="text" name="location" id="location"/>

                        <input type="number" name="amount" id="amount"/>

                        <input type="text" name="employment" id="employment"/>

                        <input type="number" name="income" id="income"/>

                        <input type="text" name="time" id="time"/>

                    <input type="submit" value="SUBMIT" id="plSubmit"/>

                    {/* The below code is for disabling captcha for submissions to FormSubmit API */}

                    <input type="hidden" name="_captcha" value="false" /> 

                    {/* The code below is for the email subject from FormSubmit API */}

                    <input type="hidden" name="_subject" id="sub" ></input>
                    
            </form>

            {/* Code for hidden form submit end*/}

            {/* Actual code for personal loan submit section*/}
            <div id="PLSbanner">

                Compare Property Loans

            </div>


            <div id="PLSdescription">

                <h4>LAP Loan - Compare Loan against Property Offers</h4>

                <p>Are you looking for a loan Against property (LAP Loan)? to 
                    fund your business expansion or to renovate your office/manufacturing 
                    unit/house or purchase of machinery & equipment’s or consolidation of your 
                    existing loans or balance transfer of your currently running mortgage loan.</p>

            </div>
            <h4 style={{color:"#286b4f",textAlign:"center",marginTop:"3%"}}>Loan Comparisons</h4>
            <div id="sliders">
                <div id="amtSlider">
                <Slider
                    min={10000}
                    max={500000}
                    step={10000}
                    value={amtValue}
                    onChange={this.handleAmtChange}/>
                <p style={{color:"white"}}>Amount: {amtValue}</p>
                </div>

                <div id="trmSlider">
                <Slider
                    min={1}
                    max={10}
                    value={trmValue}
                    onChange={this.handleTrmChange}/>
                <p style={{color:"white"}}>Term: {trmValue} years</p>
                </div>
            </div>

            <div id="bankOffers">

                <BankBox icon={YesBank} name="Yes Bank" roi="10.99" procFee={56} amount={amtValue} term={trmValue}/>


            </div>

        </div>
    )
    }
}

