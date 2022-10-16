import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Emote from 'components/emote/emote';
import FakeWindow from 'components/fakeWindow/fakeWindow';
import ImageStreamer from 'components/imageStreamer/imageStreamer';
import { useDevice } from 'hooks/useDevice';

import { getClips, getEmote, getRediffs } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';
import { getRandomArray } from 'utils/getRandomItem.js';

import {
  SectionStyle,
  MainWrapperStyle,
  EmotesWrapperStyle,
  EmbedWrapperStyle,
} from 'pages/twitch/twitch.style.js';

function Twitch() {
  const { isMobile } = useDevice();
  const [{ OAuth, user, streamer, popularClip, rediffs, emotes }, dispatch] =
    StreamerConsumerHook();
  const [randomEmotes, setRandomEmotes] = useState([]);

  useEffect(() => {
    getEmote(dispatch, OAuth, user?.id);
    getClips(dispatch, OAuth, user?.id);
    getRediffs(dispatch, OAuth, user?.id);
  }, [OAuth, dispatch, user?.id]);

  const getRandomEmotes = useCallback(() => {
    if (emotes?.length > 7) {
      setRandomEmotes(getRandomArray(emotes, 7));
    } else {
      setRandomEmotes(emotes);
    }
  }, [emotes]);

  useEffect(() => {
    if (emotes) {
      getRandomEmotes(emotes);
    }
  }, [emotes, getRandomEmotes]);

  return (
    <Section className="twitch" isMobile={isMobile}>
      <HeaderStreamer
        title={'Twitch : ' + streamer?.pseudo}
        label={streamer}
        pseudoTwitch={streamer?.pseudoTwitch}
      />
      <MainWrapper>
        <EmotesWrapper>
          {randomEmotes &&
            randomEmotes?.map((emote, index) => (
              <div key={emote?.id + index + 'div'}>
                <Emote
                  key={emote?.id + index}
                  path={emote?.images.url_4x}
                  small={isMobile}
                />
              </div>
            ))}
        </EmotesWrapper>
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

const EmotesWrapper = styled.div`
  ${EmotesWrapperStyle};
`;

const EmbedWrapper = styled.div`
  ${EmbedWrapperStyle};
`;

export default Twitch;
