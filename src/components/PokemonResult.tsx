import Image from 'next/image';
import { Pokemon } from '@/types/pokemon';
import { Card, CardContent } from '@/components/ui/card';

interface PokemonResultProps {
  pokemon: Pokemon;
  onEvolutionClick: (name: string) => void;
}

export default function PokemonResult({ pokemon, onEvolutionClick }: PokemonResultProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                fill
                className="object-contain p-2"
                sizes='(max-width: 768px) 100vw, 33vw'
                priority
              />
            </div>
            <h2 className="text-2xl font-bold mt-4 dark:text-white">{pokemon.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">#{pokemon.number}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Classification</h3>
              <p className="text-gray-600 dark:text-gray-400">{pokemon.classification}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Stats</h3>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    Max CP: {pokemon.maxCP}
                  </li>
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    Max HP: {pokemon.maxHP}
                  </li>
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    Flee Rate: {pokemon.fleeRate}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Size</h3>
                <ul className="space-y-1">
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    Height: {pokemon.height.minimum} - {pokemon.height.maximum}
                  </li>
                  <li className="text-sm text-gray-600 dark:text-gray-400">
                    Weight: {pokemon.weight.minimum} - {pokemon.weight.maximum}
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Types</h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Resistant to</h3>
                <div className="flex flex-wrap gap-1">
                  {pokemon.resistant.map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Weak against</h3>
                <div className="flex flex-wrap gap-1">
                  {pokemon.weaknesses.map((type) => (
                    <span
                      key={type}
                      className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded text-xs"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Attacks</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 dark:text-gray-200">Fast</h4>
                  <ul className="space-y-1">
                    {pokemon.attacks.fast.map((attack) => (
                      <li
                        key={attack.name}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {attack.name} ({attack.damage})
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 dark:text-gray-200">Special</h4>
                  <ul className="space-y-1">
                    {pokemon.attacks.special.map((attack) => (
                      <li
                        key={attack.name}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {attack.name} ({attack.damage})
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {pokemon.evolutions && pokemon.evolutions.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Evolutions</h3>
                <div className="grid grid-cols-3 gap-4">
                  {pokemon.evolutions.map((evolution) => (
                    <button
                      key={evolution.id}
                      onClick={() => onEvolutionClick(evolution.name)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors group"
                    >
                      <div className="relative w-20 h-20 mx-auto">
                        <Image
                          src={evolution.image}
                          alt={evolution.name}
                          fill
                          className="object-contain"
                          sizes='(max-width: 768px) 100vw, 33vw'
                        />
                      </div>
                      <p className="text-sm mt-2 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200">
                        {evolution.name}
                      </p>
                      <div className="flex gap-1 justify-center mt-1">
                        {evolution.types.map((type) => (
                          <span
                            key={type}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded text-xs"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {pokemon.evolutionRequirements && (
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">Evolution Requirements</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Needs {pokemon.evolutionRequirements.amount} {pokemon.evolutionRequirements.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}