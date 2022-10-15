import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
  padding: ${p => p.isMobile ? '10px 30px' : '20px 100px'};
  padding-bottom: ${p => p.isMobile ? NAVBAR_HEIGHT : 0}px;
`

export const MainWrapperStyle = css`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }
`

export const DescriptionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const LiveWrapperStyle = css`
  display: flex;
  flex-direction: ${p => p.isMobile ? 'column' : 'row'};

  ${p => {
    if (p.isMobile) {
      return css`
        & > * {
          margin-bottom: 10px;
        }
      `
    } else {
      return css`
        & > * {
          margin-right: 10px;
        }
      `
    }
  }}
`