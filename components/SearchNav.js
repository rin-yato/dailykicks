import React from "react";
import { ButtonBase } from "@mui/material";
import { useState, useRef, useEffect } from "react";

function SearchNav({ isOpen, setIsOpen, handleBack, brand }) {
  const [oldScroll, setOldScroll] = useState(0);
  const subCategoryContainer = useRef(null);
  // if scroll up then hide sub-category
  // if scroll down then show sub-category
  const handleScroll = () => {
    const subCategory = subCategoryContainer.current;
    const scrollPosition = window.scrollY;

    if (window.scrollY < oldScroll) {
      if (window.scrollY < oldScroll - 80) {
        if (subCategory.style.transform !== "translateY(0%)") {
          subCategory.style.transform = "translateY(0%)";
        }
      }
    } else {
      if (subCategory.style.transform !== "translateY(-100%)") {
        subCategory.style.transform = "translateY(-100%)";
      }
      setOldScroll(scrollPosition);
    }

    // console.log("scroll position", scrollPosition, "old scroll", oldScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [oldScroll]);

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
          <ButtonBase className="min-w-min h-min rounded-full p-1.5 bg-white">
            <i className="bx bx-search bx-sm"></i>
          </ButtonBase>
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
        className="sub-category -z-[1] bg-white absolute top-full flex justify-between items-center duration-300"
        ref={subCategoryContainer}
      >
        <div className="flex relative justify-between items-center gap-3 w-full ">
          <div className="flex justify-between items-center px-3 py-3 gap-3 overflow-x-scroll no-scroll">
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              All
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              Jordan
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              AirForce
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              Converse
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              Sports
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              Classic
            </div>
            <div className="text-sm bg-slate-100 px-2 rounded-full py-0.5">
              Yezzy
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SearchNav;
