import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const links = [
    { url: "#hero", label: "Home" },
    { url: "#about", label: "About" },
    { url: "#project", label: "Projects" },
    { url: "#blog", label: "Blog" },
    { url: "#contact", label: "Contact" }
  ];
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header
      className="right-0 left-0 flex justify-between px-5 py-2 bg-primary text-amber-800 fixed w-full z-10 h-10"
    >
      <a
        href="#hero"
        className="text-2xl font-bold text-cyan-700 hover:text-dark-cyan"
      >
        Personal Porfolio
      </a>

      {/* Desktop Nav */}
      {/* <nav className="hidden md:block bg-white rounded-lg shadow-md"> */}
        <ul className="hidden md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.url} className="px-4 py-5 text-lg hover:text-dark-cyan">{link.label}</a>
            </li>
          ))}
        </ul>
      {/* </nav> */}

      {/* Mobile Nav */}
      <nav
        className={toggle  ?  "block md:hidden fixed top-10 py-2 w-full h-full bg-amber-900 duration-500 left-0" : "block md:hidden fixed top-10 py-2 w-full h-full bg-amber-900 duration-500 left-[100%]"}
      >
        <ul className="flex flex-col">
          {links.slice(0, 4).map((link) => (
            <li key={link.label}>
              <a href={link.url} className="px-4 py-5 text-white text-lg hover:dark-cyan">{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {toggle ?  <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>
    </header>
  );
};
export default Header;
