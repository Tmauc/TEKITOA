import styled from 'styled-components';

export const Section = styled.section`
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 100px;

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }
`;
