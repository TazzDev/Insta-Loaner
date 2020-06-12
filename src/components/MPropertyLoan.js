import React from 'react';
import Compare from '../components/Compare';


export default class MPropertyLoan extends React.Component {

    constructor(props) {
        super(props);
    }

    submitForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/property-loan-submit?amt=${document.getElementById('amount').value}&inc=${document.getElementById('income').value}&loc=${document.getElementById('location').value}&name=${document.getElementById('fullName').value}&phn=${document.getElementById('phone').value}&emp=${document.getElementById('employment').value}&tme=${document.getElementById('time').value}`)

    
    }

    render() {
    return (
        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitForm}>

            <h5 id="mFormTitle">Compare and apply for loan against property!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

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
                <h4>Why Loan against property?</h4><hr style={{width:"50%"}}/><br/>
                <p>Loan Against Property (LAP) or mortgage loan is a type of secured loan offered
                     by banks and Housing Finance Companies (HFCs) against commercial or residential 
                     property owned by the borrower. The amount, which is availed by keeping the 
                     property as collateral till the loan is fully repaid, can be used by the borrower
                      for various purposes like expanding a business, funding children’s education, 
                      meeting medical expenses, and more. The maximum loan amount provided under LAP can
                       go up to 70% of the property value. Along with being cost-effective, loans against 
                       property are reasonably convenient to avail and repay due to the relatively low 
                       mortgage interest rate.</p><br/>
                 
                <h4>Features and Benefits of Loan Against Property</h4><br/>

                <p>Availability of higher loan amount and the flexibility to use the amount for various 
                    purposes make LAP a better option compared to a personal loan. Mentioned below are some 
                    of the features and benefits of availing a Loan Against Property.</p>

                    <ul className="mPointers">
                        <li>
                        The loan is available against self-occupied residential property, such as house, apartment, flat, etc.
                        </li>
                        <li>
                        It is available by mortgaging commercial properties like an office building, malls, shopping complex, shops, etc.
                        </li>
                        <li>
                        It can be taken against a plot of land owned by the borrower.
                        </li>
                        <li>
                        Available for both salaried and self-employed individuals.
                        </li>
                        <li>
                        It comes with flexible tenure and lower interest rate compared to personal loans.
                        </li>
                        <li>
                        Interest paid for the Loan Against Property provides tax benefits under Section 37 (1) of the Income Tax Act, 1961.
                        </li>
                        <li>
                        If the amount is used for funding a house, the interest paid on the loan provides tax benefits under Section 24 of the Income Tax Act, 1961, up to an amount of Rs. 2 lakh
                        </li>
                    </ul>
            </div>    
            <Compare/>
        </div>
    )
    }
}

