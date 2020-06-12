import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home'
import About from '../components/About';

import PersonalLoan from '../components/PersonalLoan';
import HomeLoan from '../components/HomeLoan';
import BusinessLoan from '../components/BusinessLoan';
import PropertyLoan from '../components/PropertyLoan';

import MPersonalLoan from '../components/MPersonalLoan';
import MHomeLoan from '../components/MHomeLoan';
import MBusinessLoan from '../components/MBusinessLoan';
import MPropertyLoan from '../components/MPropertyLoan';

import PLSubmit from '../components/PLSubmit';
import HLSubmit from '../components/HLSubmit';
import BLSubmit from '../components/BLSubmit';
import PRLSubmit from '../components/PRLSubmit';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EMICalculator from '../components/EMICalculator';
import CreditScore from '../components/CreditScore';
import Partner from '../components/Partner';


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About} />

            <Route path="/personal-loan" component={PersonalLoan} />
            <Route path="/m-personal-loan" component={MPersonalLoan} />
            <Route path="/personal-loan-submit" component={PLSubmit} />

            <Route path="/home-loan" component={HomeLoan} />
            <Route path="/m-home-loan" component={MHomeLoan} />
            <Route path="/home-loan-submit" component={HLSubmit} />

            <Route path="/business-loan" component={BusinessLoan} />
            <Route path="/m-business-loan" component={MBusinessLoan} />
            <Route path="/business-loan-submit" component={BLSubmit} />

            <Route path="/loan-against-property" component={PropertyLoan} />
            <Route path="/m-loan-against-property" component={MPropertyLoan} />
            <Route path="/property-loan-submit" component={PRLSubmit} />

            <Route path="/emi-calculator" component={EMICalculator} />
            <Route path="/join-as-partner" component={Partner} />
            <Route path="/credit-score" component={CreditScore} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;