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

export const ConditionsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: Montserrat;
  color: white;
  padding-bottom: 100px;
  & > *:not(:last-child) {
      padding: 5px 0px;
  }

  h2 {
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      font-size: 12px;
    }

    p {
      font-size: 8px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 300px;
  height: 300px;
  align-self: center;
  justify-content: center;
  filter: drop-shadow(5px 5px 1px rgba(0,0,0, .4));
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;