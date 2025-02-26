"use client";

import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieCard } from "../components/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 w-full">
      <h1 className="text-4xl font-bold mb-8">Buscar Filmes</h1>
      <SearchBar setMovies={setMovies} />
      <div className="flex flex-wrap gap-5 mt-8 justify-center items-center">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              id={movie.id}
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhum filme encontrado.</p>
        )}
      </div>
    </main>
  );
}
