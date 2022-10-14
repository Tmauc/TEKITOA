import { css } from 'styled-components';

export const SectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${p => p.isMobile ? 90 : 250}px;
  }
`