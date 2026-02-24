import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = ['about', 'services', 'portfolio', 'pricing', 'team', 'contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-bold text-brand-700 dark:text-brand-500">KinzaTechSolutions</Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink key={item} to={`/${item}`} className="capitalize text-sm font-medium hover:text-brand-500">
              {item}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden" aria-label="Toggle menu">
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink key={item} to={`/${item}`} onClick={() => setOpen(false)} className="rounded-lg px-2 py-1 capitalize hover:bg-slate-100 dark:hover:bg-slate-800">
                {item}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
