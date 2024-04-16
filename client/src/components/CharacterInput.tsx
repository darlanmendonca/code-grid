import React from 'react'
import styled from '@emotion/styled'

interface Props {
  value?: string
  disabled?: boolean
  onChange?: (value: string) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  gap: 4px;
`

const Label = styled.label`
  font-family: sans-serif;
  color: #495057;
`

const Input = styled.input<{ disabled?: boolean }>`
  border-radius: 8px;
  line-height: 2em;
  width: 5em;
  text-align: center;
  caret-color: transparent;
  text-transform: uppercase;
  outline-color: #339af0;
  font-size: 1em;
  line-height: 1.2em;
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid ${({ disabled }) => (disabled ? '#e9ecef' : '#adb5bd')};
  background-color: ${({ disabled }) => (disabled ? '#e9ecef' : 'transparent')};

  &::selection {
    color: inherit;
    background: transparent;
  }
`

const CharacterInput: React.FC<Props> = (props) => {
  const [input, setInput] = React.useState(props.value || '')

  const update = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastChar = event.target.value.slice(-1).toLowerCase()

    if (/^[a-zA-Z]$/.test(lastChar) || event.target.value === '') {
      setInput(lastChar)
      props.onChange?.(lastChar)
    } else {
      event.preventDefault()
    }
  }

  return (
    <Container>
      <Label>Character</Label>
      <Input type="text" value={input} onChange={update} disabled={props.disabled} />
    </Container>
  )
}

export default CharacterInput
