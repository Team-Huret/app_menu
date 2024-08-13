import TopBar from "@/components/layout/TopBar";
import SideBar from "@/components/layout/SideBar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow h-full">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
