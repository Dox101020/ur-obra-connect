import { useEffect, useRef, useState } from "react";
import { Globe, Users, Scale, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const highlights = [
  { icon: Globe, label: "Atuação Nacional" },
  { icon: Users, label: "Equipe Especializada" },
  { icon: Scale, label: "Processos Estruturados" },
  { icon: ShieldCheck, label: "Conformidade Jurídica" },
];

const AboutSection = () => {
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
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Image */}
        <div className="group relative rounded-lg overflow-hidden shadow-navy cursor-pointer">
          <img src={aboutImage} alt="Equipe URCOBRA" className="w-full h-80 lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deeper/40 to-transparent group-hover:from-navy-deeper/60 transition-all duration-500" />
        </div>

        {/* Text */}
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Sobre a URCOBRA
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
            Recuperação de Crédito com Inteligência Estratégica
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A URCOBRA é especializada em soluções completas de cobrança empresarial, oferecendo
            recuperação de crédito estratégica, abordagem personalizada e tecnologia avançada para
            maximizar resultados. Com anos de experiência no mercado, transformamos inadimplência em
            oportunidade com ética e eficiência.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/60 border border-border hover:-translate-y-1 hover:shadow-gold hover:border-gold/30 transition-all duration-400 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
