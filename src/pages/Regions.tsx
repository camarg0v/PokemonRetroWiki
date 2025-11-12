import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const regions = [
  {
    name: "Kanto",
    map: "https://cdn2.bulbagarden.net/upload/thumb/1/13/Kanto_HGSS.png/500px-Kanto_HGSS.png",
  },
  {
    name: "Johto",
    map: "https://cdn2.bulbagarden.net/upload/thumb/5/5b/Johto_HGSS.png/500px-Johto_HGSS.png",
  },
  {
    name: "Hoenn",
    map: "https://cdn2.bulbagarden.net/upload/thumb/8/8a/Hoenn_ORAS.png/500px-Hoenn_ORAS.png",
  },
  {
    name: "Sinnoh",
    map: "https://cdn2.bulbagarden.net/upload/thumb/5/5e/Sinnoh_Pt.png/500px-Sinnoh_Pt.png",
  },
  {
    name: "Unova",
    map: "https://cdn2.bulbagarden.net/upload/thumb/8/83/Unova_B2W2.png/500px-Unova_B2W2.png",
  },
];

const Regions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
          REGIÕES
        </h1>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {regions.map((region) => (
            <Card
              key={region.name}
              className="border-4 border-retro-black p-6 bg-card"
            >
              <h2 className="text-2xl font-bold mb-4 text-center text-primary">
                {region.name.toUpperCase()}
              </h2>
              <div className="flex justify-center">
                <img
                  src={region.map}
                  alt={`Mapa de ${region.name}`}
                  className="w-full max-w-md border-4 border-retro-black pixelated"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Regions;
