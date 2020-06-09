import React from 'react';
import queryString from 'query-string';

export default class PLSubmit extends React.Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        console.log(values.amt) 
        console.log(values.loc) 
        console.log(values.name) 
        console.log(values.phn) 
        console.log(values.inc)
        console.log(values.emp)  
        console.log(values.tme) 
      }

    render() {
    return (
        <div>
            Personal Loan Submit
        </div>
    )
    }
}

