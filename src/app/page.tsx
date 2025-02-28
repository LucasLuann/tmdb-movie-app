"use client";

import { useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { MovieCard } from "../components/MovieCard";
import { TrendingUp, Calendar, Star, Film } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  trendingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  upComingMovies
} from "@/lib/tmdb";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeTab, setActiveTab] = useState("trending");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if (activeTab === "trending") {
      trendingMovies().then((data) => {
        setMovies(data.results);
      });
    }

    if (activeTab === "popular") {
      fetchPopularMovies().then((data) => {
        setMovies(data.results);
      });
    }

    if (activeTab === "top_rated") {
      fetchTopRatedMovies().then((data) => {
        setMovies(data.results);
      });
    }

    if (activeTab === "em_breve") {
      upComingMovies().then((data) => {
        setMovies(data.results);
      });
    }
  }, [activeTab, setMovies]);

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <div className="bg-gray-900 py-5 sticky top-0 z-10 border-b border-gray-800 flex items-center flex-wrap justify-between px-10">
        <div className="h1 text-2xl font-bold mb-2">LucasMovies</div>

        <SearchBar setMovies={setMovies} />
      </div>

      <Tabs defaultValue="trending" className="mt-10 w-full">
        <TabsList className="flex flex-wrap gap-4 bg-gray-800 mt-2">
          <TabsTrigger
            value="trending"
            className={`text-lg text-white`}
            onClick={() => handleTabChange("trending")}
          >
            <TrendingUp className="w-5 h-5 mr-2" /> Em Alta
          </TabsTrigger>

          <TabsTrigger
            value="popular"
            className={`text-lg text-white`}
            onClick={() => handleTabChange("popular")}
          >
            <Star className="w-5 h-5 mr-2" /> Populares
          </TabsTrigger>

          <TabsTrigger
            value="top_rated"
            className={`text-lg text-white`}
            onClick={() => handleTabChange("top_rated")}
          >
            <Film className="w-5 h-5 mr-2" /> Melhores Avaliados
          </TabsTrigger>

          <TabsTrigger
            value="em_breve"
            className={`text-lg text-white`}
            onClick={() => handleTabChange("em_breve")}
          >
            <Calendar className="w-5 h-5 mr-2" /> Em Breve
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trending">
          <div className="flex flex-wrap gap-4 justify-center mt-20">
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
        </TabsContent>

        <TabsContent value="popular">
          <div className="flex flex-wrap gap-4 justify-center mt-20">
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
        </TabsContent>

        <TabsContent value="top_rated">
          <div className="flex flex-wrap gap-4 justify-center mt-20">
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
        </TabsContent>

        <TabsContent value="em_breve">
          <div className="flex flex-wrap gap-4 justify-center mt-20">
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
        </TabsContent>
      </Tabs>
    </div>
  );
}
