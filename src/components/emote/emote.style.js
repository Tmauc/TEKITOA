import { css, keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
`

export const EmoteStyle = css`
  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 0px 10px #000000);
  transform: translatey(0px);
  animation-name: ${float};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`