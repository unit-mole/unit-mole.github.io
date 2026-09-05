export function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <header className="section-heading">
      <div className="section-heading__label">
        <span>{index}</span>
        <p>{eyebrow}</p>
      </div>
      <h2>{title}</h2>
      <p className="section-heading__copy">{copy}</p>
    </header>
  );
}
