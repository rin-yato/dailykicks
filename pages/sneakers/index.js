/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Category from "../../components/Category";
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import SearchNav from "../../components/SearchNav";
import { sanityClient, urlFor } from "../../sanity";
import FilterDrawer from "../../components/FilterDrawer";
import Image from "next/image";
import { motion } from "framer-motion";

function index({ brands, products, categories }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(categoryProducts);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isPopular, setIsPopular] = useState(false);
  const [isLowToHigh, setIsLowToHigh] = useState(false);
  const [isHighToLow, setIsHighToLow] = useState(false);
  const [isNewest, setIsNewest] = useState(false);

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
      setCategoryProducts(products);
    } else {
      let newFilteredProducts = products.filter((product) => {
        if (product.category) {
          return product.category.name === category;
        }
      });
      setCategoryProducts(newFilteredProducts);
      console.log(filteredProducts, newFilteredProducts);
    }
  };

  const filterPriceRange = ([min, max]) => {
    let newFilteredProducts = categoryProducts.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPriceLowToHigh = () => {
    let newFilteredProducts = categoryProducts.sort(
      (a, b) => a.price - b.price
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPriceHighToLow = () => {
    let newFilteredProducts = categoryProducts.sort(
      (a, b) => b.price - a.price
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterNewest = () => {
    let newFilteredProducts = categoryProducts.sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPopular = () => {
    setFilteredProducts(categoryProducts);
  };

  const handleAllFilter = () => {
    if (isPopular) filterPopular();

    if (isLowToHigh) filterPriceLowToHigh();

    if (isHighToLow) filterPriceHighToLow();

    if (isNewest) filterNewest();

    filterPriceRange(priceRange);
  };

  useEffect(() => {
    setFilteredProducts(categoryProducts);
  }, [categoryProducts]);

  useEffect(() => {
    handleAllFilter();
  }, [priceRange]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={ { opacity: 0 } }
      transition={{ duration: 0.35 }}
      className={`bg-slate-100 h-full`}
    >
      <Category isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleBack={handleBack}
        categories={categories}
        handleFilter={handleFilter}
      />
      <FilterDrawer
        setFilterDrawer={setFilterDrawer}
        filterDrawer={filterDrawer}
        filterPriceRange={filterPriceRange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        isPopular={isPopular}
        setIsPopular={setIsPopular}
        isLowToHigh={isLowToHigh}
        setIsLowToHigh={setIsLowToHigh}
        isHighToLow={isHighToLow}
        setIsHighToLow={setIsHighToLow}
        isNewest={isNewest}
        setIsNewest={setIsNewest}
        filterNewest={filterNewest}
        filterPopular={filterPopular}
        filterPriceLowToHigh={filterPriceLowToHigh}
        filterPriceHighToLow={filterPriceHighToLow}
      />
      <main
        className={`p-4 pt-[115px] ${
          isOpen ? "h-screen overflow-y-hidden" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full pt-5 pb-2">
          <div className="font-bold">{currentCategory}</div>
          <ButtonBase
            className="p-1 rounded-full"
            onClick={() => setFilterDrawer(true)}
          >
            <i className="bx bx-slider bx-sm"></i>
          </ButtonBase>
        </div>
        <div className="product-container grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
          {filteredProducts.length === 0 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
              <img src="/emptyState/1.png" className="" alt={"empty"} />
              <div className="text-center mt-7">
                <h1 className="text-xl font-bold">No Products Found</h1>
                <p className="text-sm text-gray-500">
                  Try changing your filter or search again
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </motion.div>
  );
}

export default index;

export async function getStaticProps(context) {
  const brandQuery = `*[_type == "brand"]`;
  const productQuery = `*[_type == "product"]{_id, name, brand->, category->, price, oldPrice, _createdAt, image}`;
  const categoryQuery = `*[_type == "category"]`;

  const brands = await sanityClient.fetch(brandQuery);
  const products = await sanityClient.fetch(productQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  return {
    props: {
      brands,
      products,
      categories,
    },
  };
}
