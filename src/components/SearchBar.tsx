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
  vote_average: number;
}

interface SearchBarProps {
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
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
      className="p-5"
        type="text"
        placeholder="Buscar filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button className="bg-gray-600 p-5 hover:bg-gray-700"  onClick={() => handleSearch(query)}>Buscar</Button>
    </div>
  );
}
