import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
  padding: ${p => p.isMobile ? '10px 30px' : '20px 100px'};
  padding-bottom: ${NAVBAR_HEIGHT}px;
`

export const MainStyle = css`
  display: flex;
  height: 70vh;
`

export const LeftWrapperStyle = css`
  height: 100%;
  width: ${p => p.small ? '100%' : '60%'};
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const RediffWrapperStyle = css`
  margin-top: ${p => p.isMobile ? 50 : 100}px;
  ${p => {
    if (p.isMobile) {
      return css`
        display: flex;
        justify-content: center;
      `
    }
  }};
`