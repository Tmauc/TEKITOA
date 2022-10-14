import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Emote from 'components/emote/emote'
import FakeWindow from 'components/fakeWindow/fakeWindow'
import ImageStreamer from 'components/imageStreamer/imageStreamer'

import { getClips, getEmote, getRediff } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';
import { getRandomArray } from 'utils/getRandomItem.js';

import { SectionStyle, MainWrapperStyle, EmotesWrapperStyle, EmbedWrapperStyle } from './twitch.style.js'

function Twitch() {
  const [{ OAuth, id, streamer, popularClip, lastRediff, emotes }, dispatch] = StreamerConsumerHook();
  const [randomEmotes, setRandomEmotes] = useState([])

  useEffect(() => {
    getEmote(dispatch, OAuth, id);
    getClips(dispatch, OAuth, id);
    getRediff(dispatch, OAuth, id);
  }, []);

  useEffect(() => {
    if (emotes) {
      getRandomEmotes(emotes);
    }
  }, [emotes]);

  const getRandomEmotes = useCallback(() => {
    if (emotes?.length > 7) {
      setRandomEmotes(getRandomArray(emotes, 7))
    } else {
      setRandomEmotes(emotes);
    }
  }, [emotes])

  return (
    <Section className='twitch'>
      <HeaderStreamer title={'Twitch : ' + streamer?.pseudo} />
      <MainWrapper>
        <EmotesWrapper>
          {randomEmotes && randomEmotes?.map((emote, index) => (
            <div key={emote?.id + index + 'div'}>
              <Emote key={emote?.id + index} path={emote?.images.url_4x} />
            </div>
          ))}
        </EmotesWrapper>
        <EmbedWrapper>
          <FakeWindow
            type="CLIP.exe"
            title={'TKT ' + streamer?.pseudo + ' - CLIP'}
            size={{ width: 440, height: 250 }}
            twitchInfos={{ clip: true, id: popularClip?.id }}
          />
          <FakeWindow
            type="Rediff.exe"
            title={'TKT ' + streamer?.pseudo + ' - Rediff'}
            size={{ width: 440, height: 250 }}
            twitchInfos={{ vod: true, id: lastRediff?.id }}
          />
        </EmbedWrapper>
        <ImageStreamer />
      </MainWrapper>
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

const MainWrapper = styled.div`
  ${MainWrapperStyle};
`

const EmotesWrapper = styled.div`
  ${EmotesWrapperStyle};
`

const EmbedWrapper = styled.div`
  ${EmbedWrapperStyle};
`


export default Twitch
