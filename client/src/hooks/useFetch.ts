import { useState, useEffect, useCallback } from 'react'

const useFetch = <ResponseType>(url: string, fetchOnMount = true) => {
  const [data, setData] = useState<ResponseType | undefined>()
  const [error, setError] = useState<Error | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const create = useCallback(async (payload: Record<string, unknown>) => {
    setLoading(true)
    setError(undefined)

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const jsonData = await res.json() as ResponseType
      setData(jsonData)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('Something went wrong'))
      }
    } finally {
      setLoading(false)
    }
  }, [url])

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(undefined)

    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      }
      const jsonData = await res.json() as ResponseType
      setData(jsonData)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('Something went wrong'))
      }
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    if (fetchOnMount) {
      fetchData()
    }
  }, [fetchData, fetchOnMount])

  return { data, loading, error, refetch: fetchData, create }
}

export default useFetch