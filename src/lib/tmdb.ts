const TMDB_API_KEY = process.env.TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3'

export async function fetchMovies(query: string) {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}`
  )

  if(!response.ok){
    throw new Error('Falha ao buscar filmes')
  }

  return response.json()
}

export async function fetchPopularMovies(){
  const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`)

  if(!response.ok){
    throw new Error('Falha ao buscar filmes populares')
  }

  return response.json()
}