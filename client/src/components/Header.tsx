import React from 'react'
import styled from '@emotion/styled'

interface Props {
  children?: React.ReactNode
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`

const Header: React.FC<Props> = (props) => <HeaderStyled>{props.children}</HeaderStyled>

export default Header
