import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { StreamerConsumerHook } from 'stores/streamerStore';

import {
  Section,
  TextWrapper,
  Title,
  Label,
  LabelTmp,
  AudioText,
  WrapperAudio,
} from 'pages/home/home.style';
import AudioButton from 'components/audioButton/audioButton';
import Button from 'components/button/button';

function Home() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [{ }, dispatch] = StreamerConsumerHook();
  var audioTEKITOA = new Audio(process.env.PUBLIC_URL + '/assets/TEKITOA.mp3');

  function handleClick() {
    navigate('/about');
  }

  const onClickAudio = () => {
    audioTEKITOA.play();
  };

  useEffect(() => {
    dispatch({
      type: 'cleanStreamer',
    });
  }, [dispatch]);

  return (
    <Section className="home">
      <TextWrapper>
        <Title>TE KI TOA</Title>
        <Label>À la découverte des streamer⸱euses !</Label>
        <LabelTmp>L'émission est en pause pendant une durée indéterminée ! Merci à tous de votre soutien :D</LabelTmp>
      </TextWrapper>
      <Button label='Découvrir' callbackFunc={handleClick} />
      <WrapperAudio>
        <AudioText>Clique !</AudioText>
        <AudioButton onClickAudio={onClickAudio} />
      </WrapperAudio>
    </Section>
  );
}
export default Home;