import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: #e5e8ff;
}

label {
  color: #7f00ad;
}

&.row {
  justify-content: center;
  margin-top: 50px;
  width: 100%;
}

&.row button {
  background-color: #7f00ad;
  margin-top: 1rem;
  width: 45%;
}

&.col-sm-4 {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px 0 25px;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  max-width: 100%;
  box-shadow: -1px 0 7px rgb(0 0 0 / 10%);
} 

&.col-sm-3 {
  background-color: #f2f4ff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 1px 0px 7px rgb(0 0 0 / 10%);
}

&.mb-3 p {
  display: flex;
  align-items: center;
  color: #6e6e6e;
  font-size: 13px;
  width: 130px;
  margin: 0 10px 0 10px;
}

&.mb-3 svg {
  position: absolute;
  bottom: 12px;
  right: 5px;
}

&.form-control {
  color: #000;
}

&.error {
    background-color: #fff9eb;
}

&.form-control[placeholder] {
  text-overflow: ellipsis;
}

&.form-control::-webkit-inner-spin-button {
  -webkit-appearance: none; 
}





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