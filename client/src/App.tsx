import React from 'react'
import Header from './components/Header'
import CharacterInput from './components/CharacterInput'
import Button from './components/Button'
import Loading from './components/Loading'
import Grid from './components/Grid'
import Code from './components/Code'
import useURL from './hooks/useURL'
import useFetch from './hooks/useFetch'

const App: React.FC = () => {
  const [allowCharacter, setAllowCharacter] = React.useState(true)
  const [generating, setGenerating] = React.useState(false)
  const [bias, setBias] = React.useState('')

  const gridURL = useURL('api/grid', {
    bias,
  })

  const { data, loading, refetch } = useFetch<{
    characters: string[][]
    code: string
  }>(gridURL.toString(), generating)

  React.useEffect(() => {
    if (!generating) return

    const refetchInterval = setInterval(() => {
      refetch()
    }, 2000)

    return () => clearInterval(refetchInterval)
  }, [refetch, generating])

  React.useEffect(() => {
    if (!bias || !generating) return

    setAllowCharacter(false)

    const allowCharacterInterval = setInterval(() => {
      setAllowCharacter(true)
    }, 4000)

    return () => clearInterval(allowCharacterInterval)
  }, [bias, generating])

  const characters = data?.characters ?? []
  const code = data?.code ?? ''

  return (
    <>
      <Header>
        <CharacterInput value={bias} onChange={setBias} disabled={!allowCharacter} />

        {!generating && <Button label="Generate 2D Grid" onClick={() => setGenerating(true)} primary />}
      </Header>

      {loading && !data && <Loading />}

      {data && (
        <>
          <Grid characters={characters} highlight={bias} />
          <Code value={code} />
        </>
      )}
    </>
  )
}

export default App
