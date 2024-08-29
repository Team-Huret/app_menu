"use client";
import { useState, useRef, use } from "react";
import { ChevronsUpDown } from "lucide-react";
import { LuSearch } from "react-icons/lu";
import { useIntersectionObserver } from "./_hooks/useIntersectionObserver";
import { useSearch } from "./_hooks/useSearch";
import { EntriesContainer } from "./_components/EntriesContainer";
import "./_styles/main.css";
import { useMenuStore } from "@/app/dashboard/menu/(edit)/_store/useMenuStore";

export default function Page() {
  const { categories } = useMenuStore();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [scrollingThrough, setScrollingThrough] = useState<string | null>(activeCategory.Subcategories ? activeCategory.Subcategories[0].Name : null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [value, setValue] = useState(activeCategory.Name);
  const [searchValue, setSearchValue] = useState("");
  const [open, setOpen] = useState(false);

  const observer = useIntersectionObserver(setScrollingThrough, sectionRefs);

  const searchResults = useSearch(activeCategory, searchValue);
  return (
    <div className="menu-global-container">
      <div className="menu-header-container">
        <div className="category-btn-container">
          <button className="category-btn" onClick={() => setOpen(!open)}>
            <span>{value ? value : "Select..."}</span>
            <ChevronsUpDown className="category-btn-chevron" />
          </button>
          <div className={`category-btn-content-container ${open ? "" : "hidden"}`}>
            {categories.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setValue(item.Name);
                  setActiveCategory(item);
                  setScrollingThrough(item.Subcategories ? item.Subcategories[0].Name : null);
                  setOpen(false);
                }}
                className="category-btn-content-line px-1.5 py-1.5 hover:bg-gray-50 cursor-pointer rounded-lg flex items-center justify-start text-sm transition"
              >
                {item.Name}
              </div>
            ))}
          </div>
        </div>
        <div className="header-sub-container">
          {activeCategory.Subcategories?.map((subcategory, index) => {
            if (subcategory.Entries.length === 0) return null;
            return (
              <div key={index}>
                <a href={`#${subcategory.Name}`} className="header-sub-item">
                  {subcategory.Name}
                </a>
                <div className={`header-sub-item-indicator ${scrollingThrough === subcategory.Name ? "active" : "desactive"}`}></div>
              </div>
            );
          })}
        </div>
        <div className="header-search-container">
          <input placeholder="Search..." className="header-search-input" onChange={(e) => setSearchValue(e.target.value)} />
          <LuSearch className="header-search-icon" />
        </div>
      </div>
      {searchValue === "" ? (
        <div className="menu-content-container">
          {activeCategory.Subcategories?.map((subcategory, index) => {
            if (subcategory.Entries.length === 0) return null;
            return (
              <div
                className="sub-content-container"
                key={index}
                id={subcategory.Name}
                ref={(el) => {
                  sectionRefs.current[subcategory.Name] = el;
                  if (el) observer.current?.observe(el);
                }}
              >
                <span className="sub-content-title">{subcategory.Name}</span>
                <EntriesContainer items={subcategory.Entries} />
              </div>
            );
          })}
        </div>
      ) : searchResults.length > 0 ? (
        <div className="menu-content-container">
          <EntriesContainer items={searchResults} />
        </div>
      ) : (
        <div className="no-result-found">No results found</div>
      )}
    </div>
  );
}
