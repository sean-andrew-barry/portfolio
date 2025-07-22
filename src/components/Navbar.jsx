import { useState, useEffect, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, Briefcase, User, Mail, BookOpen } from 'lucide-react';
import { identity } from '../data/identity';
import { projects } from '../data/projects';

const baseProjectsChildren = projects.map(p => ({
  to: p.link,
  label: p.title,
  gradient: p.gradient,
  bgColor: p.bgColor,
  image: p.image,
  icon: p.icon,
  imageAlt: p.imageAlt
}));

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  {
    to: '/projects',
    label: 'Projects',
    icon: Briefcase,
    children: baseProjectsChildren,
  },
  { to: '/blog', label: 'Blog', icon: BookOpen },
  { to: '/about', label: 'About', icon: User },
  { to: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar({ hasHero = false }) {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // States
  const atTop = !scrolled; // universal top
  const heroTransparent = atTop && hasHero;      // white text on hero
  const plainTransparent = atTop && !hasHero;    // dark text on plain white page
  const projectsActive = useMemo(() => location.pathname.startsWith('/projects'), [location.pathname]);

  const navPositionClass ='fixed';

  // Background / panel
  const navBgClass = atTop
    ? 'bg-transparent shadow-none'
    : 'bg-white/95 backdrop-blur-md shadow-lg';

  // Brand text color
  const brandColorClass = heroTransparent ? 'text-white' : 'text-gray-900';

  // Shared link base classes
  const baseLink = 'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200';

  const desktopLinkClasses = (active) => {
    if (active) {
      if (heroTransparent) return `${baseLink} bg-white/20 text-white backdrop-blur-sm`;
      if (plainTransparent) return `${baseLink} text-purple-700 bg-purple-50/80`; // subtle active on plain top
      return `${baseLink} bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg`;
    }
    if (heroTransparent) return `${baseLink} text-white/80 hover:text-white hover:bg-white/10`;
    if (plainTransparent) return `${baseLink} text-gray-700 hover:text-purple-600 hover:bg-gray-100/60`;
    return `${baseLink} text-gray-700 hover:text-purple-600 hover:bg-gray-100`;
  };

  return (
    <nav className={`${navPositionClass} top-0 left-0 w-full z-50 transition-colors duration-300 ${navBgClass}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavLink to="/" className={`text-2xl font-bold tracking-tight transition-colors ${brandColorClass}`}>
          {identity.name}
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ to, label, icon: Icon, children }) => {
            const isProjectsParent = to === '/projects';
            return (
              <div key={to} className="relative group">
                <NavLink
                  to={to}
                  className={({ isActive }) => desktopLinkClasses(isActive || (isProjectsParent && projectsActive))}
                >
                  <Icon size={18} />
                  {label}
                </NavLink>
                {children && (
                  <div className="absolute left-0 mt-2 w-64 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border-4 border-gray-200/50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50 overflow-hidden">
                    {children.map(({ to: childTo, label: childLabel, gradient, bgColor, image, icon: ChildIcon, imageAlt }) => (
                      <NavLink
                        key={childTo}
                        to={childTo}
                        className={({ isActive }) => {
                          if (isActive) return `flex items-center gap-3 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-150 bg-gradient-to-r ${gradient.join(" ")} text-white border-l-4 border-white/60`;
                          return `flex items-center gap-3 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-150 text-gray-700 hover:shadow-md hover:bg-gray-200`;
                        }}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {image ? (
                            <img src={image} alt={imageAlt || childLabel} className="w-6 h-6 rounded object-cover" />
                          ) : (
                            <ChildIcon className="w-4 h-4 text-gray-700" />
                          )}
                        </div>
                        <span>{childLabel}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
            heroTransparent
              ? 'text-white hover:bg-white/10 focus:ring-offset-transparent'
              : 'text-gray-900 hover:bg-gray-100 bg-white/40'
          }`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(({ to, label, icon: Icon, children }) => (
              <div key={to}>
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center gap-3 px-4 py-3 rounded-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow'
                      : 'flex items-center gap-3 px-4 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-100'
                  }
                >
                  <Icon size={20} />
                  {label}
                </NavLink>
                {children && (
                  <div className="ml-6 mt-2 space-y-1 pl-4 border-l-2 border-gray-200">
                    {children.map(({ to: childTo, label: childLabel, gradient, image, icon: ChildIcon, imageAlt }) => (
                      <NavLink
                        key={childTo}
                        to={childTo}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          isActive
                            ? `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium bg-gradient-to-r ${gradient} text-white shadow`
                            : 'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100'
                        }
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {image ? (
                            <img src={image} alt={imageAlt || childLabel} className="w-6 h-6 rounded object-cover" />
                          ) : (
                            <ChildIcon className="w-4 h-4 text-gray-600" />
                          )}
                        </div>
                        <span>{childLabel}</span>
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
