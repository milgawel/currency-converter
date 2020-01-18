import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';
import LogoIcon from 'assets/logo.png';
import DropdownNavbar from 'components/DropdownNavbar/DropdownNavbar';

const Navigation = styled.div`
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  background-image: linear-gradient(to bottom right, #1169e1, #87ceeb);
  @media (max-width: 920px) {
    height: 55px;
  }
`;

const Logo = styled(NavLink)`
  display: block;
  width: 250px;
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  background-size: 260px 50px;
  margin: 10px auto;
  margin-left: 40px;
  border: none;
  @media (max-width: 920px) {
    width: 200px;
    height: 50px;
    background-size: 205px 40px;
    margin: 7px auto;
    margin-left: 25px;
  }

  @media (max-width: 719px) {
    width: 200px;
    height: 40px;
    background-size: 170px 35px;
    margin-top: 10px;
    margin-left: 0px;
    padding: 0px 0;
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  padding-right: 4vw;
  list-style: none;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  @media (max-width: 719px) {
    display: none;
  }
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
      <DropdownNavbar />
    </Navigation>
  );
};

export default NavBar;
