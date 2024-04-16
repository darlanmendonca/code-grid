import { useState, useEffect, useCallback } from 'react'

const useFetch = <ResponseType>(url: string, fetchOnMount = true) => {
  const [data, setData] = useState<ResponseType | undefined>()
  const [error, setError] = useState<Error | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

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

  return { data, loading, error, refetch: fetchData }
}

export default useFetch