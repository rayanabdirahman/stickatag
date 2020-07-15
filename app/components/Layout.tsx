import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { ThemeProps } from './Themed'

export type LayoutProps = ThemeProps & View['props'] & {
  fullwidth: boolean
  background: string
}

const ScreenContainer = styled.View<LayoutProps>`
  padding: ${props  => props.fullwidth ? props.theme.layout.fullwidth : props.theme.layout.container};
  background-color: ${props => props.background === 'blue' ? props.theme.colour.blue :  props.theme.colour.white};
  height: 100%;
  position: relative;
`

export const Layout = (props: LayoutProps) => (
  <ScreenContainer {...props}>
    { props.children }
  </ScreenContainer>
)
