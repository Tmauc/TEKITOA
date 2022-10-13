import React, { useEffect } from 'react'
import { getClips, getEmote, getRediff } from 'core/twitchAPI.js';
import { StreamerConsumerHook } from 'stores/streamerStore';

function Twitch() {
  const [{ OAuth, id, popularClip, lastRediff, emotes }, dispatch] = StreamerConsumerHook();

  useEffect(() => {
    getEmote(dispatch, OAuth, id);
    getClips(dispatch, OAuth, id);
    getRediff(dispatch, OAuth, id);
  }, []);

  return (
    <section className='twitch'>
      <h1 className='title'>Twitch</h1>
      {emotes && emotes?.map((emote, index) => (
        <div key={emote?.id + index + 'div'}>
          <img key={emote?.id + index} src={emote?.images.url_4x} />
        </div>
      ))}
    </section>
  )
}

export default Twitch
