import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Trainer {
  name: string;
  region: string;
  role: string;
  types: string[];
  sprite: string;
}

const trainers: Trainer[] = [
  // Kanto - Líderes de Ginásio
  { name: "Brock", region: "Kanto", role: "Líder de Ginásio", types: ["rock"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/95.png" },
  { name: "Misty", region: "Kanto", role: "Líder de Ginásio", types: ["water"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/121.png" },
  { name: "Lt. Surge", region: "Kanto", role: "Líder de Ginásio", types: ["electric"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/82.png" },
  { name: "Erika", region: "Kanto", role: "Líder de Ginásio", types: ["grass"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/45.png" },
  { name: "Koga", region: "Kanto", role: "Líder de Ginásio", types: ["poison"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/89.png" },
  { name: "Sabrina", region: "Kanto", role: "Líder de Ginásio", types: ["psychic"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/65.png" },
  { name: "Blaine", region: "Kanto", role: "Líder de Ginásio", types: ["fire"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/78.png" },
  { name: "Giovanni", region: "Kanto", role: "Líder de Ginásio", types: ["ground"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/31.png" },
  // Kanto - Elite Four & Campeão
  { name: "Lorelei", region: "Kanto", role: "Elite Four", types: ["ice"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/91.png" },
  { name: "Bruno", region: "Kanto", role: "Elite Four", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/68.png" },
  { name: "Agatha", region: "Kanto", role: "Elite Four", types: ["ghost"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/94.png" },
  { name: "Lance", region: "Kanto", role: "Elite Four", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/149.png" },
  { name: "Blue", region: "Kanto", role: "Campeão", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/18.png" },
  // Kanto - Rival
  { name: "Red", region: "Kanto", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/6.png" },
  
  // Johto - Líderes de Ginásio
  { name: "Falkner", region: "Johto", role: "Líder de Ginásio", types: ["flying"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/178.png" },
  { name: "Bugsy", region: "Johto", role: "Líder de Ginásio", types: ["bug"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/165.png" },
  { name: "Whitney", region: "Johto", role: "Líder de Ginásio", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/241.png" },
  { name: "Morty", region: "Johto", role: "Líder de Ginásio", types: ["ghost"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/94.png" },
  { name: "Chuck", region: "Johto", role: "Líder de Ginásio", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/237.png" },
  { name: "Jasmine", region: "Johto", role: "Líder de Ginásio", types: ["steel"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/208.png" },
  { name: "Pryce", region: "Johto", role: "Líder de Ginásio", types: ["ice"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/221.png" },
  { name: "Clair", region: "Johto", role: "Líder de Ginásio", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/230.png" },
  // Johto - Elite Four & Campeão
  { name: "Will", region: "Johto", role: "Elite Four", types: ["psychic"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/178.png" },
  { name: "Koga", region: "Johto", role: "Elite Four", types: ["poison"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/169.png" },
  { name: "Bruno", region: "Johto", role: "Elite Four", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/68.png" },
  { name: "Karen", region: "Johto", role: "Elite Four", types: ["dark"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/197.png" },
  { name: "Lance", region: "Johto", role: "Campeão", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/149.png" },
  // Johto - Rival
  { name: "Silver", region: "Johto", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/160.png" },
  
  // Hoenn - Líderes de Ginásio
  { name: "Roxanne", region: "Hoenn", role: "Líder de Ginásio", types: ["rock"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/299.png" },
  { name: "Brawly", region: "Hoenn", role: "Líder de Ginásio", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/297.png" },
  { name: "Wattson", region: "Hoenn", role: "Líder de Ginásio", types: ["electric"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/310.png" },
  { name: "Flannery", region: "Hoenn", role: "Líder de Ginásio", types: ["fire"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/324.png" },
  { name: "Norman", region: "Hoenn", role: "Líder de Ginásio", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/289.png" },
  { name: "Winona", region: "Hoenn", role: "Líder de Ginásio", types: ["flying"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/334.png" },
  { name: "Tate & Liza", region: "Hoenn", role: "Líder de Ginásio", types: ["psychic"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/337.png" },
  { name: "Wallace", region: "Hoenn", role: "Líder de Ginásio", types: ["water"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/350.png" },
  // Hoenn - Elite Four & Campeão
  { name: "Sidney", region: "Hoenn", role: "Elite Four", types: ["dark"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/262.png" },
  { name: "Phoebe", region: "Hoenn", role: "Elite Four", types: ["ghost"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/354.png" },
  { name: "Glacia", region: "Hoenn", role: "Elite Four", types: ["ice"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/362.png" },
  { name: "Drake", region: "Hoenn", role: "Elite Four", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/373.png" },
  { name: "Steven", region: "Hoenn", role: "Campeão", types: ["steel"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/376.png" },
  // Hoenn - Rivais
  { name: "May", region: "Hoenn", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/257.png" },
  { name: "Brendan", region: "Hoenn", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/254.png" },
  
  // Sinnoh - Líderes de Ginásio
  { name: "Roark", region: "Sinnoh", role: "Líder de Ginásio", types: ["rock"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/409.png" },
  { name: "Gardenia", region: "Sinnoh", role: "Líder de Ginásio", types: ["grass"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/407.png" },
  { name: "Maylene", region: "Sinnoh", role: "Líder de Ginásio", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/448.png" },
  { name: "Crasher Wake", region: "Sinnoh", role: "Líder de Ginásio", types: ["water"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/419.png" },
  { name: "Fantina", region: "Sinnoh", role: "Líder de Ginásio", types: ["ghost"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/429.png" },
  { name: "Byron", region: "Sinnoh", role: "Líder de Ginásio", types: ["steel"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/411.png" },
  { name: "Candice", region: "Sinnoh", role: "Líder de Ginásio", types: ["ice"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/478.png" },
  { name: "Volkner", region: "Sinnoh", role: "Líder de Ginásio", types: ["electric"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/405.png" },
  // Sinnoh - Elite Four & Campeão
  { name: "Aaron", region: "Sinnoh", role: "Elite Four", types: ["bug"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/469.png" },
  { name: "Bertha", region: "Sinnoh", role: "Elite Four", types: ["ground"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/450.png" },
  { name: "Flint", region: "Sinnoh", role: "Elite Four", types: ["fire"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/392.png" },
  { name: "Lucian", region: "Sinnoh", role: "Elite Four", types: ["psychic"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/475.png" },
  { name: "Cynthia", region: "Sinnoh", role: "Campeão", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/445.png" },
  // Sinnoh - Rival
  { name: "Barry", region: "Sinnoh", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/392.png" },
  
  // Unova - Líderes de Ginásio
  { name: "Cilan", region: "Unova", role: "Líder de Ginásio", types: ["grass"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/512.png" },
  { name: "Chili", region: "Unova", role: "Líder de Ginásio", types: ["fire"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/514.png" },
  { name: "Cress", region: "Unova", role: "Líder de Ginásio", types: ["water"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/516.png" },
  { name: "Lenora", region: "Unova", role: "Líder de Ginásio", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/508.png" },
  { name: "Burgh", region: "Unova", role: "Líder de Ginásio", types: ["bug"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/542.png" },
  { name: "Elesa", region: "Unova", role: "Líder de Ginásio", types: ["electric"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/523.png" },
  { name: "Clay", region: "Unova", role: "Líder de Ginásio", types: ["ground"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/530.png" },
  { name: "Skyla", region: "Unova", role: "Líder de Ginásio", types: ["flying"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/instances/generation-v/black-white/581.png" },
  { name: "Brycen", region: "Unova", role: "Líder de Ginásio", types: ["ice"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/615.png" },
  { name: "Drayden", region: "Unova", role: "Líder de Ginásio", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/612.png" },
  // Unova - Elite Four & Campeão
  { name: "Shauntal", region: "Unova", role: "Elite Four", types: ["ghost"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/609.png" },
  { name: "Marshal", region: "Unova", role: "Elite Four", types: ["fighting"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/620.png" },
  { name: "Grimsley", region: "Unova", role: "Elite Four", types: ["dark"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/560.png" },
  { name: "Caitlin", region: "Unova", role: "Elite Four", types: ["psychic"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/518.png" },
  { name: "Alder", region: "Unova", role: "Campeão", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/637.png" },
  { name: "Iris", region: "Unova", role: "Campeão", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/621.png" },
  // Unova - Rivais
  { name: "Cheren", region: "Unova", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/506.png" },
  { name: "Bianca", region: "Unova", role: "Rival", types: ["normal"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/505.png" },
  { name: "N", region: "Unova", role: "Rival", types: ["dragon"], sprite: "https://cdn.jsdelivr.net/gh/PokeAPI/sprites@master/sprites/pokemon/versions/generation-v/black-white/644.png" },
];

const Trainers = () => {
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

  const regions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
          TREINADORES
        </h1>

        {regions.map((region) => (
          <div key={region} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-accent text-center">
              {region.toUpperCase()}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {trainers
                .filter((t) => t.region === region)
                .map((trainer) => (
                  <Card
                    key={trainer.name}
                    className="border-4 border-retro-black p-4 hover:scale-105 transition-transform bg-card"
                  >
                    <div className="text-center">
                      <img
                        src={trainer.sprite}
                        alt={trainer.name}
                        className="w-24 h-24 mx-auto pixelated"
                        style={{ imageRendering: "pixelated" }}
                      />
                      <h3 className="text-xs mt-2 font-bold">{trainer.name}</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {trainer.role}
                      </p>
                      <div className="flex gap-1 mt-2 justify-center flex-wrap">
                        {trainer.types.map((type) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
