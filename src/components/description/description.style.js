import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 35px 1fr;
  grid-template-rows: 20px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 10px;

  font-size: 20px;

  z-index: 0;
  text-shadow: 4px 4px 10px black;

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Separator = styled.p`
  white-space: nowrap;
  color: #f05183;
  grid-area: 1 / 1 / 2 / 2;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  grid-area: 1 / 2 / 2 / 3;
`;

export const Label = styled.p`
  text-transform: capitalize;
  grid-area: 2 / 2 / 3 / 3
`;
