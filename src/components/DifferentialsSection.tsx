import { useEffect, useRef, useState } from "react";
import { Heart, Cpu, TrendingUp, Eye } from "lucide-react";

const differentials = [
  { icon: Heart, title: "Atendimento Humanizado", value: "100%", desc: "Relacionamento ético e respeitoso com todas as partes." },
  { icon: Cpu, title: "Tecnologia de Automação", value: "+95%", desc: "Processos automatizados para máxima eficiência operacional." },
  { icon: TrendingUp, title: "Alta Taxa de Recuperação", value: "+85%", desc: "Eficiência comprovada na recuperação de créditos." },
  { icon: Eye, title: "Transparência Total", value: "100%", desc: "Relatórios em tempo real e acesso completo às informações." },
];

const AnimatedNumber = ({ value, visible }: { value: string; visible: boolean }) => {
  const [display, setDisplay] = useState("0");
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const prefix = value.startsWith("+") ? "+" : "";
  const suffix = value.endsWith("%") ? "%" : "";

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = numericPart / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        setDisplay(`${prefix}${numericPart}${suffix}`);
        clearInterval(timer);
      } else {
        setDisplay(`${prefix}${Math.floor(start)}${suffix}`);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, numericPart, prefix, suffix]);

  return <span>{visible ? display : `${prefix}0${suffix}`}</span>;
};

const DifferentialsSection = () => {
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
    <section id="diferenciais" className="py-20 lg:py-28 gradient-navy-deeper">
      <div ref={ref} className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Diferenciais
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
            Por Que Escolher a URCOBRA
          </h2>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {differentials.map(({ icon: Icon, title, value, desc }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                <Icon size={28} className="text-gold" />
              </div>
              <div className="text-4xl font-bold text-gold mb-2 font-display">
                <AnimatedNumber value={value} visible={visible} />
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

export default DifferentialsSection;
