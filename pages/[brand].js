/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import products from "../src/shoes";
import Link from "next/link";
import Category from "../components/Category";
import { useEffect, useRef, useState } from "react";
import brands from "../src/brands";
import ProductCard from "../components/ProductCard";
import { ProductionQuantityLimits } from "@mui/icons-material";
import SearchNav from "../components/SearchNav";
import { sanityClient, urlFor } from "../sanity";

function Brand({ brand, products, categories }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("All");
  const filteredProducts = useRef(products);

  const handleBack = () => {
    // if there is history, then go back to the previous page
    // check if last history is daily-kicks
    if (router.asPath.includes("dailykicks")) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleFilter = (category) => {
    setCurrentCategory(category);
    if (category === "All") {
      filteredProducts.current = products;
    } else {
      filteredProducts.current = products.filter(
        (product) => product.category.name === category
      );
    }
  };

  return (
    <div className="bg-slate-100 h-screen">
      <Category isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleBack={handleBack}
        brand={brand}
        categories={categories}
        handleFilter={handleFilter}
      />
      <main className="p-4 pt-[115px]">
        <div className="font-bold mb-4 mt-3">{currentCategory}</div>
        <div className="product-container grid grid-cols-2 gap-4">
          {filteredProducts.current.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Brand;

export async function getStaticProps(context) {
  const brandName = context.params.brand;

  const brandQuery = `*[_type == "brand"]`;
  const productQuery = `*[_type == "product"]{id, name, brand->, category->, price, image}`;
  const categoryQuery = `*[_type == "category" && brand->.name == "${brandName}"]`;

  const brands = await sanityClient.fetch(brandQuery);
  const products = await sanityClient.fetch(productQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  const brand = brands.find(
    (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
  );
  const brandProducts = products.filter(
    (product) => product.brand.name.toLowerCase() === brandName.toLowerCase()
  );

  console.log(brand, products);

  return {
    props: {
      brand,
      products: brandProducts,
      categories,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: brands.map((brand) => ({
      params: { brand: brand.name },
    })),
    fallback: false,
  };
}
