import { css } from 'styled-components';

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`

export const HeaderLeftWrapperStyle = css`
  display: flex;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

export const HeaderRightWrapperStyle = css`
  display: flex;
`

export const BackIconStyle = css`
  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  cursor: pointer;
`