import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 20px;
  background: linear-gradient(270deg, #07143B 0%, #33226D 49.35%, #07143B 100%);

  @media only screen and (max-width: 1024px) {
    height: 10px;
  }
`;

export const Copyright = styled.p`
  font-size: 10px;
  font-family: Montserrat;
  color: white;

  a {
    color: white;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 8px;
  }
`;