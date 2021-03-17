import styled from 'styled-components';

export const Bread = styled.ol`
display: flex;
list-style: none;
background-color: #ffffff;
font-size: 13px;
margin-block-end: 0;
padding-inline-start: 0;
padding: 0;
margin-bottom: 10px;
align-items: flex-start;
& a {
    color: #6e6e6e;
    text-decoration: none;
}
& li.active a{
    color: #7f00ad;
    font-weight: 500;
}
`