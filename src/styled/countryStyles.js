import styled from 'styled-components';

import { colors } from './globalConstants';

const CountryGroup = styled.div`
display: flex;
& select {
    height: 38px;
    border: 1px solid ${colors.borderCountry};
    margin-right: 20px;
    border-radius: 4px;
    color: ${colors.text};
    padding-left: 8px;
    width: 85%; 
}
& select {
    &:active, &:focus {
        outline: none;
    }
}
`

export default CountryGroup;
