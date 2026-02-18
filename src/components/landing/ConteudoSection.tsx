const temas = [
  { num: "01", title: "Comitê Gestor do IBS", desc: "Quem passa a decidir, coordenar e organizar o IBS, e o que muda na relação entre União, Estados e Municípios." },
  { num: "02", title: "PAT do IBS e Domicílio Tributário Eletrônico", desc: "Como o contencioso tributário ficou mais rápido, mais centralizado, e mais arriscado para quem não se adaptar." },
  { num: "03", title: "Distribuição da Arrecadação", desc: "A nova lógica de distribuição do IBS e por que Estados e Municípios vão intensificar a fiscalização." },
  { num: "04", title: "Saldo Credor de ICMS", desc: "O destino dos créditos existentes e o que empresas precisam fazer antes de 2032. O relógio já corre." },
  { num: "05", title: "ITCMD e Tributação Patrimonial", desc: "Alíquotas progressivas, base de mercado e os impactos diretos em holdings e planejamento sucessório." },
  { num: "06", title: "Alterações na LC 214/2025", desc: "Split payment, novas penalidades e o recado claro do legislador: mais controle, menos informalidade." },
];

const ConteudoSection = () => {
  return (
    <section id="conteudo" className="py-24 px-6 bg-cream">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold block mb-5">
            O que será abordado
          </span>
          <h2 className="font-display font-bold leading-[1.1] text-[clamp(2rem,4vw,3.2rem)]">
            1 hora.<br />
            <em className="italic text-gold">6 temas críticos.</em><br />
            Nenhuma enrolação.
          </h2>
          <p className="text-[0.9rem] text-muted-green max-w-[480px] font-light leading-[1.7] mt-6">
            Análise ampla da LC 227 com foco nos impactos reais para a sua prática profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border-green">
          {temas.map((tema) => (
            <div
              key={tema.num}
              className="bg-cream p-8 hover:bg-paper transition-colors"
            >
              <span className="font-mono-dm text-[0.65rem] tracking-[0.15em] text-gold block mb-3">
                {tema.num}
              </span>
              <h3 className="font-display font-bold text-[1.05rem] mb-3 leading-tight text-foreground">
                {tema.title}
              </h3>
              <p className="text-[0.85rem] text-muted-green leading-[1.7] font-light">{tema.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConteudoSection;