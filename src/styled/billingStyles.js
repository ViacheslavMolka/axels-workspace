import styled from 'styled-components';

export const BillingTitle = styled.div`
display: flex;
justify-content: space-between;
& a{
    display: flex;
    color: #7f00ad;
    align-items: center;
    text-align: center;
    font-size: 13px;
    padding: 26px 0 16px 0;
    @media (max-width: 1200px) {
        padding-left: 15px;
    }
    @media (max-width: 768px) {
        margin-bottom: 8px;
    }
}
`