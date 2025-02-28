const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function fetchMovies(query: string) {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
      query
    )}&language=pt-BR`
  );
  console.log("fecthMovies ", response);
  if (!response.ok) {
    throw new Error("Falha ao buscar filmes");
  }

  return response.json();
}

export async function fetchPopularMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar filmes populares");
  }

  return response.json();
}

export async function fetchTopRatedMovies() {
  const response = await fetch( 
    `${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar filmes mais avaliados");
  }

  return response.json();
}

export async function trendingMovies() {
  const response = await fetch(`${TMDB_BASE_URL}/trending/movie/day?api_key=${TMDB_API_KEY}&language=pt-BR`);

  if (!response.ok) {
    throw new Error("Falha ao buscar filmes em alta");
  }

  return response.json();
}

export async function upComingMovies() {
  const response = await fetch(`${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=pt-BR`);

  if (!response.ok) {
    throw new Error("Falha ao buscar filmes em breve");
  }

  return response.json();
}

export async function getMovieDetails(id: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}&language=pt-BR`
  );

  if (!res.ok) {
    throw new Error("Filme não encontrado");
  }

  return res.json();
}
