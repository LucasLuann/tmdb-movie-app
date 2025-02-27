"use client";

import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieCard } from "../components/MovieCard";
import { TrendingUp } from "lucide-react";

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
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 py-5 sticky top-0 z-10 border-b border-gray-800 flex items-center flex-wrap justify-between px-10">
        <div className="h1 text-2xl font-bold mb-2">LucasMovies</div>

        
        <SearchBar setMovies={setMovies} />
      </div>

      {/* Seção de filmes populares */}
      <div>
        <div className="flex flex-col justify-center w-full px-10 py-10">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2 mb-5">
            <div className="flex items-center gap-2 bg-gray-900 p-4 rounded-lg">
              <TrendingUp /> Filmes Populares
            </div>
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
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
        </div>
      </div>
    </div>
  );
}
