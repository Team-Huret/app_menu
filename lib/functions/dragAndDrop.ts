import { arrayMove } from "@dnd-kit/sortable";
import { DragOverEvent } from "@dnd-kit/core";

type SetStateType = React.Dispatch<React.SetStateAction<{ name: string }[]>>;

export const handleDragOver = (event: DragOverEvent, setState: SetStateType) => {
  const { active, over } = event;
  if (over && active.id !== over.id) {
    setState((prev: { name: string }[]) => {
      const oldIndex = prev.findIndex((item: { name: string }) => item.name === active.id);
      const newIndex = prev.findIndex((item: { name: string }) => item.name === over.id);
      return arrayMove(prev, oldIndex, newIndex);
    });
  }
};
