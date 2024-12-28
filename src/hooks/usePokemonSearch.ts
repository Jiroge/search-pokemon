import { useState } from 'react';
import { Pokemon } from '@/types/pokemon';

export function usePokemonSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const searchPokemon = async (name: string) => {
    if (!name) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/pokemon?name=${encodeURIComponent(name)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Failed to fetch Pokémon ${name}`);
      }
      
      if (!data.pokemon) {
        throw new Error(data.error || `Pokémon ${name} not found`);
      }

      setPokemon(data.pokemon);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch Pokémon');
      setPokemon(null);
      return false;
    } finally {
      setIsLoading(false);
      return true;
    }
  };

  return {
    pokemon,
    isLoading,
    error,
    searchPokemon,
  };
}