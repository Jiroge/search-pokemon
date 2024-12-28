"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import PokemonResult from "@/components/PokemonResult";
import { Alert } from "@/components/ui/alert";

export default function PokemonSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");

  const [showNotification, setShowNotification] = useState(false);
  const [alertText, setAlertText] = useState("");

  const { pokemon, isLoading, error, searchPokemon } = usePokemonSearch();

  const handleSearch = async (name: string) => {
    try {
      if (name.trim() === "") {
        throw new Error(`Search term is empty. Please enter a Pokémon name`);
      }

      setSearchTerm(name);
      await searchPokemon(name);
      router.push(`/?name=${encodeURIComponent(name.toLowerCase())}`, {
        scroll: false,
      });
    } catch (error) {
      setSearchTerm("");
      setAlertText(`${error}`);
      setShowNotification(true);
    }
  };

  useEffect(() => {
    const name = searchParams.get("name");
    if (name) {
      searchPokemon(name);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch(searchTerm)}
          placeholder="Search Pokémon..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-gray-700"
        />
        <button
          onClick={() => handleSearch(searchTerm)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>

      {isLoading && (
        <div className="text-center p-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-800 dark:border-gray-600 dark:border-t-gray-300"></div>
        </div>
      )}

      {error && (
        <div className="text-red-500 dark:text-red-400 text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          {error}
        </div>
      )}

      {showNotification && (
        <Alert
          title="Alert !"
          message={alertText}
          onClose={() => setShowNotification(false)}
        />
      )}

      {pokemon && (
        <PokemonResult pokemon={pokemon} onEvolutionClick={handleSearch} />
      )}
    </div>
  );
}
