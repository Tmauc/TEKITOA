import React from 'react'
import styled from 'styled-components';

import HeaderStreamer from 'components/headerStreamer/headerStreamer.js';
import ImageStreamer from 'components/imageStreamer/imageStreamer'

import { StreamerConsumerHook } from 'stores/streamerStore';

import { SectionStyle } from './networks.style.js'

function Networks() {
  const [{ streamer }] = StreamerConsumerHook();
  return (
    <Section className='networks'>
      <HeaderStreamer title={'Reseaux : ' + streamer?.pseudo} />
      <ImageStreamer />
    </Section>
  )
}

const Section = styled.section`
  ${SectionStyle};
`

export default Networks
