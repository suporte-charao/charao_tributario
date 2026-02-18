const resultados = [
  "Visão clara do novo desenho tributário pós-LC 227",
  "Compreensão do papel do Comitê Gestor e do novo contencioso",
  "Entendimento das principais mudanças legais, sem precisar ler a lei inteira",
  "Capacidade de explicar o cenário aos seus clientes e gestores com autoridade",
  "Consciência dos riscos e pontos de atenção que surgem com a norma",
];

const ResultadosSection = () => {
  return (
    <section className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-[1100px] mx-auto">
        <div>
          <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold/60 block mb-5">
            O que você leva
          </span>
          <h2 className="font-display font-bold leading-[1.1] text-[clamp(2rem,4vw,3.2rem)]">
            Saindo daqui com<br />
            <em className="italic text-gold">clareza</em>, não com dúvidas.
          </h2>
          <ul className="mt-8 flex flex-col max-w-[720px]">
            {resultados.map((item) => (
              <li
                key={item}
                className="py-5 border-b border-gold/15 text-[0.95rem] text-paper/80 leading-relaxed font-light flex gap-4 items-start"
              >
                <span className="text-gold text-[0.9rem] flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gold/[0.08] border border-gold/25 p-10 mt-12 max-w-[720px]">
          <h3 className="font-display text-2xl font-bold leading-tight mb-6">
            A Reforma Tributária não é um evento futuro, ela já aconteceu.
          </h3>
          <p className="text-[0.9rem] text-paper/60 leading-[1.8] font-light">
            A LC 227 entrou em vigor e o mercado vai se dividir entre quem entendeu e quem ficou para trás.
          </p>
          <div className="font-display text-[5rem] font-black text-gold leading-none mt-6 mb-2">2026</div>
          <div className="text-[0.8rem] text-paper/40 uppercase tracking-widest">
            O ano em que você precisa se posicionar
          </div>
          <p className="mt-8 text-[0.9rem] text-paper/60 leading-[1.8] font-light">
            Profissionais que dominam o novo sistema tributário têm uma vantagem competitiva real, com clientes, com
            gestores e com o mercado. Não é sobre decorar artigos. É sobre{" "}
            <strong className="text-gold-light">entender o que mudou de verdade.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultadosSection;