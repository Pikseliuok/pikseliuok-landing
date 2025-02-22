import React from "react";

const Header = () => {
  return (
    <header className="w-full p-4 bg-background text-foreground shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pikseliuok</h1>
        <nav>
          <ul className="flex space-x-4">
            {/* <li>
              <a href="#" className="text-blue-500 underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 underline">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
