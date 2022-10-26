/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Category from "../../components/Category";
import { useRef, useState } from "react";
import ProductCard from "../../components/ProductCard";
import SearchNav from "../../components/SearchNav";
import { sanityClient, urlFor } from "../../sanity";

function index({ brands, products, categories }) {
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
        (product) => {
          if (product.category) {
            return product.category.name === category
          }
        }
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

export default index;

export async function getStaticProps(context) {
  // const brandName = context.params.brand;

  const brandQuery = `*[_type == "brand"]`;
  const productQuery = `*[_type == "product"]{id, name, brand->, category->, price, image}`;
  const categoryQuery = `*[_type == "category"]`;

  const brands = await sanityClient.fetch(brandQuery);
  const products = await sanityClient.fetch(productQuery);
  const categories = await sanityClient.fetch(categoryQuery);

  // const brand = brands.find(
  //   (brand) => brand.name.toLowerCase() === brandName.toLowerCase()
  // );
  // const brandProducts = products.filter(
  //   (product) => product.brand.name.toLowerCase() === brandName.toLowerCase()
  // );

  console.log(products);

  return {
    props: {
      brands,
      products,
      categories,
    },
  };
}

// export async function getStaticPaths() {
//   const brands = await sanityClient.fetch(
//     `*[_type == "brand"]{name}`
//   );
//   return {
//     paths: brands.map((brand) => ({
//       params: { brand: brand.name },
//     })),
//     fallback: false,
//   };
// }
