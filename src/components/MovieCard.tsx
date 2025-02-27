"use client";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, Calendar, Plus } from "lucide-react";
import {
  Card,
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
    <Card className="group w-80 h-full bg-gray-900 text-white border border-gray-800 rounded-lg overflow-hidden ">
      <div className="relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <Badge className="px-2.5 py-1 bg-black/70 border-yellow-500 text-yellow-500 font-medium rounded-md backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 mr-1 fill-yellow-500" />
            {rating.toFixed(1)}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="truncate text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-400 flex items-center gap-1.5 mt-1">
          <Calendar className="w-3.5 h-3.5" />
          {dataLancamento}
        </CardDescription>
      </CardHeader>

      <CardFooter className="p-2 h-full flex justify-between items-center">
        <Button
          onClick={() => router.push(`/filme/${id}`)}
          className="w-full hover:bg-gray-800 bg-gray-600 transition  delay-10"
        >
          Mais informações
          <Plus />
        </Button>
      </CardFooter>
    </Card>
  );
}
