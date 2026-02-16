import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Gavel,
  Scale,
  Handshake,
  Building2,
  BarChart3,
} from "lucide-react";

const solutions = [
  {
    icon: FileText,
    title: "Cobrança Administrativa",
    desc: "Gestão eficiente de cobranças com abordagem diplomática e foco na preservação do relacionamento comercial.",
  },
  {
    icon: Gavel,
    title: "Cobrança Extrajudicial",
    desc: "Negociação assertiva antes do processo judicial, reduzindo custos e acelerando a recuperação de valores.",
  },
  {
    icon: Scale,
    title: "Cobrança Judicial",
    desc: "Assessoria jurídica completa para ações de cobrança com acompanhamento processual estratégico.",
  },
  {
    icon: Handshake,
    title: "Negociação Estratégica",
    desc: "Propostas personalizadas de negociação que beneficiam ambas as partes e maximizam a recuperação.",
  },
  {
    icon: Building2,
    title: "Recuperação Empresarial",
    desc: "Soluções especializadas para grandes carteiras corporativas com análise de risco personalizada.",
  },
  {
    icon: BarChart3,
    title: "Inteligência de Dados",
    desc: "Relatórios gerenciais avançados com indicadores de performance e previsibilidade de recuperação.",
  },
];

const SolutionsSection = () => {
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
    <section id="solucoes" className="py-20 lg:py-28 gradient-navy-deeper">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Nossas Soluções
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
            Serviços Sob Medida para Seu Negócio
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {solutions.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 hover:-translate-y-2 hover:shadow-gold transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon size={24} className="text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
