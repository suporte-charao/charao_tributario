import { useState } from "react";

const faqs = [
  {
    q: "Preciso ser contador para participar?",
    a: "Não. A conferência é voltada para qualquer profissional que lide com tributos, planejamento financeiro ou assessoria empresarial. Se a reforma tributária impacta suas decisões ou as dos seus clientes, este evento é para você.",
  },
  {
    q: "Vou conseguir acompanhar mesmo sem conhecer a reforma a fundo?",
    a: 'Sim. O Time Charão vai apresentar o que mudou de forma comparativa e didática — "como era" versus "como passa a ser". Não é necessário ter lido a LC 227 antes. O objetivo é exatamente esse: dar a você a visão clara que a leitura da lei sozinha não dá.',
  },
  {
    q: "A conferência é ao vivo. E se eu não puder participar no horário?",
    a: "Recomendamos fortemente a participação ao vivo, pois é ali que acontece a interação direta com os especialistas e as perguntas em tempo real. Reserve o dia 25/02 às 9h (horário de Manaus) na sua agenda agora.",
  },
  {
    q: "Por que as vagas são limitadas?",
    a: "Porque queremos garantir que cada participante tenha espaço real para interagir, perguntar e ser ouvido. Uma conferência lotada vira palestra. Com vagas limitadas, vira conversa. E é isso que entrega resultado.",
  },
  {
    q: "O conteúdo é aplicável para empresas da Zona Franca de Manaus e Área de Livre Comércio de Boa Vista?",
    a: "Absolutamente. O Time Charão é referência nacional justamente pela especialização na ZFM e na ALC. A reforma tributária tem impactos específicos para a região norte, e é exatamente isso que será abordado com profundidade técnica e aplicação prática.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-cream border-t border-border-green">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold block mb-5">
            Perguntas frequentes
          </span>
          <h2 className="font-display font-bold leading-[1.1] text-foreground text-[clamp(2rem,4vw,3.2rem)]">
            Ainda com dúvidas? <em className="italic text-gold">A gente responde.</em>
          </h2>
        </div>

        <div className="max-w-[780px] mx-auto border-t border-border-green">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border-green">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full bg-transparent py-5 flex justify-between items-center gap-4 text-left font-semibold text-foreground hover:text-gold transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <span
                  className={`text-xl font-light text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? "max-h-[300px] pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[0.92rem] text-body-text leading-[1.8] font-light">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 pt-10 border-t border-border-green">
          <p className="text-[1.05rem] text-foreground">
            Ainda tem dúvidas? <strong className="text-gold">Garanta sua vaga e pergunte ao vivo.</strong>
          </p>
          <a
            href="#inscricao"
            className="inline-block mt-5 bg-gold text-ink font-semibold text-[0.95rem] px-10 py-4 hover:bg-gold-light transition-colors animate-bounce-cta"
          >
            Quero minha vaga Gratuita →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
