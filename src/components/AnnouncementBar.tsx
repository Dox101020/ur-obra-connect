import { TrendingUp, TrendingDown, BarChart3, Target, Clock, Briefcase, PiggyBank } from "lucide-react";

const indicators = [
  { icon: TrendingUp, label: "Taxa de Recuperação", value: "+87%", positive: true },
  { icon: BarChart3, label: "Inadimplência Empresarial", value: "6,4%", positive: false },
  { icon: Clock, label: "Prazo Médio de Recuperação", value: "32 dias", positive: true },
  { icon: TrendingUp, label: "Eficiência Operacional", value: "+18%", positive: true },
  { icon: Target, label: "Acordos Fechados", value: "+72%", positive: true },
  { icon: Briefcase, label: "Carteiras Analisadas/Mês", value: "1.200+", positive: true },
  { icon: PiggyBank, label: "Economia p/ Clientes", value: "23%", positive: true },
];

const TickerItem = ({ icon: Icon, label, value, positive }: typeof indicators[number]) => (
  <div className="flex items-center gap-2 px-5 shrink-0">
    <Icon size={14} className="text-gold opacity-70" />
    <span className="text-[11px] md:text-xs text-white/50 whitespace-nowrap">{label}</span>
    <span className={`text-[12px] md:text-sm font-semibold whitespace-nowrap ${positive ? "text-ticker-up" : "text-ticker-down"}`}>
      {value}
    </span>
    {positive ? (
      <TrendingUp size={12} className={positive ? "text-ticker-up" : "text-ticker-down"} />
    ) : (
      <TrendingDown size={12} className="text-ticker-down" />
    )}
    <div className="w-px h-3 bg-white/10 ml-3" />
  </div>
);

const AnnouncementBar = () => {
  const items = [...indicators, ...indicators];

  return (
    <div className="w-full bg-navy-deeper border-b border-white/5 overflow-hidden group z-[60] relative">
      <div
        className="flex items-center py-2 md:py-2.5 animate-[ticker_35s_linear_infinite] group-hover:[animation-play-state:paused] w-max"
      >
        {items.map((ind, i) => (
          <TickerItem key={i} {...ind} />
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;
