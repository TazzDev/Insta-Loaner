import React from 'react';
import Why from '../components/Why';
import PLSubmit from '../components/PLSubmit';
import {withRouter} from 'react-router-dom';
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
        <div>
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
            <Why />   
        </div>
    )
    }
}

