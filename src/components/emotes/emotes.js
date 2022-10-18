import React, { useEffect, useCallback, useState } from 'react';

import Emote from 'components/emote/emote';
import { useDevice } from 'hooks/useDevice';

import { StreamerConsumerHook } from 'stores/streamerStore';
import { getRandomArray } from 'utils/getRandomItem.js';


function Emotes({ maxEmotes }) {
  const { isMobile } = useDevice();
  const [{ emotes }] =
    StreamerConsumerHook();
  const [randomEmotes, setRandomEmotes] = useState([]);

  const getRandomEmotes = useCallback(() => {
    if (emotes?.length > maxEmotes) {
      setRandomEmotes(getRandomArray(emotes, maxEmotes));
    } else {
      setRandomEmotes(emotes);
    }
  }, [emotes, maxEmotes]);

  useEffect(() => {
    if (emotes) {
      getRandomEmotes(emotes);
    }
  }, [emotes, getRandomEmotes]);

  return (
    <>
      {randomEmotes &&
        randomEmotes?.map((emote, index) => (
          <Emote
            key={emote?.id + index}
            path={emote?.images.url_4x}
            small={isMobile}
          />
        ))}
    </>
  )
}

export default Emotes
