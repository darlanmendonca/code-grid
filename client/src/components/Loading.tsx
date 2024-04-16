import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Text = styled.div`
  font-size: 2em;
  font-family: sans-serif;
  padding: 2em 0;
`

const Spinner = styled.span`
  animation: extend 1s steps(3, end) infinite;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;

  &:before {
    content: '...';
  }

  @keyframes extend {
    0% {
      width: 0.25em;
    }
    100% {
      width: 1em;
    }
  }
`

const Loading: React.FC = () => (
  <Container>
    <Text>
      Loading <Spinner />
    </Text>
  </Container>
)

export default Loading
