import React from 'react';
import styled from 'styled-components';

import { EmoteWrapperStyle, EmoteStyle } from 'components/emote/emote.style.js';

function Emote({ path, small }) {
  const randomY = Math.floor(Math.random() * 10) + 5;
  const randomX = Math.floor(Math.random() * 10) + 5;

  return (
    <EmoteWrapper randomX={randomX}>
      <EmoteImg
        alt="Sreamer emote"
        src={path}
        small={small}
        randomY={randomY}
      />
    </EmoteWrapper>
  );
}

const EmoteWrapper = styled.div`
  ${EmoteWrapperStyle};
`;

const EmoteImg = styled.img`
  ${EmoteStyle};
`;

export default Emote;
