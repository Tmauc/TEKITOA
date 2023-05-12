import React from 'react';

import {
  Wrapper,
  Title,
  Separator,
  Label,
} from 'components/description/description.style';

function Description({ title, label }) {

  return (
    <Wrapper>
      <Separator>$ ~</Separator>
      <Title>{title}</Title>
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default Description;
