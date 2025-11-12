import { NavLink } from "./NavLink";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground border-b-4 border-retro-black">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-wrap gap-4 justify-center items-center">
          <NavLink
            to="/"
            className="px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs sm:text-sm"
            activeClassName="bg-secondary text-secondary-foreground"
          >
            INÍCIO
          </NavLink>
          <NavLink
            to="/pokedex"
            className="px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs sm:text-sm"
            activeClassName="bg-secondary text-secondary-foreground"
          >
            POKÉDEX
          </NavLink>
          <NavLink
            to="/regions"
            className="px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs sm:text-sm"
            activeClassName="bg-secondary text-secondary-foreground"
          >
            REGIÕES
          </NavLink>
          <NavLink
            to="/trainers"
            className="px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-colors text-xs sm:text-sm"
            activeClassName="bg-secondary text-secondary-foreground"
          >
            TREINADORES
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
