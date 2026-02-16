import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

const FooterSection = () => {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deeper border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-gold font-display tracking-wider">URCOBRA</span>
            <p className="text-white/50 text-sm mt-3 leading-relaxed">
              Recuperação de Crédito com Inteligência Estratégica. Transformamos inadimplência em oportunidade.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="https://wa.me/5563992940044" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                <Phone size={16} className="text-gold" /> (63) 99294-0044
              </a>
              <a href="mailto:contato@urcobra.com.br" className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors">
                <Mail size={16} className="text-gold" /> contato@urcobra.com.br
              </a>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-gold" /> Palmas/TO
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navegação</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-sm text-white/60 hover:text-gold transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} URCOBRA. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-navy-deeper/95 backdrop-blur-md border-t border-white/10 py-2 px-4">
        <div className="flex justify-around">
          <button onClick={() => handleClick("#inicio")} className="flex flex-col items-center gap-1 text-white/60 hover:text-gold transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            <span className="text-[10px]">Início</span>
          </button>
          <a href="https://wa.me/5563992940044" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gold">
            <Phone size={20} />
            <span className="text-[10px]">WhatsApp</span>
          </a>
          <button onClick={() => handleClick("#contato")} className="flex flex-col items-center gap-1 text-white/60 hover:text-gold transition-colors">
            <Mail size={20} />
            <span className="text-[10px]">Contato</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
