/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Category from "../components/Category";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchNav from "../components/SearchNav";
import { sanityClient, urlFor } from "../sanity";
import FilterDrawer from "../components/FilterDrawer";

function Brand({ brand, products, categories }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [oldScroll, setOldScroll] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterDrawer, setFilterDrawer] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 125]);
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
      setFilteredProducts(products);
    } else {
      let newFilteredProducts = products.filter(
        (product) => product.category.name === category
      );
      setFilteredProducts(newFilteredProducts);
    }
  };

  const filterPriceRange = ([min, max]) => {
    let newFilteredProducts = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPriceLowToHigh = () => {
    let newFilteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    setFilteredProducts(newFilteredProducts);
  };
  
  const filterPriceHighToLow = () => {
    let newFilteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    setFilteredProducts(newFilteredProducts);
  };

  const filterNewest = () => {
    let newFilteredProducts = filteredProducts.sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPopular = () => {
    setFilteredProducts(products);
  };

  const handleAllFilter = () => {

    filterPriceRange(priceRange);

    isPopular && filterPopular();

    isLowToHigh && filterPriceLowToHigh();

    isHighToLow && filterPriceHighToLow();

    isNewest && filterNewest();

  };


  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    handleAllFilter();
  }, [isPopular, isLowToHigh, isHighToLow, isNewest, priceRange]);

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
      <FilterDrawer
        setFilterDrawer={setFilterDrawer}
        filterDrawer={ filterDrawer }
        filterPriceRange={ filterPriceRange }
        priceRange={ priceRange }
        setPriceRange={ setPriceRange }
        isPopular={ isPopular }
        setIsPopular={ setIsPopular }
        isLowToHigh={ isLowToHigh }
        setIsLowToHigh={ setIsLowToHigh }
        isHighToLow={ isHighToLow }
        setIsHighToLow={ setIsHighToLow }
        isNewest={ isNewest }
        setIsNewest={ setIsNewest }
        handleAllFilter={ handleAllFilter }
      />
      <main className="p-4 pt-[115px]">
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
          {filteredProducts.map((product) =>
            product ? <ProductCard key={product._id} product={product} /> : ""
          )}
        </div>
      </main>
    </div>
  );
}

export default Brand;

export async function getStaticProps(context) {
  const brandName = context.params.brand;

  const brandQuery = `*[_type == "brand" && name == "${brandName}"][0]`;
  const productQuery = `*[_type == "product" && brand->.name == "${brandName}"]{_id, name, brand->, category->, price, oldPrice, image}`;
  const categoryQuery = `*[_type == "category" && brand->.name == "${brandName}"]`;

  const brand = await sanityClient.fetch(brandQuery);
  const products = await sanityClient.fetch(productQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  return {
    props: {
      brand,
      products,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const brandQuery = `*[_type == "brand"]`;
  const brands = await sanityClient.fetch(brandQuery);
  return {
    paths: brands.map((brand) => ({
      params: { brand: brand.name },
    })),
    fallback: false,
  };
}
