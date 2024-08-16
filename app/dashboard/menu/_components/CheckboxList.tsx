import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxListProps {
  listName: string;
  listData: string[];
  state: string[];
  setState: (value: string[]) => void;
}

export default function CheckboxList({ listName, listData, state, setState }: CheckboxListProps) {
  const handleChecked = (checked: boolean, value: string) => {
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  };
  return (
    <div className="w-full space-y-1">
      <Label>{listName}</Label>
      <div className="flex flex-wrap gap-2">
        {listData.map((label, index) => (
          <div key={index} className="flex gap-x-2 items-center w-[180px]">
            <Checkbox value={label} onCheckedChange={(checked: boolean) => handleChecked(checked, label)} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
