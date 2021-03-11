import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { InputGroup, FormControl } from 'react-bootstrap';


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
      <div className='country-group'>
        <CountryDropdown
            classes='country-dropdown'
            defaultOptionLabel='Country'
            value={country}
            onChange={(val) => this.selectCountry(val)} />
        <InputGroup>
            <FormControl placeholder="ZIP"/>
        </InputGroup>     
      </div>
    );
  }
}