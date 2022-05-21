import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const menuItems = ["Restaurants", "Products", "Newsletter", "Contact"];

  return (
    <header
      id="main-header"
      className="container mx-auto py-8 flex flex-row justify-between"
    >
      <Link href="/">
        <a>
          <Image
            src={"/images/sunset-boulevard-logo.png"}
            alt="Logo"
            height={56}
            width={133}
          />
        </a>
      </Link>
      <nav className="flex flex-col justify-center">
        <ul className="flex flex-row gap-6">
          {menuItems.map((menuItem) => {
            return (
              <li key={menuItem}>
                <a
                  href="#!"
                  className="flex text-sm font-semibold items-center hover:text-primary uppercase transition"
                >
                  {menuItem}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
