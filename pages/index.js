/* eslint-disable @next/next/no-img-element */

import { ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Layout from "../layouts/Layout";
import { sanityClient, urlFor } from "../sanity";

export default function Home({ sneakers }) {
  return (
    <Layout>
      <main className="min-h-screen w-screen overflow-x-hidden bg-white">
        <section
          className="w-full h-[60vh] relative flex flex-col justify-end items-center mb-4"
          id="hero"
        >
          <div className="relative mt-10 leading-[11rem] font-thin text-white text-[15rem] text-stroke">
            AIR
            <img
              src="/sneakers/air-force-blue.png"
              alt=""
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[23%]"
            />
          </div>
          <p className="p-6 text-center font-[500] leading-snug pb-4">
            We provide the latest and greatest sneakers, with premium quality
            from the best brands.
          </p>
          <Link href={'/sneakers'}>
            <ButtonBase className="bg-slate-800 py-1.5 px-4 rounded font-bold text-white mmb-[75px]">
              SHOP NOW <i className="bx bx-right-arrow-alt bx-sm"></i>
            </ButtonBase>
          </Link>
        </section>
        <section id="featured" className="flex flex-col justify-center py-14">
          <h1 className="text-center font-extrabold text-3xl">Featured</h1>
          <h3 className="text-[10px] font-semibold text-center">PRODUCTS</h3>
          <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5">
            {sneakers.map((sneaker) => (
              <ProductCard key={ sneaker._id } product={ sneaker } />
            ))}
          </div>
        </section>
        <section
          id="best-sellers"
          className="flex flex-col justify-center pb-14 pt-5"
        >
          <h1 className="text-center font-extrabold text-3xl">Best Sellers</h1>
          <h3 className="text-[10px] font-semibold text-center">PRODUCTS</h3>
          <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5">
          {sneakers.map((sneaker) => (
              <ProductCard key={ sneaker._id } product={ sneaker } />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const sneakersQuery = `*[_type == "product"]{name, price, oldPrice, image, _id}`;
  const sneakers = await sanityClient.fetch(sneakersQuery);

  return {
    props: {
      sneakers,
    },
  };
}
