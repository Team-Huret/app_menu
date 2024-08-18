import MenuSideBar from "@/app/dashboard/menu/_components/MenuSideBar";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex relative">
      <MenuSideBar />
      {children}
    </div>
  );
}
