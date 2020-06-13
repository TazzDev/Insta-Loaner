import React from 'react';
import {WhyPartial} from '../components/Why';
import Compare from '../components/Compare';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import C1 from '../../public/images/carousel/c1.jpg';


export default class DPersonalLoan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameErr: '',
            telErr: '',
            locErr: '',
            amtErr: '',
            incErr: '',
        }
    }

 handleChange = (e) => {
    e.preventDefault();
    
    const nameRegex = /^[a-zA-Z]+$/;
    const telRegex = /^\d{10}$/;
    const incRegex = /^\d+$/;

    let errors = this.state;

    const {name,value} = e.target;

    switch(name) {
        case 'fullName':
            errors.nameErr = nameRegex.test(value) ? '' : 'Please enter a valid name';
            break;
        case 'phone':
            errors.telErr = telRegex.test(value) ? '' : 'Please enter a valid number';
            break;
        case 'income':
            errors.incErr = incRegex.test(value) ? '' : 'Please enter a valid amount';
            break;
    }

    this.setState({
        errors,
    });
}

handleFocusBack = (e) => {

    e.preventDefault();

    let errors = this.state;

    const {name} = e.target;

    switch(name) {
        case 'fullName':
            errors.nameErr = '';
            break;
        case 'phone':
            errors.telErr = '';
            break;
        case 'location':
            break;
    }

    this.setState({
        errors,
    });    
}

submitForm = (e) => {
    e.preventDefault();

    this.props.history.push(`/personal-loan-submit?amt=${document.getElementById('amount').value}&inc=${document.getElementById('income').value}&loc=${document.getElementById('location').value}&name=${document.getElementById('fullName').value}&phn=${document.getElementById('phone').value}&emp=${document.getElementById('employment').value}&tme=${document.getElementById('time').value}`)

}

