import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 70px;

  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 7px;

  font-weight: 700px;
  font-size: 30px;

  filter: drop-shadow(0px 6px 4px rgba(0, 0, 0, 0.25));

  transition: .3s all ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: #f05183;
    font-size: 34px;
  }

  text-transform: uppercase; 

  @media only screen and (max-width: 1024px) {
    width: 250px;
    height: 40px;
    font-size: 20px;

    &:hover {
      background-color: #f05183;
      font-size: 25px;
    }
  }
`;