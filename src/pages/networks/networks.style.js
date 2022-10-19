import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const MainWrapperStyle = css`
  display: grid;
  grid-template-columns: ${(p) => (p.isMobile ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)')};
  grid-gap: 50px;
  height: 70vh;
  width: ${(p) => (p.isMobile ? '100%' : '60%')};

  ${p => {
    if (p.isMobile) {
      return css`
        justify-items: center;
      `
    }
  }}
`;

export const NetWorksWrapperStyle = css`
  display: flex;
  height: fit-content;
`;