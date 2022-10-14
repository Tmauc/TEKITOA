import React, { useEffect } from 'react'
import styled from 'styled-components';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { useDevice } from 'hooks/useDevice'
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle } from './home.style'

function Home() {
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    OAuthTwitch(dispatch);
  }, []);

  return (
    <Section className='home' isMobile={isMobile}>
      <h1 className='title'>TE KI TOA</h1>
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

export default Home
