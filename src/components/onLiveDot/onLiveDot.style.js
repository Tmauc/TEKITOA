import { css } from 'styled-components';

export const StatusStyle = css`
  width: ${p => p.small ? 20 : 55}px;
  height: ${p => p.small ? 20 : 55}px;
  border-radius: 100%;
  background-color: ${p => p.onlive ? '#BE1313' : '#898686'};
  box-shadow: 0px 0px 12px #000000;
`