import React from 'react';
import Compare from '../components/Compare';


export default class MPersonalLoan extends React.Component {

    constructor(props) {
        super(props);
    }

    submitForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/personal-loan-submit?amt=${document.getElementById('amount').value}&inc=${document.getElementById('income').value}&loc=${document.getElementById('location').value}&name=${document.getElementById('fullName').value}&phn=${document.getElementById('phone').value}&emp=${document.getElementById('employment').value}&tme=${document.getElementById('time').value}`)

    
    }

    render() {
    return (
        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitForm}>

            <h5 id="mFormTitle">Compare and apply for Personal Loans!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

            <span className="mFormGroup">
                <label htmlFor="amount" className="mFormLabel">Loan Amount</label>
                <input type="number" name="amount" id="amount" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="employment" className="mFormLabel">Employment Type:</label>
                <input type="text" name="employment" id="employment" className="mFormInput" placeholder="your employment"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="income" className="mFormLabel">Income:</label>
                <input type="number" name="income" id="income" className="mFormInput" placeholder="your income" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="fullName" className="mFormLabel">Name:</label>
                <input type="text" name="fullName" id="fullName" className="mFormInput" placeholder="your name" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="phone" className="mFormLabel">Phone:</label>
                <input type="tel" name="phone" id="phone" className="mFormInput" placeholder="your number" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="location" className="mFormLabel">Location:</label>
                <input type="text" name="location" id="location" className="mFormInput" placeholder="Enter your location"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="time" className="mFormLabel">Time to contact:</label>
                <select name="time" id="time" className="mFormOption">
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
    )
    }
}

