const UrgencyBar = () => {
  return (
    <div className="bg-red text-destructive-foreground text-center py-5 px-6 text-[1.05rem] tracking-wide font-normal leading-relaxed">
      ⚠ A LC 227 já está em vigor. Cada dia sem entender as novas regras é um{" "}
      <strong className="font-extrabold text-[1.1rem] underline underline-offset-[3px]">
        risco real para sua empresa.
      </strong>
    </div>
  );
};

export default UrgencyBar;
