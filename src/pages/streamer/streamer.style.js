import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const MainStyle = css`
  display: flex;
  height: 70vh;
`;

export const LeftWrapperStyle = css`
  height: 100%;
  width: ${(p) => (p.small ? '100%' : '60%')};
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const RediffWrapperStyle = css`
  display: flex;
  margin-top: ${(p) => (p.isMobile ? 50 : 100)}px;
  ${(p) => {
    if (p.isMobile) {
      return css`
        justify-content: center;
      `;
    }
  }};
`;
