import React from 'react';
import Compare from './Compare';
import {WhyPartial} from '../components/Why';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import C1 from '../../public/images/carousel/c1.jpg';

class PropertyLoan extends React.Component {

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
        
        const nameRegex = /^[a-z\sA-Z]+$/;
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
    
        this.props.history.push(`/business-loan-submit?amt=${document.getElementById('lapamount').value}&inc=${document.getElementById('lapincome').value}&loc=${document.getElementById('laplocation').value}&name=${document.getElementById('lapfullName').value}&phn=${document.getElementById('lapphone').value}&emp=${document.getElementById('lapemployment').value}&tme=${document.getElementById('laptime').value}`)

    }

    submitMForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/business-loan-submit?amt=${document.getElementById('lap-amount').value}&inc=${document.getElementById('lap-income').value}&loc=${document.getElementById('lap-location').value}&name=${document.getElementById('lap-fullName').value}&phn=${document.getElementById('lap-phone').value}&emp=${document.getElementById('lap-employment').value}&tme=${document.getElementById('lap-time').value}`)

    }


    render() {
    return (
        <React.Fragment>
        <div>
        <div id="mainContainer">
        <div className="background"></div>
            <div id="plContainer">
                <form id="plForm" onSubmit={this.submitForm}>
                    <h2>Property Loan - Compare and Apply Online</h2>
                    <div id="plFormControls">

                        <div className="plFormGroup">
                        <label htmlFor="fullName">
                            Full name:
                        </label>
                        <input type="text" name="fullName" id="lapfullName" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.nameErr ? <span className="err">{this.state.nameErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="phone">
                            Phone:
                        </label>
                        <input type="tel" name="phone" id="lapphone" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.telErr ? <span className="err">{this.state.telErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" name="location" id="laplocation"/>
                        </div>

                        {/* 
                            Use a data-list of cities above
                        */}
                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="amount">
                            Loan Amount:
                        </label>
                        <input type="number" name="amount" id="lapamount"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="employment">
                            Employment Type:
                        </label>
                        <input type="text" name="employment" id="lapemployment"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="income">
                            Monthly Income:
                        </label>
                        <input type="number" name="income" id="lapincome" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.incErr ? <span className="err">{this.state.incErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="time">
                            Best time to contact:
                        </label>
                        <select name="time" id="laptime" className="option" >
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

                <p>Loan Against Property (LAP) or mortgage loan is a type of secured loan offered
                    by banks and Housing Finance Companies (HFCs) against commercial or residential 
                    property owned by the borrower. The amount, which is availed by keeping the 
                    property as collateral till the loan is fully repaid, can be used by the borrower
                    for various purposes like expanding a business, funding children’s education, 
                    meeting medical expenses, and more. The maximum loan amount provided under LAP can
                    go up to 70% of the property value. Along with being cost-effective, loans against 
                    property are reasonably convenient to avail and repay due to the relatively low 
                    mortgage interest rate.</p><br/><br/>
                 
                 <p>In today’s competitive world, it is very difficult to get through the best 
                     option to choose from. Various banks and NBFCs have different home loan 
                     plans and it becomes quite difficult to choose the correct plan for oneself. 
                     Housing Finance is not some everyday thing you would opt for, so one has to 
                     be very diligent in choosing one. It is aim to help people choose the best 
                     plan suited to their needs.</p>

                <h4>Features and Benefits of Loan Against Property</h4><br/>

                <p>Availability of higher loan amount and the flexibility to use the amount for various 
                    purposes make LAP a better option compared to a personal loan. Mentioned below are some 
                    of the features and benefits of availing a Loan Against Property.</p>
            </div>    
            <WhyPartial/>   
            <Compare/>
        </div>
        </div>

        {/* Mobile Considerations */}

        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitMForm}>

            <h5 id="mFormTitle">Compare and apply for loan against property!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

            <span className="mFormGroup">
                <label htmlFor="amount" className="mFormLabel">Loan Amount</label>
                <input type="number" name="amount" id="lap-amount" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="employment" className="mFormLabel">Employment Type:</label>
                <select name="employment" id="lap-employment" className="mFormOption">
                    <option value='salaried'>Salaried </option>
                    <option value='self-employed'> Self-Employed </option>
                    <option value='other'> Other </option>
                </select>
            </span>

            <span className="mFormGroup">
                <label htmlFor="income" className="mFormLabel">Income:</label>
                <input type="number" name="income" id="lap-income" className="mFormInput" placeholder="your income" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="fullName" className="mFormLabel">Name:</label>
                <input type="text" name="fullName" id="lap-fullName" className="mFormInput" placeholder="your name" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="phone" className="mFormLabel">Phone:</label>
                <input type="tel" name="phone" id="lap-phone" className="mFormInput" placeholder="your number" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="location" className="mFormLabel">Location:</label>
                <input type="text" name="location" id="lap-location" className="mFormInput" placeholder="Enter your location"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="time" className="mFormLabel">Time to contact:</label>
                <select name="time" id="lap-time" className="mFormOption">
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
        </React.Fragment>
    )
    }
}

export default PropertyLoan;