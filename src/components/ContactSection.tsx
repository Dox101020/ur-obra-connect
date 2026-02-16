import { useState, useRef, useEffect } from "react";
import { Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ nome: "", empresa: "", telefone: "", email: "", mensagem: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}, da empresa ${form.empresa}. ${form.mensagem}`
    );
    window.open(`https://wa.me/5563992940044?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 lg:py-28 gradient-navy-deeper relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-gold mb-3 block">
            Contato
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-4">
            Pronto para reduzir sua inadimplência?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto">
            Entre em contato e descubra como a URCOBRA pode transformar seus resultados.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5563992940044"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 rounded-lg gradient-gold text-navy-deeper font-bold text-lg mb-8 hover:opacity-90 transition-opacity shadow-gold"
          >
            <MessageCircle size={24} />
            Falar via WhatsApp
          </a>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome"
              required
              maxLength={100}
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Empresa"
              maxLength={100}
              value={form.empresa}
              onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="tel"
              placeholder="Telefone"
              required
              maxLength={20}
              value={form.telefone}
              onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              maxLength={1000}
              value={form.mensagem}
              onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
              className="sm:col-span-2 px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 flex items-center justify-center gap-2 py-4 rounded-lg bg-white/10 border border-gold/30 text-gold font-semibold hover:bg-white/15 transition-colors"
            >
              <Send size={18} />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
