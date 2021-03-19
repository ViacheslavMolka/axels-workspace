import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

import { CountryDropdown } from 'react-country-region-selector';
import { CountryGroup } from '../styled/countryStyles';


export default class CountrySelector extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  render () {
    const { country } = this.state;
    return (
      <CountryGroup>
        <CountryDropdown
            classes='country-dropdown'
            defaultOptionLabel='Country'
            value={country}
            onChange={(val) => this.selectCountry(val)} />
        <InputGroup>
            <FormControl type='number' placeholder="ZIP"/>
        </InputGroup>     
      </CountryGroup>
    );
  }
}