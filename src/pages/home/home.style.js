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

export const SectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleStyle = css`
  font-size: ${(p) => (p.isMobile ? 90 : 250)}px;
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

export const LabelStyle = css`
  font-size: ${(p) => (p.isMobile ? 15 : 40)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
`;
