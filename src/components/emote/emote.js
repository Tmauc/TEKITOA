import React from 'react'
import styled from 'styled-components';

import { EmoteStyle } from './emote.style.js'

function Emote({ path, small }) {
  return (
    <EmoteImg src={path} small={small} />
  )
}

const EmoteImg = styled.img`
  ${EmoteStyle};
`

export default Emote