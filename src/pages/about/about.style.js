import styled from 'styled-components';

export const Section = styled.section`
  padding-bottom: 100px;
`;

export const Title = styled.h1`
  font-size: 100px;
  text-align: center;

  @media only screen and (max-width: 1024px) {
    font-size: 50px;
  }
  `;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const DescriptionWrapper = styled.div`
  padding: '0px 50px';
  & > *:not(:last-child) {
    padding: 5px 0px;
  }

  @media only screen and (max-width: 1024px) {
    padding: '0px 10px';
  }
`;

export const DescriptionTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const DescriptionLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  max-width: 900px;

  & > *:not(:last-child) {
    margin-bottom: 60px;
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 50px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: center;
  font-family: Montserrat;
  color: white;
  a {
    color: white;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const DescriptionLeft = styled(Description)`
  font-size: 16px;
  text-align: left;

  a {
    color: #f05183;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const Separator = styled.div`
  background-color: white;
  width: 20vw;
  height: 1px;
  margin: 25px 0px;
  margin-bottom: 80px;
`;

export const LiveWrapper = styled.div`
  display: flex;
  flex-direction: 'row';
  margin-right: 10px;

  & > * {
    margin-right: 10px;
  }

  @media only screen and (max-width: 1024px) {
    margin-right: 0px;
  }
`;