import styled from 'styled-components';

export const CountryGroup = styled.div`
display: flex;
& select {
    height: 38px;
    border: 1px solid #cfcfcf;
    margin-right: 20px;
    border-radius: 4px;
    color: #707070;
    padding-left: 8px;
    width: 85%; 
}
& select {
    &:active, &:focus {
        outline: none;
    }
}
`