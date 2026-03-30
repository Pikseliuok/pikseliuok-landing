import React from "react";

const Footer = () => {
  return (
    <footer className="relative z-20 mt-8 w-full rounded-t-2xl bg-white/60 shadow-lg backdrop-blur-lg dark:bg-black/60">
      <div className="mx-auto max-w-4xl px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pikseliuok</p>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Made with ❤️ by{" "}
          <a
            href="https://github.com/Karolinskis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 transition-colors hover:text-blue-700 hover:underline"
          >
            Karolinskis
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
