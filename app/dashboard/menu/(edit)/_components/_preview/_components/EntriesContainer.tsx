import { EntryBlock } from "./EntryBlock";
import { Entry } from "@/types/menu";

export function EntriesContainer({ items }: { items: Entry[] }) {
  return (
    <div className="entries-container">
      {items.map((item) => (
        <EntryBlock key={item.ID} item={item} />
      ))}
    </div>
  );
}
