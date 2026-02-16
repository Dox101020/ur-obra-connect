import { useEffect, useRef, useState } from "react";
import { Search, Target, PhoneCall, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, number: "01", title: "Análise da Carteira", desc: "Avaliação detalhada dos créditos e perfil dos devedores." },
  { icon: Target, number: "02", title: "Estratégia Personalizada", desc: "Plano de ação sob medida para cada cenário de cobrança." },
  { icon: PhoneCall, number: "03", title: "Ação de Cobrança", desc: "Execução multicanal com abordagem ética e assertiva." },
  { icon: TrendingUp, number: "04", title: "Recuperação e Relatórios", desc: "Acompanhamento de resultados com relatórios gerenciais." },
];

const HowItWorksSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-background">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Como Funciona
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
            Processo Simples e Eficiente
          </h2>
        </div>

        <div
          className={`relative grid md:grid-cols-4 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

          {steps.map(({ icon: Icon, number, title, desc }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-5 shadow-gold border-2 border-gold/30">
                <Icon size={24} className="text-gold" />
              </div>
              <span className="text-xs font-bold tracking-widest text-gold mb-2">{number}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
