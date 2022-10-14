import { css } from 'styled-components';

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.isMobile ? 30 : 80}px;
`

export const HeaderLeftWrapperStyle = css`
  display: flex;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
  h1 {
    font-size: ${p => p.isMobile ? 50 : 100}px;
  }
`

export const HeaderRightWrapperStyle = css`
  display: flex;
  align-items: center;
`

export const BackIconStyle = css`
  width: ${p => p.small ? 50 : 100}px;
  height: ${p => p.small ? 50 : 100}px;
  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  cursor: pointer;
`