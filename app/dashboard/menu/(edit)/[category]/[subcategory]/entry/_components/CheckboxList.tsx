import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsInfoCircle } from "react-icons/bs";

interface SingleSelectionProps {
  selectionType: "single";
  state: string;
  setState: (value: string) => void;
}

interface MultipleSelectionProps {
  selectionType: "multiple";
  state: string[];
  setState: (value: string[]) => void;
}

type CheckboxListProps = {
  listName: string;
  listData: string[];
  message?: string;
} & (SingleSelectionProps | MultipleSelectionProps);

export default function CheckboxList({ listName, listData, state, setState, message, selectionType }: CheckboxListProps) {
  const handleChecked = (checked: boolean, value: string) => {
    if (selectionType === "single") {
      if (checked) {
        setState(value);
      } else {
        setState("");
      }
    } else {
      if (checked) {
        setState([...(state as string[]), value]);
      } else {
        setState((state as string[]).filter((item) => item !== value));
      }
    }
  };

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center gap-x-2">
        <Label>{listName}</Label>

        {message && (
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger>
                <BsInfoCircle className="size-3 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs text-muted-foreground">{message}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {listData.map((label, index) => (
          <div key={index} className="flex gap-x-2 items-center w-[180px]">
            <Checkbox
              value={label}
              checked={selectionType === "single" ? state === label : (state as string[]).includes(label)}
              onCheckedChange={(checked: boolean) => handleChecked(checked, label)}
            />
            <span className="text-sm">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
