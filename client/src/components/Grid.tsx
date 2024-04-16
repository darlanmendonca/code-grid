import React from 'react'
import styled from '@emotion/styled'

interface Props {
  characters: string[][]
  highlight?: string
}

const Table = styled.table`
  width: 100%;
  max-width: 500px;
  margin: 2em auto;
  table-layout: fixed;
  border-spacing: 0;
  border: 0;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`

const TableRow = styled.tr`
  & + tr td {
    border-top: 1px solid #e9ecef;
  }
`

const TableCell = styled.td<{ highlight?: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  transition: all 0.2s ease;
  color: ${({ highlight }) => (highlight ? '#495057' : '#868e96')};
  background-color: ${({ highlight }) => (highlight ? '#dee2e6' : 'transparent')};

  & + td {
    border-left: 1px solid #e9ecef;
  }

  &:after,
  &:before {
    content: '';

    display: block;
    padding-bottom: calc(50% - 0.5em);
  }
`

const Grid: React.FC<Props> = (props) => (
  <>
    <Table>
      <tbody>
        {props.characters.map((line, lineIndex) => (
          <TableRow key={lineIndex}>
            {line.map((char, index) => (
              <TableCell key={index} highlight={char === props.highlight}>
                {char}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  </>
)

export default Grid
