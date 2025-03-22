import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-background text-foreground shadow-md mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Pikseliuok</p>
        <p className="mt-2 text-gray-600 text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://discord.com/users/213366470556516354"
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
