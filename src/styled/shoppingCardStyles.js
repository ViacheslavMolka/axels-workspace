import styled from 'styled-components';

export const MainTitle = styled.label`
font-size: 27px;
color: #7f00ad;
padding: 20px 0 16px 0;
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const RouteWrapper = styled.div`
height: 90%;
& button.pay-btn {
    margin-top: 1.5rem;
    width: 55%; 
}
& form div.form-row {
    display: flex;
    align-items: flex-end;
} 
& form div.form-row div.expire-date {
    padding-right: 15px;
}
& form div.form-row div.security-code {
    padding-right: 55px;
}    
`