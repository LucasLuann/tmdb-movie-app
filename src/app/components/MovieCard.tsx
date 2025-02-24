import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

interface MovieCardProps {
  title: string
  posterPath: string
  releaseDate: string
}

export function MovieCard({ title, posterPath, releaseDate }: MovieCardProps) {
  return (
    <Card className="w-[250px]">
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          width={200}
          height={300}
          className="rounded-md"
        />
        <p className="mt-2 text-sm text-gray-500">Data de Lançamento: {releaseDate}</p>
      </CardContent>
    </Card>
  )
}

