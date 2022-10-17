import { css } from "styled-components";

const HEADER_HEIGHT = 75;

export const WrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: ${p => p.isMobile ? 10 : 20}px;
  }
`
export const ScheduleMainWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 0px 30px rgba(255,0,0, .1));
  
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

export const MonthLabelStyle = css`
  font-size: ${(p) => (p.isMobile ? 15 : 40)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
`;

export const ScheduleWrapperStyle = css`
  display: flex;
  width: 80vw;
  height: 60vh;
  color: white;
  ${p => {
    if (p.isMobile) {
      return css`
        flex-direction: column;
      `
    } else {
      return css`
        justify-content: center;
      `
    }
  }}
`

export const ArrowRearwardStyle = css`
  width: ${(p) => (p.small ? 50 : 100)}px;
  height: ${(p) => (p.small ? 50 : 100)}px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
`

export const ArrowForwardStyle = css`
  width: ${(p) => (p.small ? 50 : 100)}px;
  height: ${(p) => (p.small ? 50 : 100)}px;
  transform: scaleX(-1);
  &:hover {
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
`

export const DayWrapperStyle = css`
  width: 100%;
  max-width: 320px;
  border: 2px dashed rgba(255, 255, 255, .5);
  background-color: rgba(0, 0, 0, .2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`

export const DayHeaderWrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  max-height: ${HEADER_HEIGHT}px;

  ${p => {
    if (!p.isMobile) {
      return css`
          border-bottom: 2px dashed rgba(255, 255, 255, .5);
      `
    }
  }}
`

export const DateLabelStyle = css`
  font-size: ${(p) => (p.isMobile ? 15 : 20)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
`

export const PseudoLabelStyle = css`
  font-family: Norwester;
  font-size: 25px;
  color: #f05183;
  text-shadow: 4px 4px 0px #642d5a;
`

export const MainWrapperStyle = css`
  position:relative;
  display: flex;
  height: 100%;
  height: calc(100% - ${HEADER_HEIGHT}px);
`

export const StreamerImageStyle = css`
  position:absolute;
  right:0;
  bottom:0;
  max-width: 100%;
  max-height: 100%;
`