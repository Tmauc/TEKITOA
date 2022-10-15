import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'

export const SectionStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: ${p => p.isMobile ? 50 : 100}px;
  }
  padding-bottom: ${p => p.isMobile ? NAVBAR_HEIGHT : 0}px;
`

export const ListWrapperStyle = css`
  margin-top: ${p => p.isMobile ? 20 : 100}px;
`

export const StreamerLinkStyle = css`
  font-size: 20px;
  color: white;
  cursor: pointer;
  &:hover {
    color: #F05183;
  }
`
