import { css } from 'styled-components';

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(p) => (p.isMobile ? 30 : 80)}px;
  max-width: 80vw;
`;

export const HeaderLeftWrapperStyle = css`
  display: flex;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

export const TitleLinkStyle = css`
  cursor: pointer;
  font-size: ${(p) => (p.isMobile ? 40 : 100)}px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`;

export const HeaderRightWrapperStyle = css`
  display: flex;
  align-items: center;
`;

export const BackIconStyle = css`
  width: ${(p) => (p.small ? 50 : 100)}px;
  height: ${(p) => (p.small ? 50 : 100)}px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
  z-index: 0;
`;
