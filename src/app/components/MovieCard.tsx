"use client";

import { Button } from "./ui/button";
import { CirclePlus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";

interface MovieCardProps {
  title: string;
  posterPath: string;
  releaseDate: string;
}

export function MovieCard({ title, posterPath, releaseDate }: MovieCardProps) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  const dataLancamento = new Date(releaseDate).toLocaleDateString("pt-BR");

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription>Data de Lançamento: {dataLancamento}</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <div className="flex justify-center flex-col space-y-4 items-center">
          <img
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="rounded-md"
          />
          <Button className="w-full flex items-center justify-between">
            <span className="flex-1 text-center">Mais Informações</span>
            <CirclePlus />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
