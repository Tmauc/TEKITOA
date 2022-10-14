import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
  padding: 20px 100px;
  padding-bottom: ${NAVBAR_HEIGHT}px;
`

export const MainWrapperStyle = css`
  display: flex;
  flex-direction: column;
`

export const EmotesWrapperStyle = css`
  display: flex;
`

export const EmbedWrapperStyle = css`
  display: flex;
  & > * {
    margin-right: 10px;
  }
`