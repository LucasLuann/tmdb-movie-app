"use client";

import type React from "react";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { fetchMovies } from "@/lib/tmdb";

export function SearchBar({ setMovies }) {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
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
