import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
  @media (max-width: 719px) {
    display: block;
  }
`;

const Button = styled.i`
  position: absolute;
  display: block;
  height: 50px;
  font-size: 40px;
  color: white;
  margin-top: 5px;
  right: -20px;
  margin-right: ${props => (!props.active === true ? '60px' : '240px')};
  transition: height 0.25s linear;
`;

const NavList = styled.ul`
  background-image: linear-gradient(to bottom right, #2a84f9, #87ceeb);
  position: absolute;
  right: ${props => (props.active ? '0' : '-200px')};
  top: 0;
  width: 200px;
  height: 400px;
  border: 4px solid white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

class DropDownNavbar extends Component {
  state = {
    active: true,
  };

  handleChange = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  render() {
    return (
      <Navigation>
        <Button onClick={this.handleChange} active={this.state.active}>
          {!this.state.active ? <i class="fas fa-bars"></i> : <i class="fas fa-times"></i>}
        </Button>

        <NavList active={this.state.active}></NavList>
      </Navigation>
    );
  }
}

export default DropDownNavbar;
