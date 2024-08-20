import MenuSideBar from "@/app/dashboard/menu/_components/MenuSideBar";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full" >
      <MenuSideBar />
      {children}
    </div>
  );
}
