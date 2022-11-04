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
import Transition from "../MotionAnimation/Transition";

export default function Home({ sneakers, newArrivals, featuredProducts }) {
  return (
    <MotionFade>
      <div className="overflow-x-hidden">
        <Layout>
          <main className="min-h-screen w-screen overflow-x-hidden bg-white md:px-32 lg:px-40">
            <section
              className="w-full h-[60vh] overflow-hidden relative flex flex-col overflow-x-hidden justify-end items-center mb-4"
              id="hero"
            >
              <div className="relative mt-10 leading-[11rem] font-thin text-white text-[15rem] text-stroke lg:scale-125">
                <motion.span
                  variants={Animation.Fade}
                  transition={{ duration: 1.5, ease: Transition.ease4 }}
                >
                  AIR
                </motion.span>
                <motion.img
                  animate={{ y: "23%", x: "-50%", opacity: 1 }}
                  initial={{ y: "23%", x: "300px", opacity: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: Transition.ease2,
                  }}
                  src="/sneakers/air-force-blue.png"
                  alt=""
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[23%]"
                />
              </div>
              <motion.p
                variants={Animation.SlideUp}
                transition={{ delay: 0.7, ease: Transition.ease4 }}
                className="p-6 text-center font-[500] leading-snug pb-4 lg:text-xl lg:pt-10"
              >
                We provide the latest and greatest sneakers, with premium
                quality from the best brands.
              </motion.p>
              <motion.div
                variants={Animation.SlideUp}
                transition={{ delay: 0.9, ease: Transition.ease4 }}
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
                transition={{ delay: 1.1, ease: Transition.ease4 }}
                className="text-center font-extrabold text-3xl"
              >
                Featured
              </motion.h1>
              <motion.h3
                variants={Animation.SlideUp}
                transition={{ delay: 1.3, ease: Transition.ease4 }}
                className="text-[10px] font-semibold text-center"
              >
                PRODUCTS
              </motion.h3>
              <motion.div
                variants={Animation.Stagger1}
                className="featured-container grid grid-cols-2 gap-3 px-3 mt-5 lg:grid-cols-4 lg:gap-6 lg:mt-10"
              >
                {featuredProducts.map((sneaker) => (
                  <motion.div
                    key={sneaker._id}
                    variants={Animation.SlideUp}
                    transition={{ ease: Transition.ease4 }}
                  >
                    <ProductCard product={sneaker} />
                  </motion.div>
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
              <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5 lg:grid-cols-4 lg:gap-6 lg:mt-10">
                {newArrivals.map((sneaker) => (
                  <div key={sneaker._id} className="cursor-pointer">
                    <ProductCard product={sneaker} />
                  </div>
                ))}
              </div>
            </section>
          </main>
        </Layout>
      </div>
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
