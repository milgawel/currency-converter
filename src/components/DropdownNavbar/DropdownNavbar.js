import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.div``;

const Button = styled.i`
  height: 50px;
  font-size: 40px;
  color: white;
  margin-right: 40px;
  margin-top: auto;
`;

class DropDownNavbar extends Component {
  state = {
    active: false,
  };

  handleChange = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <Navigation>
        <Button onClick={this.handleChange}>
          {!this.state.active ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}
        </Button>
      </Navigation>
    );
  }
}

export default DropDownNavbar;
