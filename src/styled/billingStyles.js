import styled from 'styled-components';

import { colors } from './globalConstants';

const BillingTitle = styled.div`
display: flex;
justify-content: space-between;
& a{
    display: flex;
    color: ${colors.main};
    align-items: center;
    text-align: center;
    font-size: 13px;
    padding: 26px 0 16px 0;
}
`

export default BillingTitle;
