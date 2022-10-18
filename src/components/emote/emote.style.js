import { css, keyframes } from 'styled-components';

const x = keyframes`
	100% {
		transform: translateX( calc(100vw - 100px) );
	}
`;

const y = keyframes`
	100% {
		transform: translateY( calc(100vh - 200px) );
	}
`;

export const EmoteWrapperStyle = css`
  animation: ${x} ${p => p.randomX}s linear infinite alternate;
`;

export const EmoteStyle = css`
  position: fixed;
  top: ${(p) => (p.small ? 10 : -10)}px;
  left: ${(p) => (p.small ? 0 : -80)}px;

  width: ${(p) => (p.small ? 40 : 80)}px;
  height: ${(p) => (p.small ? 40 : 80)}px;
  filter: drop-shadow(0px 0px 10px #000000);
  transform: translatey(0px);
  animation: ${y} ${p => p.randomY}s  linear infinite alternate;
`;
