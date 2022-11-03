/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import SearchInput from "../components/SearchInput";
import ProductCard from "../components/ProductCard";
import { ButtonBase } from "@mui/material";
import FilterDrawer from "../components/FilterDrawer";
import { motion } from "framer-motion";
import Animation from "../MotionAnimation/Animation";
import MotionFade from "../MotionAnimation/components/MotionFade";
import Image from "next/image";

function Search() {
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [filterDrawer, setFilterDrawer] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(results);
  const [priceRange, setPriceRange] = useState([0, 250]);
  const [isPopular, setIsPopular] = useState(false);
  const [isLowToHigh, setIsLowToHigh] = useState(false);
  const [isHighToLow, setIsHighToLow] = useState(false);
  const [isNewest, setIsNewest] = useState(false);

  const filterPriceRange = ([min, max]) => {
    let newFilteredProducts = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPriceLowToHigh = () => {
    let newFilteredProducts = products.sort((a, b) => a.price - b.price);
    setFilteredProducts(newFilteredProducts);
  };

  const filterPriceHighToLow = () => {
    let newFilteredProducts = products.sort((a, b) => b.price - a.price);
    setFilteredProducts(newFilteredProducts);
  };

  const filterNewest = () => {
    let newFilteredProducts = products.sort(
      (a, b) => new Date(b._createdAt) - new Date(a._createdAt)
    );
    setFilteredProducts(newFilteredProducts);
  };

  const filterPopular = () => {
    setFilteredProducts(products);
  };

  const handleAllFilter = () => {
    if (isPopular) filterPopular();

    if (isLowToHigh) filterPriceLowToHigh();

    if (isHighToLow) filterPriceHighToLow();

    if (isNewest) filterNewest();

    filterPriceRange(priceRange);
  };

  useEffect(() => {
    setProducts(results);
  }, [results]);

  useEffect(() => {
    setFilteredProducts(products);
    handleAllFilter();
  }, [products]);

  useEffect(() => {
    handleAllFilter();
  }, [priceRange]);

  return (
    <MotionFade>
      <motion.div>
        <div>
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
          <SearchInput setResults={setResults} />
          <main className="p-4 pt-[60px] min-h-screen">
            <div className="flex justify-between items-center w-full pt-5 pb-2">
              <div className="font-bold">Search Results</div>
              <ButtonBase
                className="p-1 rounded-full"
                onClick={() => setFilterDrawer(true)}
              >
                <i className="bx bx-slider bx-sm"></i>
              </ButtonBase>
            </div>
            <div className="product-container grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-8">
              {filteredProducts &&
                filteredProducts.map((product) =>
                  product ? (
                    <ProductCard key={product._id} product={product} />
                  ) : (
                    ""
                  )
                )}
            </div>
            {(filteredProducts === null || filteredProducts.length === 0) && (
              <div className="flex flex-col items-center w-full mt-20">
                <div className="">
                  <Image
                    src="/emptyState/1.png"
                    className=""
                    alt={"empty"}
                    width="375"
                    height="300"
                    layout="intrinsic"
                    priority
                  />
                </div>
                <div className="text-center mt-7">
                  <h1 className="text-xl font-bold">No Products Found</h1>
                  <p className="text-sm text-gray-500">
                    Try changing your filter or search again
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </motion.div>
    </MotionFade>
  );
}

export default Search;
