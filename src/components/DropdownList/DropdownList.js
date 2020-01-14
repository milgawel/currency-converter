import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styled from 'styled-components';

const List = styled(Dropdown)`
  width: 100%;
`;

class DropdownList extends Component {
  render() {
    return (
      <>
        <List
          options={this.props.options}
          onChange={this.props.change}
          value={this.props.value}
          placeholder="Wybierz walutę"
        />
      </>
    );
  }
}

export default DropdownList;
