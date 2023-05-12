import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NAVBAR_HEIGHT = 120;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  padding: 40px 65px;

  background-color: transparent;
`;

export const WrapperBorder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const NavBarUl = styled.ul`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-family: Montserrat;
  color: white;
  text-decoration: none;

  & > * {
    margin-right: 8px;
  }

  ${(p) => {
    if (p.active === 'true') {
      return css`
        text-shadow: 2px 2px 0px #642d5a;
        color: #f05183;
      `;
    }
  }};

  ${(p) => {
    if (p.disabled) {
      return css`
        color: rgba(100, 100, 100, 0.4);
        cursor: not-allowed;
      `;
    }
  }};

  &:hover {
    color: #642d5a;
  }
`;