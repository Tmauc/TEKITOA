import { css } from 'styled-components';

export const NAVBAR_HEIGHT = 112;

export const WrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;

  height: ${NAVBAR_HEIGHT}px;
  width: 100%;
  padding: 15px 50px;
  `

export const WrapperBorderStyle = css`
  border-top: 2px solid #FFFF;
  display: flex;
`

export const NavBarUlStyle = css`
  display: flex;
  align-items: center;

  padding-top: 15px;

  & > *:not(:last-child) {
    margin-right: 25px;
  }

  img {
    width: 65px;
    height: 65px;
    cursor: pointer;
  }
`

export const NavLinkStyle = css`
  font-size: 20px;
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

  width: 200px;
  height: 50px;
  margin-left: 10%;

  background-color: transparent;
  border: 2px solid white;
  border-top-width: 0px;
  border-radius: 0px 0px 7px 7px;

  font-size: 20px;
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
  width: 32px;
  height: 32px;
  margin-right: 8px;
`