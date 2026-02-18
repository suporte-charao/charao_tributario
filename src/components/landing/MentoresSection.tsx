const MentoresSection = () => {
  return (
    <section className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-[1100px] mx-auto flex flex-col">
        {/* Título */}
        <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold/60 block mb-5">
          Seus mentores
        </span>
        <h2 className="font-display font-bold leading-[1.1] text-[clamp(2rem,4vw,3.2rem)] mb-6">
          Você será mentorado por quem<br />domina a <em className="italic text-gold">ZFM e a ALC</em>
        </h2>

        {/* Texto descritivo */}
        <div className="max-w-[720px] mb-10">
          <p className="text-[1.05rem] leading-[1.8] text-paper/90 font-light">
            Você será mentorado pelo <strong className="text-gold font-semibold">Time Charão</strong>, referência
            nacional em Reforma Tributária aplicada à Zona Franca de Manaus e à Área de Livre Comércio de Boa Vista,
            com <strong className="text-gold font-semibold">18 anos de atuação na região</strong>.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-paper/90 font-light mt-4">
            Aqui, a Reforma é tratada com <strong className="text-gold font-semibold">profundidade técnica</strong>,
            aplicação prática e foco na proteção dos benefícios regionais e na competitividade das empresas.
          </p>
        </div>

        {/* Foto do Time */}
        <div className="w-full mb-10">
          <img
            src="/foto_time.jpg"
            alt="Time Charão Consultoria Tributária"
            className="w-full max-w-[720px] object-cover rounded"
          />
        </div>

        {/* Card Charão */}
        <div className="bg-gold/[0.05] border border-gold/25 p-10 max-w-[720px]">
          <div className="border-b border-gold/20 pb-6 mb-6">
            <img
              src="/logo_charao.png"
              alt="Charão Tributário"
              className="h-14 object-contain"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <div className="font-display text-3xl font-black text-gold leading-none">18</div>
              <div className="text-[0.7rem] text-paper/85 leading-snug mt-1">Anos de atuação na região</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-gold leading-none">ZFM</div>
              <div className="text-[0.7rem] text-paper/85 leading-snug mt-1">Zona Franca de Manaus</div>
            </div>
            <div>
              <div className="font-display text-3xl font-black text-gold leading-none">ALC</div>
              <div className="text-[0.7rem] text-paper/85 leading-snug mt-1">Área de Livre Comércio de Boa Vista</div>
            </div>
          </div>

          <div className="bg-gold/10 border-l-2 border-gold px-4 py-3 text-[0.8rem] text-paper italic leading-relaxed">
            Referência nacional em Reforma Tributária aplicada na região norte
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentoresSection;