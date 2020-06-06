import React from 'react';
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
            errors.telErr = telRegex.test(value) ? '' : 'Please enter a valid phone number';
            break;
        case 'location':
            break;
    }

    this.setState({
        errors,
    });
}
    render() {
    return (
        <div>
            <div className="background"></div>
            <div id="plContainer">
                <form id="plForm">
                    <h2>Personal Loan - Compare and Apply Online</h2>
                    <p>Choose the best offers from top banks!</p>
                    <div id="plFormControls">

                        <div className="plFormGroup">
                        <label htmlFor="fullName">
                            Full name:
                        </label>
                        <input type="text" name="fullName" onBlur={this.handleChange}/>
                        </div>

                        {this.state.nameErr ? <span className="err">{this.state.nameErr}</span> : ''}

                        <div className="plFormGroup">
                        <label htmlFor="phone">
                            Phone:
                        </label>
                        <input type="tel" name="phone" onBlur={this.handleChange}/>
                        </div>

                        {this.state.telErr ? <span className="err">{this.state.telErr}</span> : ''}

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Location:
                        </label>
                        <input type="text" name="location" />
                        </div>

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Loan Amount:
                        </label>
                        <input type="number" name="location" />
                        </div>

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Employment Type:
                        </label>
                        <input type="text" name="location" />
                        </div>

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Monthly Income:
                        </label>
                        <input type="text" name="location" />
                        </div>

                        <div className="plFormGroup">
                        <label htmlFor="location">
                            Best time to contact:
                        </label>
                        <input type="text" name="location" />
                        </div>

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
        </div>
    )
    }
}

