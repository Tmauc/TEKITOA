import React, { useEffect } from 'react'
import styled from 'styled-components';
import { SectionStyle } from './home.style'
import { OAuthTwitch } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';

function Home() {
  const [{ }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    OAuthTwitch(dispatch);
  }, []);

  return (
    <Section className='home'>
      <h1 className='title'>TE KI TOA</h1>
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

export default Home
