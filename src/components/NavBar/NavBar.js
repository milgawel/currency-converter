import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import LogoIcon from 'assets/logo.png';

const Navigation = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);
`;

const Logo = styled(NavLink)`
  display: block;
  width: 250px;
  height: 10vh;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-size: 110%;
  margin: 1vh 50px;
  border: none;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 4vw;
  list-style: none;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const NavBar = () => {
  return (
    <Navigation>
      <Logo to="/" />
      <NavList>
        <li>
          <ButtonIcon exact as={NavLink} to="/">
            O stronie
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/check">
            kursy walut
          </ButtonIcon>
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/convert">
            kalkulator
          </ButtonIcon>
        </li>
      </NavList>
    </Navigation>
  );
};

export default NavBar;
