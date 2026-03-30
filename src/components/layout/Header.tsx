import React from "react";
import Image from "next/image";
import { FaInstagram, FaDiscord, FaGithub } from "react-icons/fa";
import Link from "next/link";

const logo = "/logo.png";

const Header = () => {
  return (
    <header className="sticky top-4 z-20 mx-auto mt-4 w-full max-w-6xl rounded-2xl border border-gray-200 bg-white/60 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-black/60 dark:shadow-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image src={logo} alt="Pikseliuok Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold tracking-tight">Pikseliuok</h1>
          </div>
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                href="https://instagram.com/pikseliuok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={24}
                  className="cursor-pointer text-pink-500 transition-colors hover:text-pink-600"
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
                  className="cursor-pointer text-blue-500 transition-colors hover:text-blue-600"
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
                  className="cursor-pointer text-gray-700 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-white"
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
