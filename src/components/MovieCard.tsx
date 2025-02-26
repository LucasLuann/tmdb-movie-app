"use client";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CirclePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";

interface MovieCardProps {
  id: number;
  title: string;
  posterPath: string;
  releaseDate: string;
  rating: number;
}

export function MovieCard({
  id,
  title,
  posterPath,
  releaseDate,
  rating,
}: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  const dataLancamento = new Date(releaseDate).toLocaleDateString("pt-BR");
  const router = useRouter();

  return (
    <Card className="w-80 h-full">
      <CardHeader className="p-5">
        <div>
          <Badge className="text-xs px-2 py-1">⭐ {rating.toFixed(1)}</Badge>
        </div>
        <CardTitle className="truncate text-2xl">{title}</CardTitle>
        <CardDescription className="text-xs">
          Data de Lançamento: {dataLancamento}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <img
          src={imageUrl}
          alt={title}
          className=" h-72 object-cover rounded-md text-center" // Altura fixa menor
        />
      </CardContent>
      <CardFooter className="p-3">
        <Button
          onClick={() => router.push(`/filme/${id}`)}
          className="w-full h-9 text-sm flex items-center justify-between"
        >
          <span className="flex-1 text-center">Detalhes</span>
          <CirclePlus size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
