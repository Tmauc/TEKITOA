import { css } from 'styled-components';

export const WrapperStyle = css`
  z-index: 0;
  filter: drop-shadow(5px 5px 5px rgba(0,0,0, .8));
  cursor: pointer;

  &:hover {
    filter: drop-shadow(5px 5px 1px rgba(0,0,0, .8));
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: ${(p) => p.width + 'px'};
  padding: 0px 10px;
  background-color: rgba(217, 217, 217, 0.3);
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(p) => (p.isMobile ? 10 : 16)}px;
`;

export const HeaderLeftStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 4px;
  }
`;

export const SquareIconStyle = css``;

export const TypeStyle = css``;

export const HeaderMiddleStyle = css`
  display: flex;
  text-align: center;
  white-space: nowrap;
`;

export const TitleStyle = css``;

export const HeaderRightStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIconStyle = css``;

export const MainStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(217, 217, 217, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: ${(p) => p.width + 'px'};
  height: ${(p) => p.height + 'px'};
`;

export const StreamerPseudoStyle = css`
  text-align: center;
  font-size: ${(p) => (p.isMobile ? 20 : 30)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
`;

export const ComingSoonStyle = css`
  text-align: center;
  font-size: ${(p) => (p.isMobile ? 30 : 40)}px;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
`;

export const IframeStyle = css`
  border: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
