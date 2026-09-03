import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-semibold tracking-wide"
          style={{
            fontFamily: "Cormorant Garamond, serif",
            color: "#8b4b52",
          }}
        >
          KAYAKALP

          <span className="block text-xs tracking-[0.35em] text-gray-500">
            MAKEOVER
          </span>
        </a>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">

          <a
            href="#home"
            className="hover:text-[#a85c65] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-[#a85c65] transition"
          >
            About
          </a>

          <a
            href="#services"
            className="hover:text-[#a85c65] transition"
          >
            Services
          </a>

          <a
            href="#bridal"
            className="hover:text-[#a85c65] transition"
          >
            Bridal
          </a>

          <a
            href="#packages"
            className="hover:text-[#a85c65] transition"
          >
            Packages
          </a>

          <a
            href="#gallery"
            className="hover:text-[#a85c65] transition"
          >
            Gallery
          </a>

          <a
            href="#contact"
            className="hover:text-[#a85c65] transition"
          >
            Contact
          </a>

          <a
            href="#booking"
            className="px-5 py-3 rounded-full text-white bg-[#8b4b52] hover:bg-[#703a40] transition whitespace-nowrap"
          >
            Book Appointment
          </a>

        </nav>


        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-2xl text-[#8b4b52] hover:bg-[#fff3f1] transition"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <nav className="bg-white border-t border-[#f0e2df] px-5 py-5 shadow-lg">

          <div className="flex flex-col">

            <a
              href="#home"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              About
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Services
            </a>

            <a
              href="#bridal"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Bridal
            </a>

            <a
              href="#packages"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Packages
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Gallery
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="py-3 border-b border-[#f3e8e5] hover:text-[#a85c65] transition"
            >
              Contact
            </a>


            {/* Mobile Booking */}
            <a
              href="#booking"
              onClick={closeMenu}
              className="mt-5 text-center px-5 py-3.5 rounded-full text-white bg-[#8b4b52] hover:bg-[#703a40] transition"
            >
              Book Appointment →
            </a>

          </div>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;