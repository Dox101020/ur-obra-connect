import { useState, useEffect, useCallback } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    title: "Recuperação de Crédito Inteligente e Estratégica",
    subtitle: "Soluções eficazes para reduzir inadimplência e aumentar seu fluxo de caixa.",
    cta: "Fale com um Especialista",
  },
  {
    title: "Tecnologia e Estratégia a Favor do Seu Negócio",
    subtitle: "Cobrança profissional com abordagem ética e resultados reais.",
    cta: "Fale com um Especialista",
  },
  {
    title: "Mais Controle. Mais Resultado. Mais Segurança.",
    subtitle: "A URCOBRA transforma inadimplência em oportunidade.",
    cta: "Fale com um Especialista",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, goTo]);

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Corporate background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deeper/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deeper/60 via-transparent to-navy-deeper/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute pointer-events-none"
              }`}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-white mb-6">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>
              {slide.cta && (
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-md gradient-gold text-white font-semibold text-base tracking-wide hover:opacity-90 transition-all shadow-gold animate-pulse-gold"
                >
                  {slide.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex gap-3 mt-12">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-10 bg-gold" : "w-5 bg-white/30"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
