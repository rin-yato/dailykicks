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
import SearchNav from "../../components/SearchNav";


function index({ brand }) {
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
      <SearchNav isOpen={ isOpen } setIsOpen={ setIsOpen } handleBack={ handleBack } />
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


