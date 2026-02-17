import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";
import logo from "../assets/urcobra-logo.png.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-deeper/95 backdrop-blur-md shadow-navy"
          : "bg-transparent"
      }`}
    >
      <AnnouncementBar />
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="URCOBRA" className="h-14" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-medium tracking-wide text-white/80 hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => window.location.href = import.meta.env.VITE_LOGIN_URL}
            className="ml-4 px-6 py-2.5 rounded-md gradient-gold text-white font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity shadow-gold"
          >
            Logar/Criar Conta
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white/90"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deeper/98 backdrop-blur-lg border-t border-white/10 animate-fade-up">
          <nav className="flex flex-col items-center gap-5 py-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-base font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => window.location.href = import.meta.env.VITE_LOGIN_URL}
              className="mt-2 px-8 py-3 rounded-md gradient-gold text-white font-semibold text-sm tracking-wide"
            >
              Logar/Criar Conta
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
