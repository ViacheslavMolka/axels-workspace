import { createGlobalStyle } from 'styled-components';
import { device } from './globalConstants';

const GlobalMediaStyle = createGlobalStyle`
&.app {
    @media ${device.desktop} {
        width: 100%;   
    }
    @media ${device.laptopL} {
        width: 80%;
    }
    @media ${device.laptop} {
        width: 85%;
    }
    @media ${device.tablet} {
        width: 80%;
    }
    @media ${device.mobile} {
        width: 100%;
    }
}

& body .row {    
    @media ${device.desktop} {
        width: 85%;
    }
    @media ${device.laptop} {
        width: 100%;
    }
    @media ${device.tablet} {
        width: 80%;
        display: block;
        margin: 0 auto;
        margin-top: 50px;
    }
    @media ${device.mobile} {
        width: 90%;
    }
}

& body .col-sm-4 {
    @media ${device.laptop} {
        border-radius: 0;
        padding: 0px 15px 0px 15px;
    }
    @media ${device.tablet} {
        padding: 10px 15px 20px 15px;
        border-radius: 0;
    }
}

& body .col-sm-3 {
    @media ${device.laptop} {
        max-width: 100%;
        border-radius: 0;
    }
}

&.mb-3 p {
    @media ${device.laptopL} {
        width: 80px;
        font-size: 11px;
    }
}

& a.billing-link {
    @media ${device.desktop} {
        font-size: 17px;
    }
    @media ${device.laptopL} {
        padding-left: 15px;
    }
    @media ${device.laptop} {
        font-size: 15px;
    }
    @media ${device.tablet} {
        margin-bottom: 8px;
    }
    @media ${device.mobile} {
        font-size: 13px;
    }
}

& div.header span.navbar-brand .frontend-text {
    @media ${device.desktop} {
        font-size: 25px;   
    }
    @media ${device.mobile} {
        font-size: 16px;
    }
}

& div.header span.navbar-brand .cart-text {
    @media ${device.desktop} {
        font-size: 25px;   
    }
    @media ${device.mobile} {
        font-size: 16px;
    }
}

&.security-code {
    @media ${device.laptopL} {
        padding-right: 40px;
    }
}  

& body .row button.pay-btn {
    @media ${device.desktop} {
        width: 45%;
    }
    @media ${device.laptopL} {
        width: 50%;
    }
    @media ${device.laptop} {
        width: 50%;
    }
} 

&.bottom-wrapp {
    @media ${device.mobile} {
        height: 200px;
    }
}
`

export default GlobalMediaStyle;
