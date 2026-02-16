import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const stats = [
  { label: "Créditos Recuperados", value: "R$ 150M+" },
  { label: "Clientes Atendidos", value: "500+" },
  { label: "Taxa de Sucesso", value: "87%" },
  { label: "Anos de Mercado", value: "10+" },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CFO – Grupo Andrade",
    text: "A URCOBRA transformou completamente nossa gestão de inadimplência. Em apenas 6 meses, recuperamos mais de 85% dos créditos pendentes.",
  },
  {
    name: "Fernanda Oliveira",
    role: "Diretora Financeira – TechBrasil",
    text: "Profissionalismo e transparência excepcionais. Os relatórios gerenciais nos dão total visibilidade sobre cada etapa do processo.",
  },
  {
    name: "Roberto Lima",
    role: "CEO – Distribuidora Nacional",
    text: "A abordagem ética e estratégica da URCOBRA preservou nossos relacionamentos comerciais enquanto recuperava nossos créditos.",
  },
];

const ResultsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Resultados
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Números que Comprovam Nossa Eficiência
          </h2>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="text-center p-6 rounded-xl bg-navy shadow-navy hover:-translate-y-2 hover:shadow-gold transition-all duration-500 cursor-pointer"
            >
              <div className="text-3xl lg:text-4xl font-bold text-gold font-display mb-2">
                {value}
              </div>
              <p className="text-sm text-white/70">{label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, role, text }) => (
            <div
              key={name}
              className="p-6 rounded-xl bg-card border border-border hover:-translate-y-2 hover:shadow-gold hover:border-gold/30 transition-all duration-500 cursor-pointer"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{text}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