submitMForm = (e) => {
    e.preventDefault();

    this.props.history.push(`/personal-loan-submit?amt=${document.getElementById('m-amount').value}&inc=${document.getElementById('m-income').value}&loc=${document.getElementById('m-location').value}&name=${document.getElementById('m-fullName').value}&phn=${document.getElementById('m-phone').value}&emp=${document.getElementById('m-employment').value}&tme=${document.getElementById('m-time').value}`)

}
    render() {
    return (
        <React.Fragment>
        <div id="mainContainer">
            <div className="background"></div>
            <div id="plContainer">
                <form id="plForm" onSubmit={this.submitForm}>
                    <h2>Personal Loan - Compare and Apply Online</h2>
                    <div id="plFormControls">

                        <div className="plFormGroup">
                        <label htmlFor="fullName">
                            Full name:
                        </label>
                        <input type="text" name="fullName" id="fullName" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.nameErr ? <span className="err">{this.state.nameErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="phone">
                            Phone:
                        </label>
                        <input type="tel" name="phone" id="phone" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.telErr ? <span className="err">{this.state.telErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" name="location" id="location"/>
                        </div>

                        {/* 
                            Use a data-list of cities above
                        */}
                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="amount">
                            Loan Amount:
                        </label>
                        <input type="number" name="amount" id="amount"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="employment">
                            Employment Type:
                        </label>
                        <input type="text" name="employment" id="employment"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="income">
                            Monthly Income:
                        </label>
                        <input type="number" name="income" id="income" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.incErr ? <span className="err">{this.state.incErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="time">
                            Best time to contact:
                        </label>
                        <select name="time" id="time" className="option" >
                            <option value="8:30 AM to 11:30 AM">8:30 AM to 11:30 AM</option>
                            <option value="11:30 AM to 1 PM">11:30 AM to 1 PM</option>
                            <option value="1 PM to 3 PM">1 PM to 3 PM</option>
                            <option value="3 PM to 6 PM">3 PM to 6 PM</option>
                        </select>
                        </div>

                        <span className="err">&nbsp;</span>

                    </div>
                    <input type="submit" value="SUBMIT" id="plSubmit"/>

                </form>
                <div id="plCarousel">
                    <Carousel>
                        <div className="carImg">
                            <img src={C1}/>
                            <p className="legend">Legend 1</p>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div id="whypersonal">
                <h4>Why Insta Loaner?</h4><hr style={{width:"50%"}}/><br/>
                <p>Personal loan is a short to medium term unsecured loan granted to an individual.
                It is commonly used to meet such financial needs as debt consolidation, wedding expenses,
                 unexpected medical costs, home renovation and others. Flexibility of usage, minimal 
                 documentation and quick processing make personal loan a preferred financing option. 
                 Unlike other loans, it usually has a shorter repayment tenure ranging from 1-5 years. 
                 Depending upon the individual applicant’s profile and lender, the APR (Annual Percentage 
                 Rate) of a personal loan may vary from 10.29% to 30%. For example, if you take a loan of 
                 Rs. 4.5 lakhs at the rate of 15.5% with repayment tenure of 3 years, your EMI will be Rs. 
                 15,710. The total payable amount at the end of 3 years would be Rs. 5,65,553. Therefore, 
                 you are paying total interest amount to the tune of Rs 115,553. This, however, excludes 
                 other applicable charges which can be quantified as under: Loan Processing Charge@2% = 
                 Rs.9000 Documentation charges = Rs. 500 Amortization Schedule charges = Rs. 200 In case 
                 of change of payment mode or swapping your Post Dated Cheques, additional charges are 
                 applicable. Also, depending upon the lender bank, prepayment options may or may not be 
                 available and the applicable charges may vary accordingly. </p><br/>
                 
                 <p>Personal loans online are unsecured loans provided by the banks without taking any 
                     collateral security, though some PSU banks may insist on a guarantor. 
                     Personal loan can be taken for any personal requirement ranging from marriage 
                     to holidaying or maybe to buy a lifestyle product or medical emergencies. The 
                     end purpose is not important to the bank as long as it is not for speculative trading.
                 </p>
            </div>    
            <WhyPartial/>   
            <Compare/>
        </div>

        {/* Mobile Considerations */}

        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitMForm}>

            <h5 id="mFormTitle">Compare and apply for Personal Loans!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

            <span className="mFormGroup">
                <label htmlFor="amount" className="mFormLabel">Loan Amount</label>
                <input type="number" name="amount" id="m-amount" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="employment" className="mFormLabel">Employment Type:</label>
                <select name="employment" id="m-employment" className="mFormOption">
                    <option value='salaried'>Salaried </option>
                    <option value='self-employed'> Self-Employed </option>
                    <option value='other'> Other </option>
                </select>
            </span>

            <span className="mFormGroup">
                <label htmlFor="income" className="mFormLabel">Income:</label>
                <input type="number" name="income" id="m-income" className="mFormInput" placeholder="your income" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="fullName" className="mFormLabel">Name:</label>
                <input type="text" name="fullName" id="m-fullName" className="mFormInput" placeholder="your name" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="phone" className="mFormLabel">Phone:</label>
                <input type="tel" name="phone" id="m-phone" className="mFormInput" placeholder="your number" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="location" className="mFormLabel">Location:</label>
                <input type="text" name="location" id="m-location" className="mFormInput" placeholder="Enter your location"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="time" className="mFormLabel">Time to contact:</label>
                <select name="time" id="m-time" className="mFormOption">
                            <option value="8:30-AM-to-11:30 AM" >8:30 AM to 11:30 AM</option>
                            <option value="11:30-AM-to-1 PM" selected>11:30 AM to 1 PM</option>
                            <option value="1-PM-to-3-PM" >1 PM to 3 PM</option>
                            <option value="3-PM-to-6-PM">3 PM to 6 PM</option>
                        </select>
            </span>

            <input type="submit" value="NEXT" id="mFormSubmit"/>
        </form>
        <div id="whypersonal">
                <h4>Why Personal Loans?</h4><hr style={{width:"50%"}}/><br/>
                <p>Personal loan is a short to medium term unsecured loan granted to an individual.
                It is commonly used to meet such financial needs as debt consolidation, wedding expenses,
                 unexpected medical costs, home renovation and others. Flexibility of usage, minimal 
                 documentation and quick processing make personal loan a preferred financing option. 
                 Unlike other loans, it usually has a shorter repayment tenure ranging from 1-5 years. 
                 Depending upon the individual applicant’s profile and lender, the APR (Annual Percentage 
                 Rate) of a personal loan may vary from 10.29% to 30%. For example, if you take a loan of 
                 Rs. 4.5 lakhs at the rate of 15.5% with repayment tenure of 3 years, your EMI will be Rs. 
                 15,710. The total payable amount at the end of 3 years would be Rs. 5,65,553. Therefore, 
                 you are paying total interest amount to the tune of Rs 115,553. This, however, excludes 
                 other applicable charges which can be quantified as under: Loan Processing Charge@2% = 
                 Rs.9000 Documentation charges = Rs. 500 Amortization Schedule charges = Rs. 200 In case 
                 of change of payment mode or swapping your Post Dated Cheques, additional charges are 
                 applicable. Also, depending upon the lender bank, prepayment options may or may not be 
                 available and the applicable charges may vary accordingly. </p><br/>
                 
                 <p>Personal loans online are unsecured loans provided by the banks without taking any 
                     collateral security, though some PSU banks may insist on a guarantor. 
                     Personal loan can be taken for any personal requirement ranging from marriage 
                     to holidaying or maybe to buy a lifestyle product or medical emergencies. The 
                     end purpose is not important to the bank as long as it is not for speculative trading.
                 </p>
            </div>    
            <Compare/>
        </div>
        </React.Fragment>
    )
    }
}


{/**
    -- This is the mobile implementation    
    -- of the personal loan page
*/}

