import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const MainWrapperStyle = css`
  display: flex;
  flex-direction: column;
`;

export const EmbedWrapperStyle = css`
  display: flex;
  flex-direction: column;
  width: fit-content;

  & > * {
    margin-bottom: 20px;
  }
`;
