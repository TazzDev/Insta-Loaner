import React from 'react';
import Compare from './Compare';
import {WhyPartial} from '../components/Why';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import C1 from '../../public/images/carousel/c1.jpg';

class HomeLoan extends React.Component{

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
    
        this.props.history.push(`/home-loan-submit?amt=${document.getElementById('hlamount').value}&inc=${document.getElementById('hlincome').value}&loc=${document.getElementById('hllocation').value}&name=${document.getElementById('hlfullName').value}&phn=${document.getElementById('hlphone').value}&emp=${document.getElementById('hlemployment').value}&tme=${document.getElementById('hltime').value}`)

    }

    submitMForm = (e) => {
        e.preventDefault();
    
        this.props.history.push(`/home-loan-submit?amt=${document.getElementById('hl-amount').value}&inc=${document.getElementById('hl-income').value}&loc=${document.getElementById('hl-location').value}&name=${document.getElementById('hl-fullName').value}&phn=${document.getElementById('hl-phone').value}&emp=${document.getElementById('hl-employment').value}&tme=${document.getElementById('hl-time').value}`)

    }

    render() {
    return (
        <React.Fragment>
        <div id="mainContainer">
        <div className="background"></div>
            <div id="plContainer">
                <form id="plForm" onSubmit={this.submitForm}>
                    <h2>Home Loan - Compare and Apply Online</h2>
                    <div id="plFormControls">

                        <div className="plFormGroup">
                        <label htmlFor="fullName">
                            Full name:
                        </label>
                        <input type="text" name="fullName" id="hlfullName" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.nameErr ? <span className="err">{this.state.nameErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="phone">
                            Phone:
                        </label>
                        <input type="tel" name="phone" id="hlphone" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.telErr ? <span className="err">{this.state.telErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" name="location" id="hllocation"/>
                        </div>

                        {/* 
                            Use a data-list of cities above
                        */}
                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="amount">
                            Loan Amount:
                        </label>
                        <input type="number" name="amount" id="hlamount"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="employment">
                            Employment Type:
                        </label>
                        <input type="text" name="employment" id="hlemployment"/>
                        </div>

                        <span className="err">&nbsp;</span>

                        <div className="plFormGroup">
                        <label htmlFor="income">
                            Monthly Income:
                        </label>
                        <input type="number" name="income" id="hlincome" onBlur={this.handleChange} onFocus={this.handleFocusBack} required/>
                        </div>

                        {this.state.incErr ? <span className="err">{this.state.incErr}</span> : <span className="err">&nbsp;</span>}

                        <div className="plFormGroup">
                        <label htmlFor="time">
                            Best time to contact:
                        </label>
                        <select name="time" id="hltime" className="option" >
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

                <p>A home loan is a specified sum of money that an individual borrows 
                    from a financial institution to buy or construct a house. Home loans 
                    can also be used for expanding, repairing and renovating an existing 
                    property. Housing loan is a type of secured loan, wherein the property 
                    being purchased is pledged to the bank or lending institution till the 
                    borrowed amount is repaid along with the interest. In India, home loan 
                    interest rates start at as low as 7.90 p.a., with loan tenure stretching 
                    up to 30 years.</p><br/><br/>
                 
                 <p>In today’s competitive world, it is very difficult to get through the best 
                     option to choose from. Various banks and NBFCs have different home loan 
                     plans and it becomes quite difficult to choose the correct plan for oneself. 
                     Housing Finance is not some everyday thing you would opt for, so one has to 
                     be very diligent in choosing one. It is aim to help people choose the best 
                     plan suited to their needs.</p>
            </div>    
            <WhyPartial/>   
            <Compare/>
        </div>

        {/* Mobile Home Section */}

        <div id="mPersonalContainer">
        <form id="mPersonalLoanContainer" onSubmit={this.submitMForm}>

            <h5 id="mFormTitle">Compare and apply for Home Loans!<hr style={{width:"80%",color:"#ce5e32"}}/></h5>

            <span className="mFormGroup">
                <label htmlFor="amount" className="mFormLabel">Loan Amount</label>
                <input type="number" name="amount" id="hl-amount" className="mFormInput" placeholder="the loan amount"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="employment" className="mFormLabel">Employment Type:</label>
                <select name="employment" id="hl-employment" className="mFormOption">
                    <option value='salaried'>Salaried </option>
                    <option value='self-employed'> Self-Employed </option>
                    <option value='other'> Other </option>
                </select>
            </span>

            <span className="mFormGroup">
                <label htmlFor="income" className="mFormLabel">Income:</label>
                <input type="number" name="income" id="hl-income" className="mFormInput" placeholder="your income" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="fullName" className="mFormLabel">Name:</label>
                <input type="text" name="fullName" id="hl-fullName" className="mFormInput" placeholder="your name" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="phone" className="mFormLabel">Phone:</label>
                <input type="tel" name="phone" id="hl-phone" className="mFormInput" placeholder="your number" required/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="location" className="mFormLabel">Location:</label>
                <input type="text" name="location" id="hl-location" className="mFormInput" placeholder="Enter your location"/>
            </span>

            <span className="mFormGroup">
                <label htmlFor="time" className="mFormLabel">Time to contact:</label>
                <select name="time" id="hl-time" className="mFormOption">
                            <option value="8:30-AM-to-11:30 AM" >8:30 AM to 11:30 AM</option>
                            <option value="11:30-AM-to-1 PM" selected>11:30 AM to 1 PM</option>
                            <option value="1-PM-to-3-PM" >1 PM to 3 PM</option>
                            <option value="3-PM-to-6-PM">3 PM to 6 PM</option>
                </select>
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
        </React.Fragment>
        )
    }
}

export default HomeLoan;