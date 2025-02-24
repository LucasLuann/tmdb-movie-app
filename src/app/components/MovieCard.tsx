"use client";

import Image from "next/image";
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
        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt={title}
            width={200}
            height={300}
            className="rounded-md"
          />
        </div>
      </CardContent>
    </Card>
  );
}
