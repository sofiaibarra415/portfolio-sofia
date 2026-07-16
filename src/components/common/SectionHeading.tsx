import RevealOnScroll from "@/components/motion/RevealOnScroll";

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <RevealOnScroll className="text-center">
      <h2 className="font-display text-display font-medium text-ink">
        {title}
      </h2>
      <p className="mt-3 text-ink-muted">{subtitle}</p>
    </RevealOnScroll>
  );
}
