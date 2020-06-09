import React from 'react';

const Partner =()=> {
    return (
        <div id="partner">
            <div id="partnerContainer">
                <div className="background"></div>
            <h4>Business Association</h4><br/>
            <p>
                We provide loans of all types here. 
                Like small business loan, home loan, card receivables 
                loan and personal loan etc. 
                A Business Associate (BA) is a Channel Partner 
                who can develop an understanding of the products 
                offered by provide guidance related to the loan 
                and / or other financial products. Thus, 
                the Business Association might CA, Doctor, DSA, DST, 
                Brokers, a working professional, a self-employed or people living alone term life.
            </p>
            <ul>
                <li>
                We provide loans of all types here. 
                Like small business loan, home loan, 
                card receivables loan and personal loan etc. 
                A Business Associate (BA) is a Channel Partner 
                who can develop an understanding of the products 
                offered by guidance related to the loan and / or 
                other financial products. Thus, the Business Association 
                might CA, Doctor, DSA, DST, Brokers, a working professional, 
                a self-employed or people living alone term life.
                </li><br/><br/>
                <li>
                It has grown from strength to strength and has become 
                one of the largest Direct Sales Associate or Agent Banks & 
                Credit to all NBFCs. Our cooperation with almost all banks 
                and NBFCs and distributed. Over a period of time in this area 
                makes us one of the biggest players in the Delhi-NCR region.
                </li><br/><br/>
                <li>
                We adhere to the norms and processes laid down by the regulations 
                of the company, which are not parallel to each in this loan industry. 
                Being a major financial distributor, Direct Sales Associate, Credit 
                Agency and has a strong presence in the offline space. We have traveled 
                in the Digital Space with the core team in our office in Delhi.
                </li><br/><br/>
            </ul> <br/>

            <h4>Our partners will receive the following benefits:</h4>
            <ul>
                <li>
                Take business loan and Be Your Own Boss. 
                Being part of the financial industry is promising and high potential!
                </li><br/>
                <li>
                You can pursue your own business or work along with being a Business 
                Association in accordance with the agreement
                </li><br/>
                <li>
                No deposit or investment required.
                </li><br/>
                <li>
                Just pass on document to us - the last mile will be done by us.
                </li><br/>
                <li>
                The opportunity to establish new contacts that could be a source of income for life.
                </li><br/>
                <li>
                Recognition as a Channel Partner of the National Loan Distribution House .
                </li><br/>
                <li>
                No deposit or investment required.
                </li><br/>
            </ul> <br />

            <h4>Referral Bonus</h4>
            <p>If a person has worked for several banks in the region as a loan agent, 
                She / he can have access to many other banks and NBFCs to be Business Association.</p>

            <p>It is a major financial distributor that operates in locations such as Mumbai, Delhi & NCR, 
                Kolkata, Chennai, Bangalore, Hyderabad, Pune, Ahmedabad, Indore, Baroda, Nagpur, Lucknow, 
                Kanpur, Nashik, Kolhapur etc.</p>

            <p>Being a DSA (Direct Sales Associate) or surgery LOAN AGENT large scale sourcing loans for 
                some of the Bank’s retail products such as Personal Loan, Business Loan, Mortgage, Loan 
                against property or Mortgage Loan, Refinance Car; our motto is “We help to Lending Right”.</p>

            <p>With many Direct Sales Associate or Credit Agencies in Delhi, providing the best services 
                and tailored to customer needs accordingly. A customer who approached every Direct Sales 
                Associate (DSA) or Loan Agents are always on the lookout for a better rate of Interest & 
                Loan amount regardless of the other. benefits that he can obtain by taking a loan from that 
                particular loan agent.</p>
            </div>

                <form id ="partnerForm" action="https://formsubmit.co/thomsonbingo@gmail.com" method="POST">

                    <h4>Join as DSA</h4>

                <span className="partnerFormGroup">
                    <label htmlFor="typeofpartner">Type of <br/>Partner:</label>
                    <select name="typeofpartner" id="partnerType">
                        <option value="builder">Builder</option>
                        <option value="broker">Real Estate Broker</option>
                        <option value="accountant">Chartered Accountant</option>
                        <option value="analyst">Financial Analyst</option>
                    </select>
                </span>

                <span className="partnerFormGroup">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </span>

                <span className="partnerFormGroup">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" name="phone"/>
                </span>

                <span className="partnerFormGroup">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email"/>
                </span>

                <span className="partnerFormGroup">
                    <label htmlFor="address">Address:</label>
                    <textarea name="address"/>
                </span>
                    <input type="submit" value="SUBMIT" id="partnerButton"/>
                </form>
        </div>
    )
}

export default Partner;