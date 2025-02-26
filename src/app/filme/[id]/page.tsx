import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface MovieDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getMovie(id: string) {
  try {
    return await getMovieDetails(id);
  } catch (error) {
    console.error("Failed to fetch movie details:", error);
    throw new Error("Failed to fetch movie details");
  }
}

const MovieDetailPage = async (props: MovieDetailPageProps) => {
  const params = await props.params;

  try {
    const movie = await getMovie(params.id);

    return (
      <div className="relative min-h-screen bg-black text-white">
        {/* Fundo do filme com blur */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 blur-lg"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        />

        {/* Conteúdo principal */}
        <div className="relative z-10 container mx-auto p-6 flex flex-col lg:flex-row gap-10">
          {/* Pôster do filme */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={400}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Detalhes do filme */}
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
              {movie.genres.map((genre) => (
                <Badge key={genre.id} className="text-md bg-blue-500">
                  {genre.name}
                </Badge>
              ))}
            </div>

            {/* Botão de voltar */}
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
  } catch (error) {
    console.error("Erro ao carregar detalhes do filme: ", error);
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Erro ao carregar detalhes do filme
          </h1>
          <p className="mb-4">
            Desculpe, não foi possível carregar os detalhes do filme.
          </p>
          <Link href="/" className="flex items-center gap-2 text-black justify-center">
            <Button variant="outline" className="flex items-center gap-2 text-black justify-center">
              <ArrowLeft size={20} />
              Voltar para a Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
};

export default MovieDetailPage;
