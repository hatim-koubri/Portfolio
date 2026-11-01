type EvidenceListProps = {
  items: string[];
  ordered?: boolean;
};

export function EvidenceList({ items, ordered = false }: EvidenceListProps) {
  const List = ordered ? "ol" : "ul";

  return (
    <List className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
          <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </List>
  );
}
