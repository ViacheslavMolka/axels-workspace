import React from 'react';
import { Jumbotron } from '../styled/index';

import { BillingInitialValues } from './types';


const PrintOrder = () => {
    const billing: BillingInitialValues = JSON.parse(localStorage.getItem('formBillingData')!);

    return (   
        <Jumbotron>
            <label>Thank you for you order!</label>
            <p>
                <strong>Order number is: 188787788</strong>
            </p>
            <p>
                Your will recieve an email confirmation<br/> 
                shorty to <a href='/#'>{billing ? billing.email : 'Email is not specified!'}</a>
            </p>
            <p>
                Estimated delivery Day is<br/>
                <strong> Friday 1st April 2016</strong>
            </p>           
            <a href='/#'>Print Recipe</a>
        </Jumbotron>    
    )
};

export default PrintOrder;
