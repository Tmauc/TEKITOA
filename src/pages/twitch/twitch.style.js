import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const MainWrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export const EmotesWrapperStyle = css`
  display: flex;
  & > * {
    margin-right: 8px;
  }
`;

export const EmbedWrapperStyle = css`
  display: flex;
  flex-direction: ${(p) => (p.isMobile ? 'column' : 'row')};

  ${(p) => {
    if (p.isMobile) {
      return css`
        align-items: center;
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
  }};
`;
