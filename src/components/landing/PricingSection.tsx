const PricingSection = () => {
  return (
    <section id="inscricao" className="py-24 px-6 bg-paper border-t border-border-green">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold block mb-5">
            Promoção de lançamento
          </span>
          <h2 className="font-display font-bold leading-[1.1] text-foreground text-[clamp(2rem,4vw,3.2rem)]">
            Invista no que vai <em className="italic text-gold">proteger</em> sua prática.
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-body-text font-light mt-6 max-w-[640px]">
            A Conferência é <strong className="font-semibold text-foreground">online, ao vivo</strong>, com vagas intencionalmente
            limitadas para garantir um acompanhamento exclusivo e a chance real de interação direta com os especialistas da{" "}
            <strong className="font-semibold text-foreground">Charão Tributário</strong>.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {["🎙 Ao vivo", "💻 Online", "✓ Certificado de participação", "🎙 Interação com especialistas"].map(
              (badge) => (
                <span key={badge} className="bg-ink text-paper text-[0.78rem] font-medium px-3.5 py-1.5 tracking-wide">
                  {badge}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-ink text-paper p-10 relative border-2 border-gold shadow-[0_0_60px_rgba(73,223,123,0.15)] max-w-[540px]">
          {/* Ribbon */}
          <div className="absolute -top-px right-8 bg-red text-destructive-foreground font-mono-dm text-[0.65rem] font-medium tracking-[0.15em] uppercase px-4 py-1">
            Oferta especial
          </div>

          <div className="inline-block mt-7 bg-gold/[0.12] border border-gold/40 text-gold font-mono-dm text-[0.72rem] tracking-[0.12em] uppercase px-3.5 py-1.5">
            🎟 Lote 1 — Vagas limitadas
          </div>

          {/* Price */}
          <div className="flex items-center gap-2.5 mt-4">
            <span className="text-[0.78rem] text-paper/40 uppercase tracking-widest">de</span>
            <span className="text-[1.1rem] text-paper/35 line-through decoration-red decoration-2">R$ 157</span>
          </div>
          <div className="flex items-start gap-1 mt-1 leading-none">
            <span className="font-display text-[2rem] font-bold text-gold mt-3">R$</span>
            <span className="font-display text-[6rem] font-black text-gold leading-none">47</span>
          </div>
          <div className="text-[1.2rem] text-paper/40 italic mb-8">ou 11x de R$ 5,22</div>

          {/* Savings */}
          <div className="bg-gold/[0.12] border border-gold/35 px-4 py-3 text-[0.85rem] text-gold-light leading-relaxed">
            🔥 Você economiza <strong className="text-[#d4f5c0]">R$ 110</strong> — 70% de desconto
          </div>

          {/* Includes */}
          <ul className="mt-6 flex flex-col gap-2.5">
            {[
              "Acesso ao treinamento completo",
              "Conferência ao vivo com especialistas",
              "Interação e perguntas em tempo real",
            ].map((item) => (
              <li key={item} className="text-[0.85rem] text-paper/70 flex items-start gap-2.5">
                <span className="text-gold flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#inscricao"
            className="block w-full text-center bg-gold text-ink font-semibold text-[0.95rem] px-6 py-4 mt-6 hover:bg-gold-light transition-colors animate-bounce-cta"
          >
            Garantir Vaga →
          </a>

          <p className="mt-4 text-[0.75rem] text-paper/35 text-center italic">
            ⚠ Vagas limitadas. Preço pode subir a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;