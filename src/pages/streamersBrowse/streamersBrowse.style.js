import { css } from 'styled-components';

export const SectionStyle = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: ${(p) => (p.isMobile ? 50 : 100)}px;
  }
`;

export const ListWrapperStyle = css`
  margin-top: ${(p) => (p.isMobile ? 20 : 100)}px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  }
`;
