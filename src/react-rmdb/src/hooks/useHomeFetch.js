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
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)

      const newMovies = {
        ...movies,
        results:
          page > 1
            ? [...state.results, ...movies.results]
            : [...movies.results],
      }
      
      setState(newMovies)

      console.log('useEffect')
    } catch (error) {
      setError(true)
    }

    setLoading(false)
  }

  //initial render
  useEffect(() => {
    fetchMovies(1)
  }, [])

  return { state, loading, error }
}
