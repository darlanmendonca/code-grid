import React from 'react'
import styled from '@emotion/styled'

interface Props {
  label: string
  onClick?: () => void
  primary?: boolean
}

const ButtonPrimary = styled.button`
  border-radius: 8px;
  background-color: #339af0;
  border: 0;
  line-height: 1.2em;
  padding: 1em;
  text-transform: uppercase;
  color: #e7f5ff;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #74c0fc;
  }
`

const ButtonFlat = styled.button`
  border-radius: 8px;
  background-color: #fff;
  border: 0;
  line-height: 1.2em;
  padding: 1em;
  text-transform: uppercase;
  color: #343a40;
  transition: all 0.2s ease;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: #dee2e6;
  }
`

const Button: React.FC<Props> = (props) =>
  props.primary ? (
    <ButtonPrimary onClick={props.onClick}>{props.label}</ButtonPrimary>
  ) : (
    <ButtonFlat>{props.label}</ButtonFlat>
  )

export default Button
