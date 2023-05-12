import React from 'react';

import { EmoteWrapper, EmoteImg } from 'components/emote/emote.style.js';

function Emote({ path }) {
  const randomY = Math.floor(Math.random() * 10) + 5;
  const randomX = Math.floor(Math.random() * 10) + 5;

  return (
    <EmoteWrapper randomX={randomX}>
      <EmoteImg
        alt="Sreamer emote"
        src={path}
        randomY={randomY}
      />
    </EmoteWrapper>
  );
}

export default Emote;
