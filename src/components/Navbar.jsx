import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // install lucide-react if not already

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Sanidhya.dev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-400">
            About
          </Link>
          <Link to="/projects" className="hover:text-red-400">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-red-400">
            Contact
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border rounded hover:bg-gray-800"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block hover:text-red-400"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-red-400"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block hover:text-red-400"
            onClick={() => setMobileOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-red-400"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMobileOpen(false);
            }}
            className="w-full text-left text-sm px-3 py-1 border rounded hover:bg-gray-700"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
