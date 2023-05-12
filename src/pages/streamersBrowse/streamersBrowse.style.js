import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  h1 {
    font-size: 100px;
  }

  @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const StreamersDesc = styled.p`
  margin: 60px 0 40px 0;
  font-size: 20px;
  white-space: nowrap;

  @media only screen and (max-width: 1024px) {
    margin: 30px 0 20px 0;
    font-size: 14px;
  }
`;

export const Separator = styled.div`
  background-color: white;
  width: 200px;
  min-height: 1px;
`;

export const ListWrapper = styled.ul`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 50px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 80px;
  }
`;
