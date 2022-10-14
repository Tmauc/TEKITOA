import React from 'react'
import styled from 'styled-components';
import { TwitchClip, TwitchPlayer, TwitchChat } from 'react-twitch-embed';

import SquareIconSvg from 'assets/icons/SquarePoint.svg'
import CrossIcon from 'assets/icons/Cross.svg'

import { useDevice } from 'hooks/useDevice'

import { WrapperStyle, HeaderStyle, HeaderLeftStyle, SquareIconStyle, TypeStyle, HeaderMiddleStyle, TitleStyle, HeaderRightStyle, CloseIconStyle, MainStyle, IframeStyle } from './fakeWindow.style'

function FakeWindow({ type: type, title: title, youtubeUrl: youtubeUrl, size: size, twitchInfos: twitchInfos }) {
  const { isMobile } = useDevice();

  return (
    <Wrapper width={size.width} height={size.height}>
      <Header width={size.width} isMobile={isMobile}>
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
      <Main width={size.width} height={size.height}>
        {!twitchInfos &&
          <Iframe
            src={youtubeUrl}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        }
        {twitchInfos?.clip && twitchInfos?.id &&
          <TwitchClip title={title} clip={twitchInfos?.id} width='100%' height='100%' autoplay={false} />
        }
        {twitchInfos?.vod && twitchInfos?.id &&
          <TwitchPlayer title={title} video={twitchInfos?.id} width='100%' height='100%' autoplay={false} />
        }
        {twitchInfos?.live && twitchInfos?.channel &&
          <TwitchPlayer title={title} channel={twitchInfos?.channel} width='100%' height='100%' withChat={false} />
        }
        {twitchInfos?.chat && twitchInfos?.channel &&
          <TwitchChat title={title} channel={twitchInfos?.channel} width='100%' height='100%' />
        }
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
