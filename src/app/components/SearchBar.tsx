"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

interface SearchBarProps {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }


  return (
    <form className="flex w-full max-w-sm items-center space-x-2">
      <Input onSubmit={handleSubmit} type="text" placeholder="Buscar filmes..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <Button>Buscar</Button>
    </form>
  )
}