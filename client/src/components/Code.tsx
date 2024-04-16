import React from 'react'
import styled from '@emotion/styled'

interface Props {
  value: string
}

const Text = styled.div`
  border-radius: 8px;
  line-height: 2.2em;
  font-family: sans-serif;
  display: block;
  width: 500px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #e9ecef;
  font-size: 2em;
  margin: 0 auto;
  padding: 0 1em;
  color: #495057;
  text-transform: uppercase;

  strong {
    color: #212529;
  }
`

const Code: React.FC<Props> = (props) => (
  <Text>
    Your code: <strong>{props.value}</strong>
  </Text>
)

export default Code
