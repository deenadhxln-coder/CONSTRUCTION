import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-black tracking-tight text-white"
          >
            Construct
            <span className="text-orange-400">Pro</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white transition hover:text-orange-400"
              >
                {link.name}
              </a>
            ))}

            {/* Login */}
            <Link
              to="/login"
              className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              Register
            </Link>

            {/* Get Started */}
            <Link
              to="/register"
              className="rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-white/30 px-3 py-2 text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mt-4 rounded-xl border border-white/10 bg-slate-950/95 p-5 backdrop-blur-md md:hidden">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-white transition hover:text-orange-400"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Login */}
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Login
              </Link>

              {/* Mobile Register */}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Register
              </Link>

              {/* Mobile Get Started */}
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Get Started
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;