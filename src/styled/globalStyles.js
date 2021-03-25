import { createGlobalStyle } from 'styled-components';

import { colors } from './globalConstants';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background: ${colors.background};
}

label {
  color: ${colors.main};
}

&.row {
  justify-content: center;
  margin-top: 50px;
  width: 100%;
}

&.row button {
  background-color: ${colors.main};
  margin-top: 1rem;
  width: 45%;
}

&.col-sm-4 {
  background-color: ${colors.white};
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
  background-color: ${colors.order};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 1px 0px 7px rgb(0 0 0 / 10%);
}

&.mb-3 p {
  display: flex;
  align-items: center;
  color: ${colors.text};
  font-size: 13px;
  width: 130px;
  margin: 0 10px 0 10px;
}

&.mb-3 svg {
  position: absolute;
  bottom: 12px;
  right: 5px;
}

&.pop {
  color: red;
}

&.form-control {
  color: ${colors.black};
}

&.error {
  background-color: ${colors.formErr};
}

&.form-control[placeholder] {
  text-overflow: ellipsis;
}

&.form-control::-webkit-inner-spin-button {
  -webkit-appearance: none; 
}
`

export default GlobalStyle;
