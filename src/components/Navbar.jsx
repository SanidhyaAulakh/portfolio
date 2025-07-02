import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-white text-black dark:bg-gray-900 dark:text-white shadow px-6 py-4 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          Sanidhya.dev
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 items-center text-base">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500 transition">
            About
          </Link>
          <Link to="/projects" className="hover:text-red-500 transition">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-red-500 transition">
            Contact
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-sm px-3 py-1 border border-gray-400 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
