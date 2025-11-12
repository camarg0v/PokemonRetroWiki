import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-primary animate-fade-in">
            POKÉMON RETRO WIKI
          </h1>
          <p className="text-lg sm:text-xl mb-12 text-foreground">
            Explore o mundo clássico de Pokémon!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Link to="/pokedex">
              <Button className="w-full h-24 text-lg border-4 border-retro-black bg-primary hover:bg-primary/90 text-primary-foreground">
                POKÉDEX
              </Button>
            </Link>
            <Link to="/regions">
              <Button className="w-full h-24 text-lg border-4 border-retro-black bg-accent hover:bg-accent/90 text-accent-foreground">
                REGIÕES
              </Button>
            </Link>
            <Link to="/trainers">
              <Button className="w-full h-24 text-lg border-4 border-retro-black bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                TREINADORES
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mt-16">
            <div className="p-4 border-4 border-retro-black bg-card">
              <div className="text-2xl font-bold text-primary">649</div>
              <div className="text-xs mt-2">Pokémon</div>
            </div>
            <div className="p-4 border-4 border-retro-black bg-card">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs mt-2">Regiões</div>
            </div>
            <div className="p-4 border-4 border-retro-black bg-card">
              <div className="text-2xl font-bold text-primary">40+</div>
              <div className="text-xs mt-2">Ginásios</div>
            </div>
            <div className="p-4 border-4 border-retro-black bg-card">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-xs mt-2">Elite Four</div>
            </div>
            <div className="p-4 border-4 border-retro-black bg-card">
              <div className="text-2xl font-bold text-primary">18</div>
              <div className="text-xs mt-2">Tipos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
