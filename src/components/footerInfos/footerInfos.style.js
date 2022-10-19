import { css } from 'styled-components';

export const WrapperStyle = css`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, .2);
  width: 100%;
  height: ${p => p.isMobile ? 10 : 20}px;
`;

export const CopyrightStyle = css`
  font-size: ${(p) => (p.isMobile ? 8 : 10)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
  a{
    color: white;
  }
`;