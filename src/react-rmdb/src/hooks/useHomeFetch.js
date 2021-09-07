import { useState, useEffect } from 'react'
//api
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)

      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))

      console.log('useEffect')
    } catch (error) {
      setError(true)
    }

    setLoading(false)
  }

  //initial render and search
  useEffect(() => {
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  return { setSearchTerm, searchTerm, state, loading, error }
}
