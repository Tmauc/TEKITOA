import { css } from 'styled-components';

export const SectionStyle = css`
`;

export const TitleStyle = css`
  font-size: ${(p) => (p.isMobile ? 50 : 100)}px;
  text-align: center;
  `;

export const MainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const DescriptionWrapperStyle = css`
  padding: ${p => p.isMobile ? '0px 10px' : '0px 50px'};
  & > *:not(:last-child) {
    padding: 5px 0px;
  }
`;

export const DescriptionStyle = css`
  font-size: ${(p) => (p.isMobile ? 12 : 16)}px;
  text-align: center;
  font-family: Montserrat;
  color: white;
  text-shadow: 0px 0px 4px #ffffff;
  a {
    color: white;
  }
`;

export const SeparatorStyle = css`
  background-color: white;
  width: 20vw;
  height: 1px;
  margin: 25px 0px;
`;

export const LiveWrapperStyle = css`
  display: flex;
  flex-direction: ${(p) => (p.isMobile ? 'column' : 'row')};

  ${(p) => {
    if (p.isMobile) {
      return css`
        & > * {
          margin-bottom: 10px;
        }
      `;
    } else {
      return css`
        & > * {
          margin-right: 10px;
        }
      `;
    }
  }}
`;