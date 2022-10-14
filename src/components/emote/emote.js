import React from 'react'
import styled from 'styled-components';

import { EmoteStyle } from './emote.style.js'

function Emote({ path }) {
  return (
    <EmoteImg src={path} />
  )
}

const EmoteImg = styled.img`
  ${EmoteStyle};
`

export default Emote