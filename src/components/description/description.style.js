import { css } from 'styled-components';

export const WrapperStyle = css`
  display: flex;
  font-size: 20px;
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
  color: #F05183;
`

export const LabelStyle = css`
`