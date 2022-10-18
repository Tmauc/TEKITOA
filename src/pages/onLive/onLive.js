import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import FakeWindow from 'components/fakeWindow/fakeWindow';
import ImageStreamer from 'components/imageStreamer/imageStreamer';
import Description from 'components/description/description.js';
import Emotes from 'components/emotes/emotes';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { useDevice } from 'hooks/useDevice';
import { StreamerConsumerHook } from 'stores/streamerStore';
import { calcTimeOnLive } from 'utils/calcTimeOnLive';

import StreamersJson from 'streamers.json';

import {
  SectionStyle,
  MainWrapperStyle,
  DescriptionWrapperStyle,
  LiveWrapperStyle,
} from 'pages/onLive/onLive.style';

function OnLive() {
  const location = useLocation();
  const { isMobile } = useDevice();
  const [{ streamer, stream }, dispatch] = StreamerConsumerHook();
  const [onLiveTimer, setOnLiveTimer] = useState(null);

  useEffect(() => {
    if (!streamer) {
      dispatch({
        type: 'changeStreamer',
        newStreamer: StreamersJson.streamers.find(e => e.pseudo === location?.pathname.substring(1).replace('/onlive', '')),
      });
    }
    OAuthTwitch(dispatch, streamer?.pseudoTwitch);
  }, [dispatch, streamer, streamer?.pseudoTwitch, location?.pathname]);

  useEffect(() => {
    setOnLiveTimer(calcTimeOnLive(stream?.started_at));
  }, [setOnLiveTimer, stream?.started_at]);

  return (
    <Section className="onLive" isMobile={isMobile}>
      <Emotes maxEmotes={10} />
      <HeaderStreamer
        title={'OnLive : ' + streamer?.pseudo}
        twitchURL={streamer?.twitchURL}
      />
      <MainWrapper isMobile={isMobile}>
        <DescriptionWrapper>
          <Description title={'Game'} label={stream?.game_name} />
          <Description title={'Titre'} label={stream?.title} />
          <Description title={'Viewers'} label={stream?.viewer_count} />
          <Description title={'Timer'} label={onLiveTimer} />
        </DescriptionWrapper>
        <LiveWrapper isMobile={isMobile}>
          <FakeWindow
            type="ONLIVE.exe"
            title={streamer?.pseudo}
            size={
              isMobile
                ? { width: 300, height: 170 }
                : { width: 440, height: 250 }
            }
            twitchInfos={{ live: true, channel: streamer?.pseudoTwitch }}
          />
          <FakeWindow
            type="Tchat.exe"
            title={streamer?.pseudo + ' - TCHAT'}
            size={{ width: 300, height: 400 }}
            twitchInfos={{ chat: true, channel: streamer?.pseudoTwitch }}
          />
        </LiveWrapper>
      </MainWrapper>
      <ImageStreamer />
    </Section>
  );
}

const Section = styled.section`
  ${SectionStyle};
`;

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`;

const DescriptionWrapper = styled.div`
  ${DescriptionWrapperStyle};
`;

const LiveWrapper = styled.div`
  ${LiveWrapperStyle};
`;

export default OnLive;
