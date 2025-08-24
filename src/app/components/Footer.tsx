import React from "react";

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-lg bg-white/60 dark:bg-black/60 text-foreground shadow-lg rounded-t-2xl mt-8 relative z-20">
      <div className="max-w-4xl mx-auto text-center py-4 px-6">
        <p>&copy; {new Date().getFullYear()} Pikseliuok</p>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Karolinskis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 hover:underline transition-colors"
          >
            Karolinskis
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
