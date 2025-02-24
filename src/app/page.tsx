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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-8 w-full">
        {movies?.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
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
