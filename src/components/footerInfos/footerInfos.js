import React from 'react'
import styled from 'styled-components';

import { WrapperStyle, CopyrightStyle } from 'components/footerInfos/footerInfos.style';
import { useDevice } from 'hooks/useDevice'

function FooterInfos() {
  const { isMobile } = useDevice()
  return (
    <Wrapper isMobile={isMobile}>
      <Copyright isMobile={isMobile}>© TE KI TOA - 2022 (<a href='/home'>Conditions</a>) - Conception <a href='https://tmauc.fr' target="_blank">MAUC</a></Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${WrapperStyle};
`;

const Copyright = styled.p`
  ${CopyrightStyle};
`;

export default FooterInfos;