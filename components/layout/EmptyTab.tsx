import AddButton from "@/components/global/AddButton";

export default function EmptyTab({ text, buttonText }: { text: string; buttonText: string }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <p>{text}</p>
        <AddButton>{buttonText}</AddButton>
      </div>
    </div>
  );
}
