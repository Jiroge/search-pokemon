"use client";

import { Suspense } from "react";
import PokemonSearch from "@/components/PokemonSearch";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="text-center p-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-800 dark:border-gray-600 dark:border-t-gray-300"></div>
        </div>
      }
    >
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
            Pokémon Search
          </h1>
          <PokemonSearch />
        </div>
      </main>
    </Suspense>
  );
}
