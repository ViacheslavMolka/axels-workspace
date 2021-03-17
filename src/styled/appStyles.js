import styled, { createGlobalStyle } from 'styled-components';

export const AppWrapper = styled.div`
display: flex;
width: 60%;
flex-direction: column;
align-items: center;
margin: 0 auto;
@media (max-width: 1200px) {
  width: 80%;
}
@media (max-width: 992px) {
  width: 75%;
}
@media (max-width: 767px) {
  width: 80%;
}
@media (max-width: 520px) {
  width: 100%;
}
`;

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
  @media (max-width: 992px) {
    width: 80%;
    display: block;
    margin: 0 auto;
    margin-top: 50px;
  }
  @media (max-width: 520px) {
    width: 90%;
  }
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
  @media (max-width: 992px) {
    border-radius: 0;
    padding: 10px 15px 30px 15px;
  }
} 

&.col-sm-3 {
  background-color: #f2f4ff;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 1px 0px 7px rgb(0 0 0 / 10%);
  @media (max-width: 992px) {
    max-width: 100%;
    border-radius: 0;
  }
}

&.mb-3 p {
  display: flex;
  align-items: center;
  color: #6e6e6e;
  font-size: 13px;
  width: 130px;
  margin: 0 10px 0 10px;
  @media (max-width: 1200px) {
    width: 80px;
    font-size: 11px;
  }
}

&.mb-3 svg {
  position: absolute;
  bottom: 12px;
  right: 5px;
}

&.form-control {
  color: #000;
}

&.form-control[placeholder] {
  text-overflow: ellipsis;
}
.form-control::-webkit-inner-spin-button {
  -webkit-appearance: none; 
}
`