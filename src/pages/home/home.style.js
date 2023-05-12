import styled, { keyframes } from 'styled-components';

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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 250px;
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
  white-space: nowrap;

  @media only screen and (max-width: 1024px) {
    font-size: 80px;
    margin-bottom: 50px;
  }
`;

export const Label = styled.h2`
  font-size: 40px;

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
    margin-bottom: 60px;
    text-align: center;
  }
`;

export const LabelTmp = styled.h3`
  margin-top: 20px;
  font-size: 20px;

  @media only screen and (max-width: 1024px) {
    font-size: 15px;
    text-align: center;
  }
`;

export const AudioText = styled.p`
  font-family: Montserrat;
  color: white;
  font-size: 18px;
  white-space: nowrap;
`;

export const WrapperAudio = styled.div`
  position: fixed;
  bottom: 100px;
  right: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 18px;
  }

  @media only screen and (max-width: 1024px) {
    position: initial;
  }
`;