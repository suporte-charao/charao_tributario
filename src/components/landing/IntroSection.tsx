const IntroSection = () => {
  return (
    <section className="py-24 px-6 bg-paper border-t-4 border-gold">
      <div className="max-w-[1100px] mx-auto">
        <div>
          <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold block mb-5">
            O Cenário
          </span>
          <h2 className="font-display text-foreground font-bold leading-[1.1] mb-6 text-[clamp(2rem,4vw,3.2rem)]">
            A reforma não <em className="italic text-gold">espera</em>
            <br />por ninguém.
          </h2>
          <p className="text-[1.05rem] leading-[1.8] text-body-text font-light max-w-[720px]">
            A Lei Complementar nº 227/2026 chegou para remodelar o sistema tributário brasileiro de uma vez por todas.
            Não é mais tempo de "acompanhar de longe" ou esperar pelos regulamentos futuros.
          </p>
          <p className="text-[1.05rem] leading-[1.8] text-body-text font-light mt-4 max-w-[720px]">
            O Comitê Gestor do IBS já tem estrutura, o contencioso ganhou novos ritos, o ITCMD mudou de patamar e os
            créditos de ICMS entram em conta regressiva. Quem não entender isso agora{" "}
            <strong className="font-semibold text-foreground">vai entender na pele depois.</strong>
          </p>
          <div className="border-l-[3px] border-gold pl-6 py-2 my-8 max-w-[720px]">
            <p className="font-display italic text-[1.3rem] leading-snug text-foreground">
              "Não ler a lei é uma escolha. Não entender os impactos é um risco que nenhum profissional pode se dar ao luxo."
            </p>
          </div>
        </div>

        {/* Cards agora abaixo da citação */}
        <div className="flex flex-col gap-8 mt-4 max-w-[720px]">
          <div className="bg-ink text-paper p-8 border-l-[3px] border-red">
            <p className="text-[0.95rem] leading-[1.7] font-light">
              Esta conferência foi desenhada para dar a{" "}
              <strong className="text-gold-light font-semibold">contadores, consultores e gestores</strong> a visão
              estratégica da LC 227, sem precisar decifrar 300 artigos sozinhos, mas com profundidade suficiente para
              revisar processos e alertar sobre riscos antes que virem problemas.
            </p>
          </div>

          <div className="p-8 border border-border-green">
            <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold block mb-4">
              O que você vai resolver
            </span>
            <ul className="flex flex-col gap-3">
              {[
                "Entender a nova lógica do IBS de ponta a ponta",
                "Saber como o contencioso tributário mudou",
                "Mapear os créditos de ICMS antes de 2032",
                "Avaliar impactos no ITCMD e em holdings",
                "Compreender o split payment e suas consequências",
              ].map((item) => (
                <li key={item} className="text-[0.9rem] text-body-text pl-5 relative">
                  <span className="absolute left-0 text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;