import React from 'react';
import {WhyPartial} from '../components/Why';
import Compare from '../components/Compare';
import PLSubmit from '../components/PLSubmit';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import C1 from '../../public/images/carousel/c1.jpg';

export default class PersonalLoan extends React.Component {

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

    let errors = this.state;

    const {name,value} = e.target;

    switch(name) {
        case 'fullName':
            errors.nameErr = nameRegex.test(value) ? '' : 'Please enter a valid name';
            break;
        case 'phone':
            errors.telErr = telRegex.test(value) ? '' : 'Please enter a valid number';
            break;
        case 'location':
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
    render() {
    return (
        <React.Fragment> <MPersonalLoan />
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
                        <input type="text" name="fullName" id="fullName" onBlur={this.handleChange} onFocus={this.handleFocusBack}/>
                        </div>

                        {this.state.nameErr ? <span className="err">{this.state.nameErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="phone">
                            Phone:
                        </label>
                        <input type="tel" name="phone" id="phone" onBlur={this.handleChange} onFocus={this.handleFocusBack}/>
                        </div>

                        {this.state.telErr ? <span className="err">{this.state.telErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" name="location" id="location"/>
                        </div>

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
                        <input type="number" name="income" id="income"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="time">
                            Best time to contact:
                        </label>
                        <input type="text" name="time" id="time"/>
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
        </React.Fragment>
    )
    }
}

const MPersonalLoan = () => {
    return (
        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer">

            <h5 id="mFormTitle">Compare and apply for Personal Loans!</h5>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Loan Amount</label>
                <input type="number" name="" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Employment Type:</label>
                <input type="text" name="" className="mFormInput" placeholder="your employment"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Income:</label>
                <input type="number" name="" className="mFormInput" placeholder="your income"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Name:</label>
                <input type="text" name="" className="mFormInput" placeholder="your name"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Phone:</label>
                <input type="tel" name="" className="mFormInput" placeholder="your number"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Location:</label>
                <input type="text" name="" className="mFormInput" placeholder="Enter your location"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="" className="mFormLabel">Time to contact:</label>
                <input type="text" name="" className="mFormInput" placeholder="best time to call you?"/>
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
    )
}

