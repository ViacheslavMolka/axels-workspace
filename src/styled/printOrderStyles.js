import styled from 'styled-components';

import { colors } from './globalConstants';

const Jumbotron = styled.div`
position: relative;
background-color: ${colors.white};
padding: 1rem 1rem 2rem 1rem;
& label {
    font-size: 26px;
    padding-bottom: 20px;
}
& p {
    line-height: 1.2rem;
}
& a {
    color: ${colors.main};
    font-weight: 500;
    font-size: 15px;
}
&:after {
    content: '';
    position: absolute;
    top: -27px;
    left: 0;
    background-color: ${colors.white};
    height: 20px;
    width: 80%;
}
`

export default Jumbotron;
