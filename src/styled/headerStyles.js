import styled from 'styled-components';

export const HeaderWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
justify-content: space-around;
height: 50px;
background-color: #ffffff!important;
&:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 0.5px;
    background-color: #f6c;
    width: 100%;
}
& span.navbar-brand span.frontend-text {
    color: #7f00ad;
    font-weight: 200;
    @media (max-width: 520px) {
        font-size: 14px
    }
}
& span.navbar-brand span.cart-text {
    color: #cf4dff;
    font-weight: 400;
    margin-right: 5px;
    @media (max-width: 520px) {
        font-size: 14px
    }
}
& span.navbar-brand {
    position: relative;
}
& span.navbar-brand span.circle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    color: #ffffff;
    font-size: 10px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #e00d73;
    top: 6px;
    right: -7px;
}
`;