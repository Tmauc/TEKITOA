import { css } from 'styled-components';

export const WrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 15px 50px;
  `

export const WrapperBorderStyle = css`
  border-top: 2px solid #FFFF;
  display: flex;

  align-items: center;
`

export const LogoStyle = css`
  width: 120px;
  height: 120px;
  cursor: pointer;

`

export const CloseImgStyle = css`
  width: 100px;
  height: 100px;
  cursor: pointer;

`

export const MenuIconStyle = css`
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-top: 15px;
`

export const MenuWrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
`

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
`

export const NavLinkStyle = css`
  font-size: 50px;
  font-family: Montserrat;
  color: white;
  text-decoration: none;

  ${p => {
    if (p.isCurrent) {
      return `
        text-shadow: 2px 2px 0px #642D5A;
        color: #F05183;
      `
    }
  }};

  &:hover {
    color: #642d5a;
  }
`

export const PhraseButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 150px;
  height: 50px;
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
    transition: all .2s ease-in-out;
    img {
      transform: scale(1.2);
    transition: all .2s ease-in-out;
    }
  }
`

export const PlayIconStyle = css`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`