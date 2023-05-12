import React from 'react';
import { TwitchClip, TwitchPlayer, TwitchChat } from 'react-twitch-embed';

import {
  Wrapper,
  Header,
  HeaderLeft,
  SquareIcon,
  Type,
  HeaderMiddle,
  Title,
  HeaderRight,
  CloseIcon,
  Main,
  StreamerPseudo,
  ComingSoon,
  Iframe,
  StreamerWrapper,
  StreamerPP,
} from 'components/fakeWindow/fakeWindow.style';

function FakeWindow({ onClick, type, title, dateTKT, content, pp, youtubeUrl, size, twitchInfos }) {
  const randomDuration = Math.floor(Math.random() * 5) + 1;

  return (
    <Wrapper width={size.width} height={size.height} onClick={onClick && onClick} duration={randomDuration}>
      <Header width={size.width}>
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
        {content &&
          <StreamerWrapper>
            {pp && <StreamerPP alt={content + 'profil picture of twitch'} src={pp} />}
            <StreamerPseudo>{content}</StreamerPseudo>
          </StreamerWrapper>
        }
        {!twitchInfos && !youtubeUrl && !content && (
          <ComingSoon>Disponible le lendemain du {dateTKT}</ComingSoon>
        )}
        {!twitchInfos && youtubeUrl && (
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

export default FakeWindow;
