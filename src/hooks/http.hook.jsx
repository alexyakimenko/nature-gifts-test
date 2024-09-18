import { useState } from "react"


const useHttp = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const request = async (url, config = {method: "GET", headers: {'Content-Type': 'application/json'}, body: null}) => {
      setLoading(true)
      try {
        const req = await fetch(url, config)

        if(!req.ok) {
          throw new Error(`Could not fetch ${url}!\nErrorStatus: ${req.status}`)
        }

        return await req.json()
      } catch(e) {
        setError(e.message)
        throw e
      } finally {
        setLoading(false)
      }
    }

    const clearError = () => {
      setError(null)
    }

    return {loading, error, request, clearError}
}

export default useHttp