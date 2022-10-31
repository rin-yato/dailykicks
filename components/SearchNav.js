import React from "react";
import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

function SearchNav({ setIsOpen, handleBack, brand, categories, handleFilter }) {
  const subCategoryContainer = useRef(null);

  let oldScrollY = 0;

  const [direction, setDirection] = useState("up");

  const controlDirection = () => {
    if (window.scrollY > oldScrollY) {
      setDirection("down");
    } else {
      setDirection("up");
    }
    oldScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlDirection);
    return () => {
      window.removeEventListener("scroll", controlDirection);
    };
  }, []);

  return (
    <header className="flex flex-col fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="h-[60px] w-full bg-white flex justify-between items-center py-1 px-3">
        <div className="flex items-center gap-2">
          <ButtonBase
            onClick={handleBack}
            className="min-w-min h-min rounded-full p-1.5 bg-white"
          >
            <i className="bx bxs-chevron-left bx-sm text-black"></i>
          </ButtonBase>
          <div className="font-bold">{brand ? brand.name : "All Sneakers"}</div>
        </div>
        <div className="flex items-center gap-2">
          <Link href={'/search'}>
              <ButtonBase className="min-w-min h-min rounded-full p-1.5 bg-white">
                <i className="bx bx-search bx-sm"></i>
              </ButtonBase>
          </Link>
          <ButtonBase
            className="min-w-min h-min rounded-full p-1.5 bg-white"
            onClick={() => setIsOpen(true)}
          >
            <i className="bx bxs-category bx-sm text-black"></i>
          </ButtonBase>
        </div>
      </div>
      <div className="w-11/12 self-center h-[2px] bg-slate-200 rounded-[90%]"></div>
      <div
        className={`sub-category -z-[1] bg-white absolute delay-100 top-full flex justify-between items-center duration-500 ${
          direction === "down" ? "-translate-y-full" : ""
        }`}
        ref={subCategoryContainer}
      >
        <div className="flex relative justify-between items-center gap-3 w-screen overflow-x-scroll no-scroll">
          <div className="flex justify-between items-center px-3 py-3 gap-3">
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5" onClick={() => handleFilter("All")}>
              All
            </div>
            {categories && categories.map((category) => (
              <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5" key={category._id} onClick={() => handleFilter(category.name)} ref={categoryPills}>
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default SearchNav;
