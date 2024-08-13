import Category from "@/components/tabs/menu/Category";
import AddButton from "@/assets/global/AddButton";

export default function MenuSideBar() {
  const categories = ["Food", "Drinks", "dinner", "dessert"];

  return (
    <div className="w-56 border-r border-gray-300 bg-white pt-5 px-2" style={{ height: "calc(100vh - 70px)" }}>
      <h3 className="mb-3 ml-2">Categories</h3>
      <div>
        {categories.length > 0 ? (
          categories.map((category, index) => <Category key={index} name={category} />)
        ) : (
          <p className="px-3 text-center text-sm">No categories</p>
        )}
      </div>
      <div className="w-[88%] h-[1px] bg-gray-300 rounded-full mx-auto my-5"></div>
      <AddButton className="w-full">Add new category</AddButton>
    </div>
  );
}
