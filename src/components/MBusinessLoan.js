import React from 'react';
import Compare from '../components/Compare';


export default class MBusinessLoan extends React.Component {

    constructor(props) {
        super(props);
    }

    submitForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/business-loan-submit?amt=${document.getElementById('amount').value}&inc=${document.getElementById('income').value}&loc=${document.getElementById('location').value}&name=${document.getElementById('fullName').value}&phn=${document.getElementById('phone').value}&emp=${document.getElementById('employment').value}&tme=${document.getElementById('time').value}`)

    
    }

    render() {
    return (
        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitForm}>

            <h5 id="mFormTitle">Compare and apply for Business Loans!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

            <span className="mFormGroup">
                <label htmlFor="amount" className="mFormLabel">Loan Amount</label>
                <input type="number" name="amount" id="amount" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="employment" className="mFormLabel">Employment Type:</label>
                <select name="employment" id="employment" className="mFormOption">
                    <option value='salaried'>Salaried </option>
                    <option value='self-employed'> Self-Employed </option>
                    <option value='other'> Other </option>
                </select>
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
                <h4>Why Business Loans?</h4><hr style={{width:"50%"}}/><br/>

                <p>The foremost priority of any entrepreneur is to see his/her business grow,
                     expand and flourish. To fulfill this desire, business owners opt for business
                      loans and meet their financial requirements. However, getting instant funds
                       is not always possible, as banks and NBFCs take their time in deciding whether
                        to sanction loan or not.</p><br/>
                 
                 <p>A home loan is a specified sum of money that an individual borrows from a financial
                      institution to buy or construct a house. Home loans can also be used for expanding,
                       repairing and renovating an existing property. Housing loan is a type of secured loan,
                        wherein the property being purchased is pledged to the bank or lending institution till
                         the borrowed amount is repaid along with the interest. In India, home loan interest rates
                     start at as low as 7.90 p.a., with loan tenure stretching up to 30 years.
                 </p><br/>
                 
                 <h4>Business Loan Interest Rates</h4><br/>
                 <p> Business loan interest rates start from 14.99% onwards & go upto 24% which also depends on the 
                     eligibility of the applicant:</p><br/>
                     <ul className="mPointers">
                         <li>
                         Minimum loan amount offered is Rs. 5000
                         </li>
                         <li>
                         Maximum loan amount offered goes up to Rs. 2 crore (can exceed depending on the requirements)
                         </li>
                         <li>
                         Minimum repayment period is 12 months
                         </li>
                         <li>
                         Maximum repayment period can go up to 5 years
                         </li>
                     </ul>
            </div>    
            <Compare/>
        </div>
    )
    }
}

