const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/92 backdrop-blur-xl border-b border-gold/15 px-6 py-4 flex items-center justify-between">
      <img
        src="/logo_charao.png"
        alt="Charão Tributário"
        className="h-10 object-contain"
      />
      <a
        href="#inscricao"
        className="bg-gold text-ink text-[0.78rem] font-semibold px-5 py-2 tracking-wide hover:bg-gold-light transition-colors animate-bounce-cta"
      >
        Garantir Vaga →
      </a>
    </nav>
  );
};

export default Navbar;