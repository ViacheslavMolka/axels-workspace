import styled from 'styled-components';

import { colors } from './globalConstants';

export const TextLabel = styled.label`
color: ${colors.main};
font-size: 27px;
padding: 26px 0 0 0;
`

export const PaymentWrapper = styled.div`
padding-bottom: 20px;
& label {
    color: ${colors.main};
    font-size: 27px;
    padding: 26px 0 0 0;
}
& p {
    color: ${colors.orderText};
    font-size: 14px;
}
`
