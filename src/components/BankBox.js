import React from 'react';

const BankBox = (props) => {
    const roi = props.roi.slice(0,4);
    return (<div className="bankbox">
                    <img src={props.icon} alt="logo" className="bankLogo"/>

                    <span className="bankProp" >
                        <p style={{color:"rgba(0,0,0,0.6)"}}>Bank Name</p>
                        <p>{props.name}</p>
                    </span>

                    <span className="bankProp" >
                        <p style={{color:"rgba(0,0,0,0.6)"}}>Rate of Interest</p>
                        <p>{props.roi}</p>
                    </span>

                    {/* Change the below fields to update per state */}

                    <span className="bankProp" >
                        <p style={{color:"rgba(0,0,0,0.6)"}}>EMI</p>
                        <p>{(props.amount + (props.amount*roi/100))/props.term}</p>
                    </span>

                    <span className="bankProp" >
                        <p style={{color:"rgba(0,0,0,0.6)"}}>Processing fee</p>
                        <p>{props.procFee}</p>
                    </span>

                    {/* Change the below fields to update per state */}

                    <span className="bankProp">
                        <p style={{color:"rgba(0,0,0,0.6)"}}>Total interest</p>
                        <p>{props.amount + (props.amount*roi/100)+props.procFee}</p>
                    </span>

                </div>)
}

export default BankBox;