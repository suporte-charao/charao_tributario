const Hero = () => {
  return (
    <section className="min-h-screen bg-ink relative flex flex-col justify-center px-6 py-24 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 80% 50%, rgba(73,223,123,0.12) 0%, transparent 70%),
            repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(73,223,123,0.06) 60px),
            repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(73,223,123,0.06) 60px)
          `,
        }}
      />

      <div className="max-w-[1100px] mx-auto w-full relative text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold-light font-mono-dm text-[0.7rem] tracking-[0.15em] uppercase px-4 py-1.5 mb-10 opacity-0 animate-fade-up">
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse-dot" />
          Conferência da reforma tributária 2026
        </div>

        {/* Law reference */}
        <p className="font-mono-dm text-[0.75rem] tracking-[0.2em] text-gold uppercase mb-6 opacity-0 animate-fade-up delay-200">
          Lei Complementar nº 227/2026
        </p>

        {/* Title */}
        <h1 className="font-display font-black text-paper leading-[0.95] mb-6 opacity-0 animate-fade-up delay-400 text-[clamp(3rem,8vw,7rem)]">
          A Nova Arquitetura<br />
          <em className="italic text-gold">Financeira</em>
        </h1>

        {/* Subtitle */}
        <p className="text-paper/65 font-light max-w-[640px] leading-relaxed mb-10 opacity-0 animate-fade-up delay-600 text-[clamp(1.1rem,2.5vw,1.4rem)]">
          A LC 227/2026 mudou as regras tributárias da sua empresa. Quem não entender agora vai{" "}
          <strong className="text-gold-light font-medium">perder créditos, pagar multas e tomar decisões erradas.</strong>{" "}
          Venha preparado para agir antes que seja tarde.
        </p>

        {/* Event info bar */}
        <div className="flex items-center bg-gold/[0.08] border border-gold/30 mb-10 flex-wrap opacity-0 animate-fade-up delay-700 w-full max-w-[700px]">
          <EventInfoItem icon="📅" label="Data" value="25 de o de 2026" />
          <div className="w-px h-12 bg-gold/20 flex-shrink-0 hidden sm:block" />
          <EventInfoItem icon="🕘" label="Horário" value="9h (horário de Manaus)" />
          <div className="w-px h-12 bg-gold/20 flex-shrink-0 hidden sm:block" />
          <EventInfoItem icon="⏱️" label="Formato" value="Encontro online e ao vivo" />
          <div className="w-px h-12 bg-gold/20 flex-shrink-0 hidden sm:block" />
          <EventInfoItem icon="✅" label="Inscrição" value="Gratuita" />
        </div>

        {/* CTA */}
        <div className="flex gap-4 flex-wrap justify-center opacity-0 animate-fade-up delay-800">
          <a
            href="https://materiais.grupocharao.com.br/formulario-mentoria-da-rt-a-nova-arquitetura-financeira"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-ink font-semibold text-[0.95rem] tracking-wide px-10 py-4 hover:bg-gold-light transition-all animate-bounce-cta"
          >
            Quero minha vaga gratuita!
          </a>
        </div>

        <a
          href="#conteudo"
          className="inline-flex items-center gap-1.5 mt-6 text-[0.92rem] font-medium text-gold border-b border-gold/40 pb-0.5 hover:text-gold-light hover:border-gold-light transition-colors"
        >
          Ver o que será abordado ↓
        </a>
      </div>
    </section>
  );
};

const EventInfoItem = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
  <div className="flex items-center gap-3 px-5 py-4 flex-1 min-w-[160px] border-b sm:border-b-0 border-gold/15">
    <span className="text-xl flex-shrink-0">{icon}</span>
    <div>
      <span className="block font-mono-dm text-[0.6rem] tracking-[0.15em] uppercase text-gold/60 mb-0.5">
        {label}
      </span>
      <span className="block text-[0.88rem] font-medium text-paper">{value}</span>
    </div>
  </div>
);

export default Hero;