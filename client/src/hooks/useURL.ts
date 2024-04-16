import React from 'react'

type ParamsType = Record<string, string | undefined>;

const useUrl = (baseUrl: string, params: ParamsType) => {
  const [url, setUrl] = React.useState(() => new URL(baseUrl, document.location.href))

  React.useEffect(() => {
    const updatedUrl = new URL(baseUrl, document.location.href)

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        updatedUrl.searchParams.set(key, value!)
      } else {
        updatedUrl.searchParams.delete(key)
      }
    })

    setUrl(updatedUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseUrl, JSON.stringify(params)])

  return url
}

export default useUrl
