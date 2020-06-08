import React from 'react';


const EMICalculator = () => {
    return (
        <React.Fragment>
            <MEMICalculator />

            <div id="calculator">
            <div className="background"></div>
                <h4>EMI Calculator</h4>
                <iframe src="https://emicalculator.net/widget/2.0/widget.html" id="calc"/>
            </div>
        </React.Fragment>
    )
}

const MEMICalculator = () => (
    <React.Fragment>
            <div id="mCalculator">
                <h4>EMI Calculator</h4>
                <iframe src="https://emicalculator.net/widget/2.0/widget.html" id="mCalc"/>
            </div>
        </React.Fragment>
)

export default EMICalculator;