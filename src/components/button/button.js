import React from 'react'

import {
  ButtonWrapper
} from 'components/button/button.style';

function Button({ label, callbackFunc }) {
  return (
    <ButtonWrapper onClick={callbackFunc}>{label}</ButtonWrapper>
  )
}

export default Button
