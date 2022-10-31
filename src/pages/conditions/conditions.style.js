import { css, keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.03);
	}
	100% {
		transform: scale(1);
	}
`;

export const ConditionsStyle = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
  & > *:not(:last-child) {
      padding: 5px 0px;
  }

  h2 {
    font-size: ${(p) => (p.isMobile ? 12 : 16)}px;
  }
  p {
    font-size: ${(p) => (p.isMobile ? 8 : 12)}px;
  }
`;

export const LogoStyle = css`
  width: 300px;
  height: 300px;
  align-self: center;
  justify-content: center;
  filter: drop-shadow(5px 5px 1px rgba(0,0,0, .4));
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;