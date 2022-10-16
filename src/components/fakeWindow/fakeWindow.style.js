import { css } from 'styled-components';

export const WrapperStyle = css``;

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
  width: ${(p) => p.width + 'px'};
  padding: 0px 10px;
  background-color: rgba(217, 217, 217, 0.5);
  color: rgba(255, 255, 255, 0.5);
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
  background: rgba(217, 217, 217, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.2);
  width: ${(p) => p.width + 'px'};
  height: ${(p) => p.height + 'px'};
`;

export const IframeStyle = css`
  border: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
