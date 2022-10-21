/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import products from "../../src/shoes";
import Link from "next/link";
import Category from "../../components/Category";
import { useEffect, useState } from "react";
import brands from "../../src/brands";
import ProductCard from "../../components/ProductCard";
import { ProductionQuantityLimits } from "@mui/icons-material";


function index() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // if there is history, then go back to the previous page
  const handleBack = () => {
    // check if last history is daily-kicks
    if (router.asPath.includes("dailykicks")) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="bg-slate-100">
      <Category isOpen={ isOpen } setIsOpen={ setIsOpen } />
      <header className="flex flex-col fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="h-[60px] w-full bg-white flex justify-between items-center py-1 px-3">
          <ButtonBase
            onClick={handleBack}
            className="min-w-min h-min rounded-full p-1.5 bg-white"
          >
            <i className="bx bxs-chevron-left bx-sm text-black"></i>
          </ButtonBase>
          <div>
            <input
              type="search"
              placeholder="air force 1"
              className="bg-slate-100 px-5 w-full py-0.5 rounded-full"
            />
          </div>
          <ButtonBase
            className="min-w-min h-min rounded-full p-1.5 bg-white"
            onClick={() => setIsOpen(true)}
          >
            <i className="bx bxs-category bx-sm text-black"></i>
          </ButtonBase>
        </div>
        <div className="w-11/12 self-center h-[2px] bg-slate-200 rounded-[90%]"></div>
        <div className="sub-category bg-white overflow-x-scroll no-scroll">
          <div className="flex justify-between items-center px-3 py-3 gap-3 w-max">
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
      </header>
      <main className="p-4 mt-[115px]">
        <div className="font-bold mb-4 mt-3">All Sneakers</div>
        <div className="product-container grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default index;
