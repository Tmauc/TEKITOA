import React from 'react'

import styled from 'styled-components';

import { StreamerConsumerHook } from 'stores/streamerStore';

import { StatusStyle } from './onLiveDot.style'

function OnLiveDot({ small }) {
  const [{ stream }] = StreamerConsumerHook();

  return (
    <Status onlive={stream} small={small} />
  )
}

const Status = styled.div`
  ${StatusStyle};
`

export default OnLiveDot
