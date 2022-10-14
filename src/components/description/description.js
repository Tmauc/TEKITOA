import React from 'react'
import styled from 'styled-components';

import { useDevice } from 'hooks/useDevice'

import { WrapperStyle, TitleStyle, SeparatorStyle, LabelStyle } from './description.style'

function Description({ title, label }) {
  const { isMobile } = useDevice();
  return (
    <Wrapper isMobile={isMobile}>
      <Title>{title}</Title>
      <Separator>$ ~</Separator>
      <Label>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${WrapperStyle};
`

const Title = styled.p`
  ${TitleStyle};
`

const Separator = styled.p`
  ${SeparatorStyle};
`

const Label = styled.p`
  ${LabelStyle};
`

export default Description
