import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1em;
  background: rgb(17, 24, 39);
  padding: 1em 2em;
`;

export const NavItem = styled.span`
  color: rgb(209, 213, 219);
  padding: 0.5em 1em;
  transition: color 250ms, background-color 250ms;
  font-weight: 500;

  &:hover {
    color: rgb(16, 185, 129);
    background: rgba(255, 255, 255, 0.08);
  }
`;
