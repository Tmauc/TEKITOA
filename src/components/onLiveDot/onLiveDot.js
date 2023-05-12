import React from 'react';

import { StreamerConsumerHook } from 'stores/streamerStore';

import { Status } from 'components/onLiveDot/onLiveDot.style';

function OnLiveDot({ small }) {
  const [{ stream }] = StreamerConsumerHook();

  return <Status onlive={stream} small={small} />;
}

export default OnLiveDot;
