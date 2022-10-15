import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import Description from 'components/description/description.js';
import FakeWindow from 'components/fakeWindow/fakeWindow.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer'
import { useDevice } from 'hooks/useDevice'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { getUser } from 'core/twitchAPI.js';

import { SectionStyle, MainStyle, LeftWrapperStyle, RediffWrapperStyle } from './streamer.style.js'

function Streamer() {
  const { isMobile } = useDevice();
  const [{ streamer, user, OAuth }, dispatch] = StreamerConsumerHook();
  const [createdDate, setCreatedDate] = useState(null);
  const [userDesc, setUserDesc] = useState(null);

  useEffect(() => {
    getUser(dispatch, OAuth, streamer?.pseudoTwitch);
  }, []);

  useEffect(() => {
    const tmpDate = user?.created_at && new Date(user?.created_at).toLocaleDateString();
    setCreatedDate(tmpDate)
  }, [setCreatedDate, user?.created_at]);

  useEffect(() => {
    user?.description && setUserDesc(user?.description);
  }, [setUserDesc, user?.description]);

  return (
    <Section className='Streamer' isMobile={isMobile}>
      <HeaderStreamer title={streamer?.pseudo} pseudoTwitch={streamer?.pseudoTwitch} />
      <Main>
        {<LeftWrapper small={isMobile}>
          <p></p>
          <Description title={'Création'} label={createdDate} />
          <Description title={'Pseudo'} label={streamer?.pseudoHistory} />
          <Description title={'Description'} label={userDesc} />
          <Description title={'Catégories'} label={streamer?.categories} />
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
