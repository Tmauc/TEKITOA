import React, { useEffect } from 'react'
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Description from 'components/description/description.js';
import FakeWindow from 'components/fakeWindow/fakeWindow.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer'
import { useDevice } from 'hooks/useDevice'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { getUser } from 'core/twitchAPI.js';

import { SectionStyle, MainStyle, LeftWrapperStyle, RediffWrapperStyle, ImgWrapperStyle, StreamerImgStyle } from './streamer.style.js'

function Streamer() {
  const { isMobile } = useDevice();
  const [{ streamer, OAuth }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    getUser(dispatch, OAuth, streamer?.pseudoTwitch);
  }, []);

  return (
    <Section className='Streamer' isMobile={isMobile}>
      <HeaderStreamer title={streamer?.pseudo} />
      <Main>
        {<LeftWrapper small={isMobile}>
          <Description title={'Début'} label={streamer?.start} />
          <Description title={'Langue'} label={streamer?.language} />
          <Description title={'Hobbies'} label={streamer?.hobbies} />
          <Description title={'Catégories'} label={streamer?.categories} />
          <Description title={'Objectifs'} label={streamer?.objectifs} />
          <RediffWrapper isMobile={isMobile}>
            <FakeWindow
              type="Rediff.exe"
              title={'TKT ' + streamer?.pseudo + ' - ' + streamer?.dateTKT}
              youtubeUrl={streamer?.rediffTKT}
              size={isMobile ? { width: 300, height: 170 } : { width: 440, height: 250 }}
              isMobile={isMobile}
            />
          </RediffWrapper>
        </LeftWrapper>}
        <ImageStreamer />
      </Main>
    </Section >
  )
}

const Section = styled.section`
  ${SectionStyle};
`


const Main = styled.div`
  ${MainStyle};
`

const LeftWrapper = styled.div`
  ${LeftWrapperStyle};
`

const RediffWrapper = styled.div`
  ${RediffWrapperStyle};
`

export default Streamer
