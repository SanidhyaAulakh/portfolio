function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-gray-900 dark:text-white text-center py-4 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
      © {new Date().getFullYear()} Sanidhya Singh. All rights reserved.
    </footer>
  );
}

export default Footer;
