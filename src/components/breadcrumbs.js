import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Bread } from '../styled/breadcrumbStyles';

const Breadcrumbs = () => (
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