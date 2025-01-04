import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-between px-5 py-4 bg-gradient-to-r from-black via-[#00FF00] to-black shadow-lg sticky top-0 z-50 transition-all duration-500 ease-in-out transform ${
        scrolling ? 'bg-opacity-90' : 'bg-opacity-100'
      }`}
    >
      {/* Logo Section */}
      <a
        className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#32CD32] via-[#00FF00] to-[#00FF00] text-2xl hover:scale-110 hover:animate-pulse transition-transform duration-500 ease-in-out"
        href="#"
      >
        Gladwin JS
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white font-semibold text-lg">
          <li className="relative group">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-[#00FF00] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li className="relative group">
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-[#00FF00] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li className="relative group">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-[#00FF00] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
            >
              Projects
            </ScrollLink>
          </li>
          <li className="relative group">
            <ScrollLink
              to="resume"
              smooth={true}
              duration={500}
              className="hover:text-[#00FF00] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
            >
              Resume
            </ScrollLink>
          </li>
          <li className="relative group">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-[#00FF00] transition-colors duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation Toggle */}
      {toggleMenu && (
        <nav className="absolute top-16 left-0 w-full bg-gradient-to-b from-[#00FF00] to-black shadow-lg rounded-b-lg md:hidden animate-slide-down transition-all duration-300 ease-in-out">
          <ul
            onClick={() => setToggleMenu(false)}
            className="flex flex-col items-center text-white space-y-6 py-6 text-lg font-medium"
          >
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="hover:text-[#00FF00] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-[#00FF00] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-[#00FF00] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                className="hover:text-[#00FF00] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-[#00FF00] transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#00FF00] rounded-lg cursor-pointer"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      )}

      {/* Hamburger Icon for Mobile */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden focus:outline-none transform hover:scale-110 transition-all duration-300 ease-in-out"
      >
        <Bars3Icon className="text-[#00FF00] h-8 hover:text-white transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-[#00FF00] rounded-full" />
      </button>
    </header>
  );
}
