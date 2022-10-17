import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const MainWrapperStyle = css`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const DescriptionWrapperStyle = css`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const LiveWrapperStyle = css`
  display: flex;
  flex-direction: ${(p) => (p.isMobile ? 'column' : 'row')};

  ${(p) => {
    if (p.isMobile) {
      return css`
        & > * {
          margin-bottom: 10px;
        }
      `;
    } else {
      return css`
        & > * {
          margin-right: 10px;
        }
      `;
    }
  }}
`;
