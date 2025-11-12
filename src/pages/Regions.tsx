import Header from "@/components/Header";
import { Card } from "@/components/ui/card";

const regions = [
  {
    name: "Kanto",
    map: "https://static.wikia.nocookie.net/victoryroad/images/d/de/LGPEArt_Kanto.png",
  },
  {
    name: "Johto",
    map: "https://static.wikia.nocookie.net/victoryroad/images/3/3c/HGSSArt_Johto.png",
  },
  {
    name: "Hoenn",
    map: "https://static.wikia.nocookie.net/victoryroad/images/b/b4/ORASArt_Hoenn.png",
  },
  {
    name: "Sinnoh",
    map: "https://static.wikia.nocookie.net/victoryroad/images/5/52/PtArt_Sinnoh.png",
  },
  {
    name: "Unova",
    map: "https://static.wikia.nocookie.net/victoryroad/images/5/51/B2W2Art_Unova.png",
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
                  className="w-full max-w-md border-4 border-retro-black"
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
