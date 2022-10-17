import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const HeaderStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleStyle = css`
  font-size: ${(p) => (p.isMobile ? 50 : 100)}px;
`;
