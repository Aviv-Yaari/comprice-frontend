import { Button } from '@mui/material';
import React from 'react';
import { NavbarContainer, NavItem } from './Navbar.styled';

interface Props {
  toggleRTL: React.MouseEventHandler<HTMLButtonElement>
}

const Navbar: React.FC<Props> = ({ toggleRTL }) => {
  return (
    <NavbarContainer>
      <NavItem>Home</NavItem>
      <NavItem>Products</NavItem>
      <NavItem>TBD</NavItem>
      <NavItem>TBD</NavItem>
      <NavItem>TBD</NavItem>
      <Button onClick={toggleRTL}>RTL</Button>
    </NavbarContainer>
  );
};

export default Navbar;
