import AdminSideBar from "@/components/admin/AdminSideBar";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AdminSideBar />
      {children}
    </div>
  );
}
