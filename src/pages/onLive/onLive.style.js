import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
  padding: 20px 100px;
  padding-bottom: ${NAVBAR_HEIGHT}px;
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
  & > * {
    margin-right: 10px;
  }
`