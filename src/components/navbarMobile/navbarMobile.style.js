import { css } from 'styled-components';

export const WrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 0px 50px 15px 50px;
  border-top: 2px solid #ffff;

  background: linear-gradient(
    117.13deg,
    #051439 0.44%,
    #3b2570 53.85%,
    #383572 85.16%
  );
`;

export const WrapperBorderStyle = css`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyle = css`
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

export const CloseImgStyle = css`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

export const MenuleftStyle = css`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;

export const MenuIconStyle = css`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MenuLogoStyle = css`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-top: 10px;
`;

export const MenuWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const NavBarUlStyle = css`
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

export const NavLinkStyle = css`
  display: flex;
  align-items: center;
  font-size: 50px;
  font-family: Montserrat;
  color: white;
  text-decoration: none;

  & > * {
    margin-right: 8px;
  }

  ${(p) => {
    if (p.isCurrent) {
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

export const PhraseButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 60px;
  margin-left: 5%;

  background-color: transparent;
  border: 2px solid white;
  border-top-width: 0px;
  border-radius: 0px 0px 7px 7px;

  font-size: 15px;
  font-family: Montserrat;
  color: white;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    img {
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
`;

export const PlayIconStyle = css`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
