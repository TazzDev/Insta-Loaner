import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/Home'
import About from '../components/About';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PersonalLoan from '../components/PersonalLoan';
import FinancialServices from '../components/FinancialServices';
import Partner from '../components/Partner';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About} />
            <Route path="/personal-loan" component={PersonalLoan} />
            <Route path="/financial-services" component={FinancialServices} />
            <Route path="/join-as-partner" component={Partner} />
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default AppRouter;