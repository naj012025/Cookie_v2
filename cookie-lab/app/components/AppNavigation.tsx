import { NavLink } from "react-router";

//Determens where to navigate,
//end determins when the link counts as active.
//and css determins the links design
const links = [
  { to: "/", label: "Game", end: true },
  { to: "/upgrades", label: "Upgrades", end: false },
  { to: "/shop", label: "Shop", end: false },
  { to: "/collection", label: "Collection", end: false },
] as const;

//aria label is for screen readers.
export function AppNavigation() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <NavLink className="nav__brand" to="/">
          Cookie Lab
        </NavLink>
        <div className="nav__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
