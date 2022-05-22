import React from "react";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 justify-between">
        <p>Made with ❤️ by oxholm.dev</p>
        <a
          href="https://github.com/MathiasOxholm/sundown-boulevard"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-primary transition-all"
        >
          Get the code from GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
