import { css, keyframes } from 'styled-components';

const glowRed = keyframes`
  0% {
    filter: drop-shadow(0px 0px 1px rgba(255,0,0, 1));
	}
	50% {
    filter: drop-shadow(0px 0px 7px rgba(255,0,0, 1));
	}
	100% {
    filter: drop-shadow(0px 0px 1px rgba(255,0,0, 1));
	}
`;

export const StatusStyle = css`
  width: ${(p) => (p.small ? 20 : 55)}px;
  height: ${(p) => (p.small ? 20 : 55)}px;
  border-radius: 100%;
  background-color: ${(p) => (p.onlive ? '#BE1313' : '#898686')};
  filter: drop-shadow(0px 0px 1px rgba(255,0,0, 1));
  animation-name: ${glowRed};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;
