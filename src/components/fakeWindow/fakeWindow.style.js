import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-2px);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 0;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0, .8));
  cursor: pointer;

  &:hover {
    filter: drop-shadow(5px 5px 1px rgba(0,0,0, .8));
    transition: all 0.3s ease-in-out;
  }

  animation-name: ${float};
  animation-duration: ${(p) => p.duration}s;
  animation-iteration-count: infinite;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: ${(p) => p.width + 'px'};
  padding: 0px 10px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 4px;
  }
`;

export const SquareIcon = styled.img``;

export const Type = styled.p``;

export const HeaderMiddle = styled.div`
  display: flex;
  text-align: center;
  white-space: nowrap;
`;

export const Title = styled.p``;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.img``;

export const Main = styled.div`
  display: flex;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: ${(p) => p.width + 'px'};
  height: ${(p) => p.height + 'px'};
`;

export const StreamerPseudo = styled.p`
  text-align: center;
  font-size: 30px;
  font-family: Montserrat;
  color: white;
`;

export const ComingSoon = styled.p`
  text-align: center;
  font-size: 40px;
  font-family: Montserrat;
  color: white;
`;

export const Iframe = styled.iframe`
  border: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const StreamerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StreamerPP = styled.img`
  width: 70px;
  height: 70px;

  margin: 0 16px;
`;
