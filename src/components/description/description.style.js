import { css } from 'styled-components';

export const WrapperStyle = css`
  position: relative;
  display: flex;
  font-size: ${(p) => (p.isMobile ? 12 : 20)}px;
  font-family: Montserrat;

  color: white;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
  z-index: 0;
  text-shadow: 4px 4px 10px black;
`;

export const TitleStyle = css`
  text-transform: uppercase;
`;

export const SeparatorStyle = css`
  white-space: nowrap;
  color: #f05183;
`;

export const LabelStyle = css``;
