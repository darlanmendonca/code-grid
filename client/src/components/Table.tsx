import styled from '@emotion/styled'
import React from 'react'

const TableStyled = styled.table`
  max-width: 1200px;
  width: 100%;
  margin: 2em auto;
  table-layout: fixed;
  border-spacing: 0;
  border: 0;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  font-family: sans-serif;
`

export const TableHead = styled.thead`
  line-height: 2em;

  tr {
    border-bottom: 1px solid #e9ecef;
  }

  th {
    text-transform: uppercase;
    color: #868e96;
  }

  & tr th + th {
    border-left: 1px solid #e9ecef;
  }
`

export const TableRow = styled.tr`
  & + tr td {
    border-top: 1px solid #e9ecef;
  }
`

export const TableBody = styled.tbody`
  tr td {
    border-top: 1px solid #e9ecef;
  }
`

export const TableCell = styled.td`
  text-align: center;
  padding: 1em;

  & + td {
    border-left: 1px solid #e9ecef;
  }
`

interface Props {
  children?: React.ReactNode
}

const Table: React.FC<Props> = (props) => (
  <TableStyled>{props.children}</TableStyled>
)

export default Table
