import styled from 'styled-components';

import { colors } from './globalConstants';

const Bread = styled.ol`
display: flex;
list-style: none;
background-color: ${colors.white};
font-size: 13px;
margin-block-end: 0;
padding-inline-start: 0;
padding: 0;
margin-bottom: 10px;
align-items: flex-start;
& a {
    color: ${colors.text};
    text-decoration: none;
}
& li.active a{
    color: ${colors.main};
    font-weight: 500;
}
`

export default Bread;
