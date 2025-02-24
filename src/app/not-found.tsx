import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-gray-600">Página não encontrada</p>
      <Link href="/">
        <Button className="mt-4">Voltar para a Home</Button>
      </Link>
    </div>
  );
}
