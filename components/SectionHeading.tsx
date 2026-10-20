import Reveal from "./Reveal";

export default function SectionHeading({
  n,
  label,
  title,
  accent,
}: {
  n: string;
  label: string;
  title: string;
  accent: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="label">
        {n} / {label}
      </p>
      <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
        {title} <em className="text-accent">{accent}</em>
      </h2>
    </Reveal>
  );
}
