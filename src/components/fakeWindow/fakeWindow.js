import React from 'react'
import styled from 'styled-components';
import SquareIconSvg from 'assets/icons/SquarePoint.svg'
import CrossIcon from 'assets/icons/Cross.svg'

import { WrapperStyle, HeaderStyle, HeaderLeftStyle, SquareIconStyle, TypeStyle, HeaderMiddleStyle, TitleStyle, HeaderRightStyle, CloseIconStyle, MainStyle, IframeStyle } from './fakeWindow.style'

function FakeWindow({ type, title, url, size }) {

  return (
    <Wrapper width={size[0]} height={size[1]}>
      <Header width={size[0]}>
        <HeaderLeft>
          <SquareIcon src={SquareIconSvg} />
          <p>-</p>
          <Type>{type}</Type>
        </HeaderLeft>
        <HeaderMiddle>
          <Title>{title}</Title>
        </HeaderMiddle>
        <HeaderRight>
          <CloseIcon src={CrossIcon} />
        </HeaderRight>
      </Header>
      <Main width={size[0]} height={size[1]}>
        <Iframe src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
      </Main>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  ${WrapperStyle};
`

const Header = styled.div`
  ${HeaderStyle};
`

const HeaderLeft = styled.div`
  ${HeaderLeftStyle};
`

const SquareIcon = styled.img`
  ${SquareIconStyle};
`

const Type = styled.p`
  ${TypeStyle};
`

const HeaderMiddle = styled.div`
  ${HeaderMiddleStyle};
`

const Title = styled.p`
  ${TitleStyle};
`

const HeaderRight = styled.div`
  ${HeaderRightStyle};
`

const CloseIcon = styled.img`
  ${CloseIconStyle};
`

const Main = styled.div`
  ${MainStyle};
`

const Iframe = styled.iframe`
  ${IframeStyle};
`

export default FakeWindow
