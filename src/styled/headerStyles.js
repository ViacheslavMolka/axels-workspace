import styled from 'styled-components';

import { colors } from './globalConstants';

const HeaderWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
justify-content: space-around;
height: 50px;
background-color: ${colors.white}!important;
&:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.5px;
    background-color: ${colors.headerLine};
    width: 100%;
}
& span.navbar-brand span.frontend-text {
    color: ${colors.frontText};
    font-weight: 200;  
    font-size: 20px; 
}
& span.navbar-brand span.cart-text {
    color: ${colors.cartText};
    font-weight: 400;
    margin-right: 5px;
    font-size: 20px;
}
& span.navbar-brand {
    position: relative;
}
& span.navbar-brand span.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: ${colors.white};
    font-size: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${colors.circle};
    top: 6px;
    right: -7px;
}
`

export default HeaderWrapper;
