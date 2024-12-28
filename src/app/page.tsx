import PokemonSearch from '@/components/PokemonSearch';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          Pokémon Search
        </h1>
        <PokemonSearch />
      </div>
    </main>
  );
}