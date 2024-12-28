export interface Weight {
  minimum: string;
  maximum: string;
}

export interface Height {
  minimum: string;
  maximum: string;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface Evolution {
  id: string;
  name: string;
  image: string;
  number: string;
  types: string[];
}

export interface EvolutionRequirements {
  amount: number;
  name: string;
}

export interface Pokemon {
  id: string;
  name: string;
  number: string;
  classification: string;
  weight: Weight;
  height: Height;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  maxCP: number;
  maxHP: number;
  fleeRate: number;
  attacks: Attacks;
  image: string;
  evolutions: Evolution[] | null;
  evolutionRequirements: EvolutionRequirements | null;
}

export interface PokemonQueryResponse {
  pokemon: Pokemon;
}