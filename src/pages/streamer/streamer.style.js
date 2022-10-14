import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
    padding: 20px 100px;
    padding-bottom: ${NAVBAR_HEIGHT}px;
`

export const MainStyle = css`
  display: flex;
  height: 70vh;
`

export const LeftWrapperStyle = css`
  height: 100%;
  width: 60%;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const RediffWrapperStyle = css`
  margin-top: 100px;
`