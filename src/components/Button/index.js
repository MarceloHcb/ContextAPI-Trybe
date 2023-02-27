import React from 'react'
import * as C from './styles'

function Button({Text, onClick, type= 'button'}) {   
  return (
    <C.Button type={type} onClick={onClick}>
        {Text}
    </C.Button>
  )
}

export default Button