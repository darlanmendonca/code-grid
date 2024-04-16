import React from 'react'
import styled from '@emotion/styled'

const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin: 1em auto 0;
  gap: 14px;
`

interface Props {
  children?: React.ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<Props> = (props) => (
  <FormStyled onSubmit={props.onSubmit}>{props.children}</FormStyled>
)

export default Form
