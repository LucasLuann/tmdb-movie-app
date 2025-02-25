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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div>
          <Badge className="text-sm px-1 text-center">
            ⭐ {rating.toFixed(1)}{" "}
          </Badge>
          <CardTitle className="truncate text-lg">{title}</CardTitle>
        </div>
        <CardDescription>Data de Lançamento: {dataLancamento}</CardDescription>
      </CardHeader>
      {/* Garante que essa parte ocupe o máximo de espaço disponível */}
      <CardContent className="flex-grow flex flex-col items-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[400px] object-cover rounded-md"
        />
      </CardContent>
      <CardFooter className="mt-auto"> {/* Isso joga o footer sempre para o final */}
        <Button onClick={() => router.push(`/filme/${id}`)} className="w-full flex items-center justify-between">
          <span className="flex-1 text-center">Mais Informações</span>
          <CirclePlus />
        </Button>
      </CardFooter>
    </Card>
  );
}
