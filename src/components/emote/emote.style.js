import styled, { keyframes } from 'styled-components';

const xbis = keyframes`
	100% {
		transform: translateX( calc(100vw - 50px) );
	}
`;

const x = keyframes`
	100% {
		transform: translateX( calc(100vw - 100px) );
	}
`;

const y = keyframes`
	100% {
		transform: translateY( calc(100vh - 100px) );
	}
`;

export const EmoteWrapper = styled.div`
  animation: ${x} ${p => p.randomX}s linear infinite alternate;
  @media only screen and (max-width: 1024px) {
    animation: ${xbis} ${p => p.randomX}s linear infinite alternate;
  }
`;

export const EmoteImg = styled.img`
  position: fixed;
  top: 0;
  left: 0;

  width: 80px;
  height: 80px;
  filter: drop-shadow(0px 0px 10px #000000);
  transform: translatey(0px);
  animation: ${y} ${p => p.randomY}s linear infinite alternate;

  @media only screen and (max-width: 1024px) {
    top: 80px;
    left: 0px;

    width: 40px;
    height: 40px;
  }
`;
