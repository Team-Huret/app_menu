import MenuSideBar from "@/app/dashboard/menu/_components/MenuSideBar";

export default function Menu() {
  return (
    <div className="flex">
      <MenuSideBar />
      <div className="w-full flex justify-center items-center">
        <p className="text-base">Nothing here yet, you can start by creating your first category in the side bar.</p>
      </div>
    </div>
  );
}
