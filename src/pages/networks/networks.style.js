import { css } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style';

export const SectionStyle = css`
  padding: 20px 100px;
  padding-bottom: ${(p) => (p.isMobile ? NAVBAR_HEIGHT : 0)}px;
`;
