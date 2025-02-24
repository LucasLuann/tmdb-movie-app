"use client";

import { useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { MovieCard } from "./components/MovieCard";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-12">
      <h1 className="text-4xl font-bold mb-8">Buscar Filmes</h1>
      <SearchBar setMovies={setMovies} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhum filme encontrado.</p>
        )}
      </div>
    </main>
  );
}
