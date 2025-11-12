import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const promises = [];
        for (let i = 1; i <= 649; i++) {
          promises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())
          );
        }
        
        const results = await Promise.all(promises);
        const pokemonData = results.map((data) => ({
          id: data.id,
          name: data.name,
          types: data.types.map((t: any) => t.type.name),
          sprite: data.sprites.front_default,
        }));
        
        setPokemon(pokemonData);
        setFilteredPokemon(pokemonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const filtered = pokemon.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toString().includes(searchTerm)
    );
    setFilteredPokemon(filtered);
  }, [searchTerm, pokemon]);

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      normal: "bg-gray-400",
      fire: "bg-orange-500",
      water: "bg-blue-500",
      electric: "bg-yellow-400",
      grass: "bg-green-500",
      ice: "bg-blue-200",
      fighting: "bg-red-700",
      poison: "bg-purple-500",
      ground: "bg-yellow-700",
      flying: "bg-indigo-400",
      psychic: "bg-pink-500",
      bug: "bg-lime-500",
      rock: "bg-yellow-800",
      ghost: "bg-purple-700",
      dragon: "bg-indigo-700",
      dark: "bg-gray-800",
      steel: "bg-gray-500",
      fairy: "bg-pink-300",
    };
    return colors[type] || "bg-gray-400";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
          POKÉDEX
        </h1>
        
        <div className="max-w-md mx-auto mb-8">
          <Input
            type="text"
            placeholder="Buscar por nome ou número..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-4 border-retro-black text-base"
          />
        </div>

        {loading ? (
          <div className="text-center text-xl">Carregando Pokémon...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredPokemon.map((p) => (
              <Card
                key={p.id}
                className="border-4 border-retro-black p-4 hover:scale-105 transition-transform bg-card"
              >
                <div className="text-center">
                  <div className="text-xs mb-2 font-bold">#{p.id.toString().padStart(3, "0")}</div>
                  <img
                    src={p.sprite}
                    alt={p.name}
                    className="w-24 h-24 mx-auto pixelated"
                    style={{ imageRendering: "pixelated" }}
                  />
                  <h3 className="text-xs mt-2 capitalize font-bold">{p.name}</h3>
                  <div className="flex gap-1 mt-2 justify-center flex-wrap">
                    {p.types.map((type) => (
                      <Badge
                        key={type}
                        className={`${getTypeColor(type)} text-white text-xs border-2 border-retro-black`}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pokedex;
