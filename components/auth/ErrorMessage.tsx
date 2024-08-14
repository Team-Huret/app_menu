import { RxExclamationTriangle } from "react-icons/rx";

interface AuthError {
  message?: string;
}

export default function AuthError({ message }: AuthError) {
  if (!message) return null;
  return (
    <div className="flex items-center bg-destructive/15 text-destructive p-3 rounded-lg gap-x-2 text-sm">
      <RxExclamationTriangle className="size-4 shrink-0" />
      <span>{message}</span>
    </div>
  );
}
