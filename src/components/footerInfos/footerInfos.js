import React from 'react'

import { Wrapper, Copyright } from 'components/footerInfos/footerInfos.style';

function FooterInfos() {
  return (
    <Wrapper>
      <Copyright>
        © TE KI TOA - 2023 (<a href='/conditions'>Conditions</a>) - Conception <a href='https://tmauc.fr' target="_blank" rel="noreferrer">Mauc</a> - UX Design <a href='https://ziiemli.com' target="_blank" rel="noreferrer">Ziiemli</a>
      </Copyright>
    </Wrapper>
  );
}

export default FooterInfos;