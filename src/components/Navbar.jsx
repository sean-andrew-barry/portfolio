import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Briefcase, User, Mail, BookOpen } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: Briefcase },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className={`text-2xl font-bold transition-colors ${
            scrolled ? 'text-gray-900' : 'text-white'
          }`}
        >
          Sean Barry
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? scrolled 
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg" 
                      : "bg-white/20 text-white backdrop-blur-sm"
                    : scrolled
                      ? "text-gray-700 hover:text-purple-600 hover:bg-gray-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled 
              ? 'text-gray-900 hover:bg-gray-100' 
              : 'text-white hover:bg-white/10'
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}