import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as React from 'react'

import { Thumbnail } from '../../atoms/Thumbnail'
import { theme } from '../../Theme'

type Props = {
  username: string,
  location: string
}

const Container = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export default function ProductHeader({ username, location }: Props) {
  return (
    <Container>
      <Thumbnail username={username} info={location} />
      <TouchableOpacity onPress={() => alert('Edit product')}>
        <Feather 
          name="edit"
          size={20}
          color={theme.colour.black}
          style={{ marginBottom: -3 }} 
        />
      </TouchableOpacity>
    </Container>
  )
}