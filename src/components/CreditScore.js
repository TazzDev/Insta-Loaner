import React from 'react';
import Score from '../../public/images/score.png';

const CreditScore = () => {
    return (
        <React.Fragment>
            <MCreditScore/>
        <div id="score">
            <div className="background"></div>
        <div id="scoreContainer">
            <h4>Credit score in India: All you need to know</h4>
            <p>There was a time when it was considered wrong to borrow money from anyone. 
                Our parents and grand parents instilled the need to save money to buy what 
                ever we want. We were told to live by the saying “Little drops make the mighty 
                ocean”. Though it was true back in the day when the cost of products and the 
                need of the people was simple. People nowadays have greater needs and want to 
                enjoy life as much as possible.</p><br/>
                <p>
                The updating of products like mobile phones, cars, laptops etc. each year wants 
                people to get the best and latest products. This shift in lifestyle and the enabling 
                of their needs thanks to the internet people have started to take loans or use credit 
                cards to satisfy their needs. About credit score With loans and credit cards becoming 
                a big part of people’s life how many of you have noticed that no person gets the same 
                credit offers.
                </p><br/>
                <img src={Score} width="100%" height="100%"/><br/>
                <p>Even if 2 people have the same jobs, salary, working in the same company and living 
                    in the same locality in the same neighborhood do not get the same deals on loans 
                    and credit cards. This is because of a factor called credit score which will 
                    vary from person to person.</p>
        </div>
            <form id="scoreForm" action="https://formsubmit.co/thomsonbingo@gmail.com" method="POST">
                    <h4>Get a quote</h4>

                <span className="scoreFormGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </span>

                <span className="scoreFormGroup">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone"/>
                </span>

                <span className="scoreFormGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email"/>
                </span>

                <span className="scoreFormGroup">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" name="amount"/>
                </span>
                    <input type="submit" value="SUBMIT" id="scoreButton"/>
                </form>
        </div>
        </React.Fragment>
    )
}

const MCreditScore = () => {
    return (
        <React.Fragment >
            <div id="mCredDesc">
                <h4>Credit score in India: All you need to know</h4><br/>

                <p>There was a time when it was considered wrong to borrow 
                    money from anyone. Our parents and grand parents instilled 
                    the need to save money to buy what ever we want. We were told 
                    to live by the saying “Little drops make the mighty ocean”. 
                    Though it was true back in the day when the cost of products and 
                    the need of the people was simple. People nowadays have greater 
                    needs and want to enjoy life as much as possible.</p><br/>
                
                <p>The updating of products like mobile phones, cars, laptops etc. 
                    each year wants people to get the best and latest products. 
                    This shift in lifestyle and the enabling of their needs thanks 
                    to the internet people have started to take loans or use credit 
                    cards to satisfy their needs. About credit score With loans and 
                    credit cards becoming a big part of people’s life how many of you 
                    have noticed that no person gets the same credit offers.</p><br/>

            </div>
            <form id ="mScoreForm" action="https://formsubmit.co/thomsonbingo@gmail.com" method="POST">
                <h4>Get a quote</h4>

                    <span className="mScoreFormGroup">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"/>
                    </span>

                    <span className="mScoreFormGroup">
                        <label htmlFor="phone">Phone:</label>
                        <input type="tel" name="phone"/>
                    </span>

                    <span className="mScoreFormGroup">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email"/>
                    </span>

                    <span className="mScoreFormGroup">
                        <label htmlFor="address">Amount:</label>
                        <input type="number" name="address"/>
                    </span>
                        <input type="submit" value="SUBMIT" id="mScoreButton"/>
            </form>
        </React.Fragment>
    )
}

export default CreditScore;