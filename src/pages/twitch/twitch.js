import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Emotes from 'components/emotes/emotes';
import FakeWindow from 'components/fakeWindow/fakeWindow';
import ImageStreamer from 'components/imageStreamer/imageStreamer';
import { useDevice } from 'hooks/useDevice';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';

import StreamersJson from 'streamers.json';

import {
  SectionStyle,
  MainWrapperStyle,
  EmbedWrapperStyle,
} from 'pages/twitch/twitch.style.js';

function Twitch() {
  const { isMobile } = useDevice();
  const location = useLocation();
  const [{ streamer, popularClip, rediffs }, dispatch] =
    StreamerConsumerHook();

  useEffect(() => {
    if (!streamer) {
      dispatch({
        type: 'changeStreamer',
        newStreamer: StreamersJson.streamers.find(e => e.pseudo === location?.pathname.substring(1).replace('/twitch', '')),
      });
    }
    OAuthTwitch(dispatch, streamer?.pseudoTwitch);
  }, [dispatch, streamer, streamer?.pseudoTwitch, location?.pathname]);

  return (
    <Section className="twitch" isMobile={isMobile}>
      <Emotes maxEmotes={10} />
      <HeaderStreamer
        title={'Twitch : ' + streamer?.pseudo}
        label={streamer}
        twitchURL={streamer?.networks.find(o => o?.type === 'twitch')?.url}
      />
      <MainWrapper>
        <EmbedWrapper isMobile={isMobile}>
          <FakeWindow
            type="CLIP.exe"
            title={'TKT ' + streamer?.pseudo + ' - CLIP'}
            size={
              isMobile
                ? { width: 250, height: 150 }
                : { width: 440, height: 250 }
            }
            twitchInfos={{ clip: true, id: popularClip?.id }}
          />
          <FakeWindow
            type="Rediff.exe"
            title={'TKT ' + streamer?.pseudo + ' - Rediff'}
            size={
              isMobile
                ? { width: 250, height: 150 }
                : { width: 440, height: 250 }
            }
            twitchInfos={{ vod: true, id: rediffs && rediffs[0]?.id }}
          />
        </EmbedWrapper>
        <ImageStreamer />
      </MainWrapper>
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`;

const EmbedWrapper = styled.div`
  ${EmbedWrapperStyle};
`;

export default Twitch;
