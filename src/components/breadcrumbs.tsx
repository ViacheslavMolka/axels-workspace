import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb } from 'react-bootstrap';

import { Bread } from '../styled/index';


const Breadcrumbs: React.FC = () => (
    <Bread>
        <LinkContainer to='/shipping/' activeClassName='active' exact>
            <Breadcrumb.Item>Shipping</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to='/shipping/billing/' activeClassName='active' exact>
            <Breadcrumb.Item>Billing</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to='/shipping/billing/payment/' activeClassName='active' exact>
            <Breadcrumb.Item>Payment</Breadcrumb.Item>
        </LinkContainer>
    </Bread>  
);

export default Breadcrumbs;
