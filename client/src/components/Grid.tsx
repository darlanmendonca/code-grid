import React, { createContext, useState, useEffect } from 'react'
import useURL from '../hooks/useURL'
import useFetch from '../hooks/useFetch'

interface GridContextState {
  allowCharacter: boolean
  setAllowCharacter: (allow: boolean) => void
  generating: boolean
  setGenerating: (generating: boolean) => void
  bias: string
  setBias: (bias: string) => void
  characters: string[][]
  code: string
  refetch: () => void
  loading: boolean
  data?: GridData
}

interface GridData {
  characters: string[][]
  code: string
}

export const GridContext = createContext<GridContextState | undefined>(undefined)

export const GridProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allowCharacter, setAllowCharacter] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [bias, setBias] = useState('')

  const gridURL = useURL('api/grid', { bias })
  const { data, loading, refetch } = useFetch<GridData>(gridURL.toString(), generating)

  useEffect(() => {
    if (!generating) return

    const refetchInterval = setInterval(() => {
      refetch()
    }, 2000)

    return () => clearInterval(refetchInterval)
  }, [refetch, generating])

  useEffect(() => {
    if (!bias || !generating) return

    setAllowCharacter(false)

    const allowCharacterInterval = setInterval(() => {
      setAllowCharacter(true)
    }, 4000)

    return () => clearInterval(allowCharacterInterval)
  }, [bias, generating])

  const characters = data?.characters ?? []
  const code = data?.code ?? ''

  // Context value
  const value = {
    allowCharacter,
    setAllowCharacter,
    generating,
    setGenerating,
    bias,
    setBias,
    characters,
    code,
    refetch,
    loading,
    data,
  }

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>
}
