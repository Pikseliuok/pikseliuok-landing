import React from "react";
import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import logo from "../../../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 bg-background text-foreground shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Pikseliuok Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold">Pikseliuok</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"https://discord.gg/nwNAWVSuur"}>
                <FaDiscord size={24} className="text-blue-500 cursor-pointer" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
