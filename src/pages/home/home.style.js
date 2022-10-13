import { css } from 'styled-components';

export const SectionStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 250px;
    @media (max-width: 1024px)
    {
      font-size: 100px;
    }
  }

`