"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { fetchMovies, fetchPopularMovies } from "@/lib/tmdb";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface SearchBarProps {
  setMovies: (movies: Movie[]) => void;
}

export function SearchBar({ setMovies }: SearchBarProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if(query === ""){
      fetchPopularMovies().then((data) => setMovies(data.results));
    }
  }, [query, setMovies])

  const handleSearch = (query: string) => {
    fetchMovies(query).then((data) => setMovies(data.results));
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Buscar filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => handleSearch(query)}>Buscar</Button>
    </div>
  );
}
