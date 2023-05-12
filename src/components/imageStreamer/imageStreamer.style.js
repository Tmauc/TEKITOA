import styled, { keyframes } from 'styled-components';

export const ImgWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0;
  width: 40%;
  height: 80%;
  z-index: 1;

	@media only screen and (max-width: 1024px) {
    z-index: 0;
  }
`;

const breatheAnimation = keyframes`
  100%,0%{
    filter: drop-shadow(0px 0px 250px rgba(255,0,0, .5));
		}
		16%{
			filter: drop-shadow(0px 0px 250px rgb(255,127,0, .5));
		}
		32%{
			filter: drop-shadow(0px 0px 250px rgb(255,255,0, .5));
		}
		48%{
			filter: drop-shadow(0px 0px 250px rgb(127,255,0, .5));
		}
		64%{
			filter: drop-shadow(0px 0px 250px rgb(0,255,0, .5));
		}
		80%{
			filter: drop-shadow(0px 0px 250px rgb(0,255,127, .5));
		}
		96%{
			filter: drop-shadow(0px 0px 250px rgb(0,255,255, .5));
		}
`;

export const StreamerImg = styled.img`
  object-fit: contain;
  object-position: bottom right;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.3s ease-in-out;
  filter: drop-shadow(0px 0px 250px rgba(255, 0, 0, 0.5));
  animation-name: ${breatheAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;
