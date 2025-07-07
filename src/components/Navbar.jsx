import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Menu, X, Briefcase, User, Mail, BookOpen } from "lucide-react";

const navLinks = [
  { to: "/projects", label: "Projects", icon: Briefcase },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold text-gray-800">
          Sean Barry
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center text-sm">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-1 transition-colors ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-gray-900"
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
          className="md:hidden text-gray-800"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                `flex items-center gap-2 py-2 px-3 rounded transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
