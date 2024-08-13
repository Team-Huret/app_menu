import EmptyTab from "@/components/layout/EmptyTab";
import MenuSideBar from "@/components/tabs/menu/MenuSideBar";

export default function Menu() {
  return (
    <div className="flex">
      <MenuSideBar />
      <EmptyTab text="Nothing here yet, you can start by creating your first category here." buttonText="Add new category" />
    </div>
  );
}
