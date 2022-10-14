import { css } from 'styled-components';

export const WrapperStyle = css`
  display: flex;
  font-size: ${p => p.isMobile ? 12 : 20}px;
  font-family: Montserrat;
  color: white;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`

export const TitleStyle = css`
  text-transform: uppercase;
`

export const SeparatorStyle = css`
  white-space: nowrap;
  color: #F05183;
`

export const LabelStyle = css`
`