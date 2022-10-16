import React from 'react';
import styled from 'styled-components';

import { EmoteStyle } from 'components/emote/emote.style.js';

function Emote({ path, small }) {
  const randomDuration = Math.floor(Math.random() * 5) + 1;

  return (
    <EmoteImg
      alt="Sreamer emote"
      src={path}
      small={small}
      duration={randomDuration}
    />
  );
}

const EmoteImg = styled.img`
  ${EmoteStyle};
`;

export default Emote;
