/* eslint-disable @next/next/no-img-element */

import { ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import Layout from "../layouts/Layout";
import { sanityClient, urlFor } from "../sanity";
import { motion } from "framer-motion";
import MotionFade from "../MotionAnimation/components/MotionFade";
import Animation from "../MotionAnimation/Animation";

export default function Home({ sneakers, newArrivals, featuredProducts }) {
  return (
    <MotionFade>
      <motion.div>
        <Layout>
          <main className="min-h-screen w-screen overflow-x-hidden bg-white">
            <section
              className="w-full h-[60vh] relative flex flex-col justify-end items-center mb-4"
              id="hero"
            >
              <div className="relative mt-10 leading-[11rem] font-thin text-white text-[15rem] text-stroke">
                <motion.span
                  variants={Animation.Fade}
                  transition={{ duration: 1.5 }}
                >
                  AIR
                </motion.span>
                <motion.img
                  animate={{ y: "23%", x: "-50%" }}
                  initial={{ y: "23%", x: "50%" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  src="/sneakers/air-force-blue.png"
                  alt=""
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[23%]"
                />
              </div>
              <motion.p
                variants={Animation.SlideUp}
                transition={{ delay: 0.7 }}
                className="p-6 text-center font-[500] leading-snug pb-4"
              >
                We provide the latest and greatest sneakers, with premium
                quality from the best brands.
              </motion.p>
              <motion.div
                variants={Animation.SlideUp}
                transition={{ delay: 0.9 }}
              >
                <Link href={"/sneakers"}>
                  <ButtonBase className="bg-slate-800 py-1.5 px-4 rounded font-bold text-white mmb-[75px]">
                    SHOP NOW <i className="bx bx-right-arrow-alt bx-sm"></i>
                  </ButtonBase>
                </Link>
              </motion.div>
            </section>
            <section
              id="featured"
              className="flex flex-col justify-center py-14"
            >
              <motion.h1
                variants={Animation.SlideUp}
                transition={{ delay: 1.1 }}
                className="text-center font-extrabold text-3xl"
              >
                Featured
              </motion.h1>
              <motion.h3
                variants={Animation.SlideUp}
                transition={{ delay: 1.3 }}
                className="text-[10px] font-semibold text-center"
              >
                PRODUCTS
              </motion.h3>
              <motion.div
                variants={Animation.SlideUp}
                transition={{ delay: 1.5 }}
                className="featured-container grid grid-cols-2 gap-3 px-3 mt-5"
              >
                {featuredProducts.map((sneaker) => (
                  <ProductCard product={sneaker} key={sneaker._id} />
                ))}
              </motion.div>
            </section>
            <section
              id="best-sellers"
              className="flex flex-col justify-center pb-14 pt-5"
            >
              <h1 className="text-center font-extrabold text-3xl">
                New Arrival
              </h1>
              <h3 className="text-[10px] font-semibold text-center">
                PRODUCTS
              </h3>
              <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5">
                {newArrivals.map((sneaker) => (
                  <ProductCard key={sneaker._id} product={sneaker} />
                ))}
              </div>
            </section>
          </main>
        </Layout>
      </motion.div>
    </MotionFade>
  );
}

export async function getStaticProps() {
  const sneakersQuery = `*[_type == "product"]{name, price, oldPrice, image, _id}`;
  const featuredProductsQuery = `*[_type == "product" && featured == true][0..3]`;
  const newArrivalsQuery = `*[_type == "product"] | order(_createdAt desc)[0..3]`;

  const sneakers = await sanityClient.fetch(sneakersQuery);
  const featuredProducts = await sanityClient.fetch(featuredProductsQuery);
  const newArrivals = await sanityClient.fetch(newArrivalsQuery);

  return {
    props: {
      sneakers,
      featuredProducts,
      newArrivals,
    },
  };
}
