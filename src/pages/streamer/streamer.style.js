import { css, keyframes } from 'styled-components';
import { NAVBAR_HEIGHT } from 'components/navbar/navbar.style'
export const SectionStyle = css`
    padding: 20px 100px;
    padding-bottom: ${NAVBAR_HEIGHT}px;
`

export const HeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
`

export const HeaderLeftWrapperStyle = css`
  display: flex;
  align-items: flex-end;
  & > *:not(:last-child) {
    margin-right: 20px;
  }
`

export const HeaderRightWrapperStyle = css`
  display: flex;
`

export const BackIconStyle = css`
  &:hover {
    transform: scale(1.1);
    transition: all .2s ease-in-out;
  }
  cursor: pointer;
`

export const StatusStyle = css`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  background-color: ${p => p.onlive ? '#BE1313' : '#898686'};
  box-shadow: 0px 0px 12px #000000;
`

export const MainStyle = css`
  display: flex;
  height: 70vh;
`

export const LeftWrapperStyle = css`
  height: 100%;
  width: 60%;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const RediffWrapperStyle = css`
  margin-top: 100px;
`

export const ImgWrapperStyle = css`
  position: fixed;
  bottom: 0px;
  right: 0;
  width: 40%;
  height: 80%;
  z-index: 1;
`

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
`

export const StreamerImgStyle = css`
  object-fit: contain;
  object-position: bottom right;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.3s ease-in-out;
  filter: drop-shadow(0px 0px 250px rgba(255,0,0, .5));
  /*animation-name: ${breatheAnimation};
  animation-duration: 20s;
  animation-iteration-count: infinite;*/
`