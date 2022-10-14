import React from 'react';
import { NavbarContainer, NavItem } from './Navbar.styled';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavItem>Home</NavItem>
      <NavItem>Products</NavItem>
      <NavItem>TBD</NavItem>
      <NavItem>TBD</NavItem>
      <NavItem>TBD</NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
