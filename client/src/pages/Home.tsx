import React from 'react'
import useGrid from '../hooks/useGrid'

import Header from '../components/Header'
import CharacterInput from '../components/CharacterInput'
import Button from '../components/Button'
import Loading from '../components/Loading'
import GridTable from '../components/GridTable'
import Code from '../components/Code'

const Home: React.FC = () => {
  const {
    characters,
    code,
    bias,
    setBias,
    allowCharacter,
    generating,
    loading,
    data,
    setGenerating,
  } = useGrid()

  return (
    <>
      <Header>
        <CharacterInput
          value={bias}
          onChange={setBias}
          disabled={!allowCharacter}
        />

        {!generating && (
          <Button
            label="Generate 2D Grid"
            onClick={() => setGenerating(true)}
            primary
          />
        )}
      </Header>

      {loading && !data && <Loading />}

      {data && (
        <>
          <GridTable characters={characters} highlight={bias} />
          <Code value={code} />
        </>
      )}
    </>
  )
}

export default Home
