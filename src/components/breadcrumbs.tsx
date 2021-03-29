import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb } from 'react-bootstrap';

import { Bread } from '../styled/index';


const Breadcrumbs: React.FC = () => (
    <Bread>
        <LinkContainer to='/shipping/' activeClassName='active'>
            <Breadcrumb.Item>Shipping</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to='/billing/' activeClassName='active'>
            <Breadcrumb.Item>Billing</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to='/payment/' activeClassName='active'>
            <Breadcrumb.Item>Payment</Breadcrumb.Item>
        </LinkContainer>
    </Bread>  
);

export default Breadcrumbs;
