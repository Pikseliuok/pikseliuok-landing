import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-background text-foreground shadow-md mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Pikseliuok</p>
      </div>
    </footer>
  );
};

export default Footer;
