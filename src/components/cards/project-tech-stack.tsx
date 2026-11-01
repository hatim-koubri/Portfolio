type ProjectTechStackProps = {
  stack: string[];
};

export function ProjectTechStack({ stack }: ProjectTechStackProps) {
  return (
    <ul className="flex flex-wrap gap-2.5" aria-label="Technology stack">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border bg-muted/70 px-3 py-1.5 text-xs font-semibold text-foreground/85 shadow-sm"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
