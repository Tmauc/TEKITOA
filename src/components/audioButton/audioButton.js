import React from 'react'

import {
  PhraseButton,
  PlayIcon,
} from 'components/audioButton/audioButton.style';

function AudioButton({ onClickAudio }) {

  return (
    <PhraseButton onClick={onClickAudio}>
      <PlayIcon
        alt="Play icon"
        src={process.env.PUBLIC_URL + '/assets/icons/audioWave.svg'}
      />
    </PhraseButton>
  )
}

export default AudioButton
