import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

import ArrowIcon from 'assets/icons/Arrow.svg'
import OnLiveDot from 'components/onLiveDot/onLiveDot';
import { useDevice } from 'hooks/useDevice'

import { HeaderStyle, HeaderLeftWrapperStyle, HeaderRightWrapperStyle, BackIconStyle } from './headerStreamer.style'

function HeaderStreamer({ title }) {
  const navigate = useNavigate();
  const { isMobile } = useDevice();

  function backStreamers() {
    navigate('/streamers');
  }

  return (
    <Header isMobile={isMobile}>
      <HeaderLeftWrapper isMobile={isMobile}>
        <h1 className='title'>{title}</h1>
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <BackIcon small={isMobile} onClick={backStreamers} src={ArrowIcon} />
      </HeaderRightWrapper>
    </Header>
  )
}

const Header = styled.header`
  ${HeaderStyle};
`

const HeaderLeftWrapper = styled.div`
  ${HeaderLeftWrapperStyle};
`

const HeaderRightWrapper = styled.div`
  ${HeaderRightWrapperStyle};
`

const BackIcon = styled.img`
  ${BackIconStyle};
`

export default HeaderStreamer
