import React from 'react'
import styled from '@emotion/styled'

interface Props {
  label: string
  value?: number
  onChange?: (value: number | undefined) => void
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

const Input = styled.input`
  border-radius: 8px;
  line-height: 2em;
  outline-color: #339af0;
  font-size: 1em;
  line-height: 1.2em;
  padding: 1em;
  box-sizing: border-box;
  border: 1px solid #e9ecef;
`

const InputNumber: React.FC<Props> = (props) => {
  const [input, setInput] = React.useState(props.value || '')

  const update = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)

    if (Number.isNaN(value)) {
      setInput('')
      props.onChange?.(undefined)
    } else {
      setInput(value)
      props.onChange?.(value)
    }
  }

  return (
    <Container>
      <Label>{props.label}</Label>
      <Input type="number" value={input} onChange={update} />
    </Container>
  )
}

export default InputNumber
