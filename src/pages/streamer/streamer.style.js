import styled from 'styled-components';

export const Section = styled.section`
  padding: 160px 20vw;
  max-width: 100vw;

  @media only screen and (max-width: 1024px) {
    padding: 120px 40px;
  }
`;

export const ParallaxBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const ParallaxOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #07143B;

  background: linear-gradient(270deg, rgba(7, 20, 59, .2) 0%, rgba(51, 34, 109, .8) 49.35%, rgba(7, 20, 59, 1) 100%);

  @media only screen and (max-width: 1024px) {
    background: linear-gradient(270deg, rgba(7, 20, 59, 1) 0%, rgba(51, 34, 109, .8) 49.35%, rgba(7, 20, 59, 1) 100%);
  }
`;

export const ParallaxContent = styled.div`
  position: relative;
   display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

export const OnLiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 15px;
  }
`;

export const LiveWrapper = styled.div`
  display: flex;

  margin-top: 50px;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DescWrapper = styled.div`
  margin-top: 160px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const P = styled.p`
  font-size: 25px;
  white-space: nowrap;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
`;

export const LeftWrapper = styled.div`
  height: 100%;
  width: 70%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Categories = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-top: 50px !important;
  
  @media only screen and (max-width: 1024px) {
    font-size: 15px;
    margin-top: 0px !important;
    text-align: center;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
   margin-top: 40px;
`;

export const RediffWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
  
  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`;

export const WrapperAudio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 160px;
  height: 100%;

  & > *:not(:last-child) {
    margin-right: 18px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 0px;
    margin-top: 25px;
  }
`;

export const NetWorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;

  & > *:not(:last-child) {
    margin-bottom: 32px;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin-top: 80px;
  }
`;

export const HeaderRightWrapper = styled.div`
  position: fixed;
  left: 80px;
  top: 200px;
`;

export const BackIcon = styled.img`
  width: 60px;
  height: 60px;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
  cursor: pointer;
  z-index: 0;
`;