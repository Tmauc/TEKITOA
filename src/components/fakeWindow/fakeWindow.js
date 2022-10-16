import React from 'react';
import styled from 'styled-components';
import { TwitchClip, TwitchPlayer, TwitchChat } from 'react-twitch-embed';

import { useDevice } from 'hooks/useDevice';

import {
  WrapperStyle,
  HeaderStyle,
  HeaderLeftStyle,
  SquareIconStyle,
  TypeStyle,
  HeaderMiddleStyle,
  TitleStyle,
  HeaderRightStyle,
  CloseIconStyle,
  MainStyle,
  IframeStyle,
} from 'components/fakeWindow/fakeWindow.style';

function FakeWindow({ type, title, youtubeUrl, size, twitchInfos }) {
  const { isMobile } = useDevice();

  return (
    <Wrapper width={size.width} height={size.height}>
      <Header width={size.width} isMobile={isMobile}>
        <HeaderLeft>
          <SquareIcon
            alt="Square icon"
            src={process.env.PUBLIC_URL + '/assets/icons/SquarePoint.svg'}
          />
          <p>-</p>
          <Type>{type}</Type>
        </HeaderLeft>
        <HeaderMiddle>
          <Title>{title}</Title>
        </HeaderMiddle>
        <HeaderRight>
          <CloseIcon
            alt="Close icon"
            src={process.env.PUBLIC_URL + '/assets/icons/Cross.svg'}
          />
        </HeaderRight>
      </Header>
      <Main width={size.width} height={size.height}>
        {!twitchInfos && (
          <Iframe
            src={youtubeUrl}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )}
        {twitchInfos?.clip && twitchInfos?.id && (
          <TwitchClip
            title={title}
            clip={twitchInfos?.id}
            width="100%"
            height="100%"
            autoplay={false}
          />
        )}
        {twitchInfos?.vod && twitchInfos?.id && (
          <TwitchPlayer
            title={title}
            video={twitchInfos?.id}
            width="100%"
            height="100%"
            autoplay={false}
          />
        )}
        {twitchInfos?.live && twitchInfos?.channel && (
          <TwitchPlayer
            title={title}
            channel={twitchInfos?.channel}
            width="100%"
            height="100%"
            withChat={false}
          />
        )}
        {twitchInfos?.chat && twitchInfos?.channel && (
          <TwitchChat
            title={title}
            channel={twitchInfos?.channel}
            width="100%"
            height="100%"
          />
        )}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${WrapperStyle};
`;

const Header = styled.div`
  ${HeaderStyle};
`;

const HeaderLeft = styled.div`
  ${HeaderLeftStyle};
`;

const SquareIcon = styled.img`
  ${SquareIconStyle};
`;

const Type = styled.p`
  ${TypeStyle};
`;

const HeaderMiddle = styled.div`
  ${HeaderMiddleStyle};
`;

const Title = styled.p`
  ${TitleStyle};
`;

const HeaderRight = styled.div`
  ${HeaderRightStyle};
`;

const CloseIcon = styled.img`
  ${CloseIconStyle};
`;

const Main = styled.div`
  ${MainStyle};
`;

const Iframe = styled.iframe`
  ${IframeStyle};
`;

export default FakeWindow;
