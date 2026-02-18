const publicoItems = [
  { num: "01", icon: "⚖️", title: "Contador ou Empresário Contábil", desc: "Você assessora clientes e precisa dominar as mudanças antes de ser questionado sobre elas." },
  { num: "02", icon: "🔍", title: "Consultor Tributário", desc: "Sua opinião vale pelo que você sabe. E agora o que você precisa saber mudou." },
  { num: "03", icon: "🏢", title: "Profissional de Assessoria", desc: "Você orienta empresas em decisões financeiras e tributárias — e o cenário acaba de mudar radicalmente." },
  { num: "04", icon: "📊", title: "Gestor Empresarial", desc: "Você precisa entender os efeitos da Reforma para planejar com inteligência os próximos anos." },
];

const PublicoSection = () => {
  return (
    <section className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-[1100px] mx-auto">
        <span className="font-mono-dm text-[0.7rem] tracking-[0.2em] uppercase text-gold/60 block mb-5">
          Para quem é
        </span>
        <h2 className="font-display font-bold leading-[1.1] mb-0 max-w-[500px] text-[clamp(2rem,4vw,3.2rem)]">
          Este evento foi feito <em className="italic text-gold">para você</em> se…
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mt-12 border border-gold/20">
          {publicoItems.map((item) => (
            <div key={item.num} className="p-6 border-r border-gold/15 last:border-r-0 relative">
              <span className="absolute top-4 right-4 font-mono-dm text-[0.65rem] text-gold/40 tracking-widest">
                {item.num}
              </span>
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-[0.95rem] mb-2 text-paper">{item.title}</h3>
              <p className="text-[0.82rem] text-paper/45 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicoSection;
