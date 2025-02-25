import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const movie = await getMovieDetails(params.id);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 blur-lg"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      />

      <div className="relative z-10 container mx-auto p-6 flex flex-col lg:flex-row gap-10">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold">{movie.title}</h1>

          <div className="flex items-center gap-2">
            <Badge className="text-lg bg-yellow-500">
              ⭐ {movie.vote_average.toFixed(1)}
            </Badge>
            <span className="text-gray-400">
              Lançamento:{" "}
              {new Date(movie.release_date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          <p className="text-lg text-gray-300">{movie.overview}</p>

          <div className="flex gap-3 flex-wrap">
            {movie.genres.map((genre: { id: number; name: string }) => (
              <Badge key={genre.id} className="text-md bg-blue-500">
                {genre.name}
              </Badge>
            ))}
          </div>

          <Link href="/">
            <Button
              variant="outline"
              className="mt-4 flex items-center gap-2 text-black"
            >
              <ArrowLeft size={20} />
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
