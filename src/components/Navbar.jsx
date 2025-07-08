import { useState, useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, User, Mail, BookOpen } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  {
    to: "/projects",
    label: "Projects",
    icon: Briefcase,
    children: [
      { to: "/projects/be-fit-beyond-fifty", label: "Be Fit Beyond Fifty" },
      { to: "/projects/taggly", label: "Taggly" },
      { to: "/projects/warble", label: "Warble" },
    ],
  },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const atTopHome = isHome && !scrolled;

  return (
    <nav
      className={`${
        isHome ? 'fixed' : 'sticky'
      } top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : isHome
          ? 'bg-transparent'
          : 'bg-white/95'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className={`text-2xl font-bold transition-colors ${
            scrolled || !isHome ? 'text-gray-900' : 'text-white'
          }`}
        >
          Sean Barry
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ to, label, icon: Icon, children }) => (
            <div key={to} className="relative group">
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? atTopHome
                        ? "bg-white/20 text-white backdrop-blur-sm"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : atTopHome
                        ? "text-white/80 hover:text-white hover:bg-white/10"
                        : "text-gray-700 hover:text-purple-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
              {children && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50 overflow-hidden">
                  {children.map(({ to: childTo, label: childLabel }) => (
                    <NavLink
                      key={childTo}
                      to={childTo}
                      className={({ isActive }) =>
                        `block px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-200 border-l-4 border-transparent hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 ${
                          isActive
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-l-purple-600"
                            : "text-gray-700 hover:text-purple-600"
                        }`
                      }
                    >
                      {childLabel}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHome
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
            {navLinks.map(({ to, label, icon: Icon, children }) => (
              <div key={to}>
                <NavLink
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
                {children && (
                  <div className="ml-6 mt-2 space-y-1 pl-4 border-l-2 border-gray-200">
                    {children.map(({ to: childTo, label: childLabel }) => (
                      <NavLink
                        key={childTo}
                        to={childTo}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-l-4 border-transparent hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 ${
                            isActive
                              ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-l-purple-600"
                              : "text-gray-600 hover:text-purple-600"
                          }`
                        }
                      >
                        {childLabel}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}