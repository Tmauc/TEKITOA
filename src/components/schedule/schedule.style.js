import styled from "styled-components";

const HEADER_HEIGHT = 75;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1024px) {
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`
export const ScheduleMainWrapper = styled.div`
  display: flex;
  align-items: center;

  filter: drop-shadow(0px 0px 30px rgba(255,0,0, .1));
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

export const MonthLabel = styled.p`
  font-size: 40px;
  font-family: Montserrat;
  color: white;
  
  @media only screen and (max-width: 1024px) {
    font-size: 15px;
    margin-top: 10px;
  };
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 60vh;
  color: white;
  justify-content: center;
  
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  };
`

export const Arrow = styled.img`
  width: ${(p) => (p.small ? 50 : 100)}px;
  height: ${(p) => (p.small ? 50 : 100)}px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
`

export const ArrowDisabled = styled.img`
  width: ${(p) => (p.small ? 50 : 100)}px;
  height: ${(p) => (p.small ? 50 : 100)}px;
  opacity: .2;
  cursor: not-allowed;
`

export const DayWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  min-width: 120px;
  border: 2px dashed rgba(255, 255, 255, .5);
  background-color: rgba(0, 0, 0, .2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`

export const DayHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  max-height: ${HEADER_HEIGHT}px;

  border-bottom: 2px dashed rgba(255, 255, 255, .5);
  
  @media only screen and (max-width: 1024px) {
    border-bottom: 0;
  };
`

export const DateLabel = styled.p`
  font-size: 20px;
  font-family: Montserrat;
  color: white;

  @media only screen and (max-width: 1024px) {
    font-size: 15px;
  };
`

export const PseudoLabel = styled.p`
  font-family: Norwester;
  font-size: 25px;
  color: #f05183;
  text-shadow: 4px 4px 0px #642d5a;
`

export const MainWrapper = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
  overflow: hidden;
`

export const StreamerImage = styled.img`
  max-height: 80%;
  object-position: center;
`