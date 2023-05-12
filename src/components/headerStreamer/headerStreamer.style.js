import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  max-width: 80vw;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const TitleLink = styled.h1`
  cursor: pointer;
  font-size: 100px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 60px;
  }
`;

export const AudioText = styled.p`
  font-family: Montserrat;
  color: white;
  font-size: 18px;
  white-space: nowrap;
`;

export const P = styled.p`
  font-size: 25px;
  white-space: nowrap;
`;

export const WrapperAudio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 10vw;
  height: 100%;

  & > *:not(:last-child) {
    margin-right: 18px;
  }
`;