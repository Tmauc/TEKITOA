import React, { useEffect } from 'react'
import styled from 'styled-components';

import { OAuthTwitch } from 'core/twitchAPI.js';
import { useDevice } from 'hooks/useDevice'
import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle, TitleStyle, LabelStyle } from './home.style'

function Home() {
  const { isMobile } = useDevice();
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    OAuthTwitch(dispatch);
  }, []);

  return (
    <Section className='home' isMobile={isMobile}>
      <Title isMobile={isMobile}>TE KI TOA</Title>
      <Label isMobile={isMobile}>À la découverte des streamer⸱euses !</Label>
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

const Title = styled.h1`
  ${TitleStyle};
`

const Label = styled.p`
  ${LabelStyle};
`

export default Home
