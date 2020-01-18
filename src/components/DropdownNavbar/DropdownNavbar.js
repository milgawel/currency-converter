import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
  @media (max-width: 719px) {
    display: block;
    right: 200px;
  }
`;

const Burger = styled.i`
  position: absolute;
  display: block;
  height: 50px;
  font-size: 40px;
  color: white;
  margin-top: 5px;
  right: -20px;
  margin-right: 60px;
`;

const ButtonIcon = styled.button`
  display: block;
  padding: 5px 10px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2em;
  padding: 0.2em;
  margin-left: 3vw;
  margin-top: 0.6em;
  color: white;
  border-bottom: 2.5px solid transparent;
`;

const NavList = styled.ul`
  background-image: linear-gradient(to bottom right, #2a84f9, #87ceeb);
  right: ${props => (props.active ? '0' : '-200px')};
  top: 54px;
  width: 200px;
  height: 150px;
  border: 4px solid white;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  list-style: none;
  position: relative;
  z-index: 999;
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
        <Burger onClick={this.handleChange} active={this.state.active}>
          {!this.state.active ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}
        </Burger>
        <NavList active={this.state.active}>
          <li>
            <ButtonIcon exact as={NavLink} to="/" onClick={this.handleChange}>
              O stronie
            </ButtonIcon>
          </li>
          <li>
            <ButtonIcon as={NavLink} to="/check" onClick={this.handleChange}>
              kursy walut
            </ButtonIcon>
          </li>
          <li>
            <ButtonIcon as={NavLink} to="/convert" onClick={this.handleChange}>
              kalkulator
            </ButtonIcon>
          </li>
        </NavList>
      </Navigation>
    );
  }
}

export default DropDownNavbar;
