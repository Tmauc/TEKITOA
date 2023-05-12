import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const NAVBAR_MOBILE_HEIGHT = 77;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: ${NAVBAR_MOBILE_HEIGHT}px;
  padding: 0px 30px 15px 30px;

  background: linear-gradient(270deg, #07143B 0%, #33226D 49.35%, #07143B 100%);
`;

export const WrapperBorder = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 120px;
  height: 120px;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const CloseImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Menuleft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const MenuIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MenuLogo = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 10 !important;
`;

export const NavBarUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 30px;
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

  &:hover:enabled {
    color: #642d5a;
  }
`;