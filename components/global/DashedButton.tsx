import { HiOutlineFolderPlus } from "react-icons/hi2";

interface DashedButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function DashedButton({
  children,
  className,
  onClick,
  icon,
  ...props
}: DashedButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`flex justify-center text-medium items-center border border-dashed border-gray-800 rounded-lg px-5 py-2 hover:bg-gray-50 cursor-pointer gap-x-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon}
      <p className="text-sm whitespace-nowrap">{children}</p>
    </button>
  );
}
