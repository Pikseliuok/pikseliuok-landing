import React from "react";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

const logo = "/logo.png";

const Header = () => {
  return (
    <header className="sticky top-4 w-full max-w-6xl mx-auto backdrop-blur-sm bg-white/60 dark:bg-black/60 border border-gray-200 dark:border-gray-700 shadow-lg dark:shadow-black/30 rounded-2xl z-20 mt-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Pikseliuok Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold tracking-tight">Pikseliuok</h1>
        </div>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="https://instagram.com/pikseliuok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={24}
                  className="text-pink-500 hover:text-pink-600 transition-colors cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://discord.gg/jCw8vg93xH"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord
                  size={24}
                  className="text-blue-500 hover:text-blue-600 transition-colors cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Pikseliuok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={24}
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
