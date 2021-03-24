import { createGlobalStyle } from 'styled-components';

const GlobalMediaStyle = createGlobalStyle`
&.app {
    @media (min-width: 2550px) and (max-width: 2786px) {
        width: 100%!important;   
    }
    @media (max-width: 1200px) {
        width: 80%!important;
    }
    @media (max-width: 992px) {
        width: 75%!important;
    }
    @media (max-width: 767px) {
        width: 80%!important;
    }
    @media (max-width: 520px) {
        width: 100%!important;
    }
}

&.row {    
    @media (min-width: 2550px) and (max-width: 2786px) {
        width: 2000px;   
    }
    @media (max-width: 992px) {
        width: 80%!important;
        display: block;
        margin: 0 auto;
        margin-top: 50px;
    }
    @media (max-width: 520px) {
        width: 90%!important;
    }
}

&.col-sm-4 {
    @media (max-width: 992px) {
        border-radius: 0;
        padding: 10px 15px 30px 15px;
    }
}

&.col-sm-3 {
    @media (max-width: 992px) {
        max-width: 100%;
        border-radius: 0;
    }
}

&.mb-3 p {
    @media (max-width: 1200px) {
        width: 80px;
        font-size: 11px;
    }
}

&.breadcrumb-item {
    @media (min-width: 2550px) and (max-width: 2786px) {
        font-size: 20px;   
    }
}

&.billing-link {
    @media (max-width: 1200px) {
        padding-left: 15px;
    }
    @media (max-width: 768px) {
        margin-bottom: 8px;
    }
}

&.navbar-brand span.frontend-text, span.cart-text {
    @media (min-width: 2550px) and (max-width: 2786px) {
        font-size: 25px;   
    }
    @media (max-width: 520px) {
        font-size: 14px
    }
}

&.security-code {
    @media (max-width: 1200px) {
        padding-right: 40px;
    }
}  

&.pay-btn {
    @media (max-width: 1200px) {
        width: 63%!important;
    }
    @media (max-width: 992px) {
        width: 50%!important;
    }
} 

&.bottom-wrapp {
    @media (max-width: 520px) {
        height: 200px;
    }
}
`

export default GlobalMediaStyle;