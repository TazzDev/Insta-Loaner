import React from 'react';
import Compare from '../components/Compare';


export default class MHomeLoan extends React.Component {

    constructor(props) {
        super(props);
    }

    submitForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/home-loan-submit?amt=${document.getElementById('amount').value}&inc=${document.getElementById('income').value}&loc=${document.getElementById('location').value}&name=${document.getElementById('fullName').value}&phn=${document.getElementById('phone').value}&emp=${document.getElementById('employment').value}&tme=${document.getElementById('time').value}`)

    
    }

    render() {
    return (
        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitForm}>

            <h5 id="mFormTitle">Compare and apply for Home Loans!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

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
                <input type="text" name="time" id="time" className="mFormInput" placeholder="best time to call you?"/>
            </span>

            <input type="submit" value="NEXT" id="mFormSubmit"/>
        </form>
        <div id="whypersonal">
                <h4>Why Home Loans?</h4><hr style={{width:"50%"}}/><br/>
                <p>A home loan is a specified sum of money that an individual borrows from a financial
                     institution to buy or construct a house. Home loans can also be used for expanding,
                      repairing and renovating an existing property. Housing loan is a type of secured loan,
                       wherein the property being purchased is pledged to the bank or lending institution
                        till the borrowed amount is repaid along with the interest. In India, home loan
                         interest rates start at as low as 7.90 p.a., with loan tenure stretching up to 30 years. </p><br/>
                 
                 <p>In today’s competitive world, it is very difficult to get through the best option to choose from.
                      Various banks and NBFCs have different home loan plans and it becomes quite difficult to choose
                       the correct plan for oneself. Housing Finance is not some everyday thing you would opt for, so
                        one has to be very diligent in choosing one. It is aim to help people choose the best plan suited
                         to their needs.
                 </p>
            </div>    
            <Compare/>
        </div>
    )
    }
}

