/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */
import { Badge, ButtonBase, Rating } from "@mui/material";
import React from "react";
import NoNav from "../../layouts/NoNav";
import { useRouter } from "next/router";
import Link from "next/link";
import { urlFor, sanityClient } from "../../sanity";
import ProductCard from "../../components/ProductCard";
import { motion } from "framer-motion";
import MotionFade from "../../MotionAnimation/components/MotionFade";
import Image from "next/image";
import Animation from "../../MotionAnimation/Animation";

function DetailProduct(props) {
  const router = useRouter();

  // if there is history, then go back to the previous page
  const handleBack = () => {
    // check if last history is daily-kicks
    if (
      (window.location.href.includes("dailykicks") ||
        window.location.href.includes("127.0.0.1") ||
        window.location.href.includes("localhost")) &&
      window.history.length > 1
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleLike = (e) => {
    e.target.classList.toggle("text-slate-700");
    e.target.classList.toggle("text-red-500");
  };

  const handleShare = () => {
    //get the current url
    const url = window.location.href;

    navigator.share({
      title: "Daily Kicks",
      text: "Check out this awesome sneaker!",
      url: url,
    });
  };

  return (
    <MotionFade>
      <motion.div
        variants={Animation.Fade}
        exit={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <NoNav>
          <div className="w-screen flex flex-col">
            <div className="flex flex-col items-center justify-center pt-[50px] pb-[80px]">
              <div className="fixed h-[50px] top-0 left-0 right-0 z-50 bg-white flex justify-between items-center py-1 px-3">
                <ButtonBase
                  onClick={handleBack}
                  className="min-w-min h-min rounded-full p-1.5 bg-white"
                >
                  <i className="bx bxs-chevron-left bx-sm text-black"></i>
                </ButtonBase>
                <h4 className="uppercase font-semibold">Nike</h4>
                <ButtonBase
                  className="min-w-min h-min rounded-full p-1.5 bg-white"
                  onClick={handleShare}
                >
                  <i className="bx bxs-share-alt bx-sm text-black"></i>
                </ButtonBase>
              </div>
              <div className="bg-slate-200 relative flex w-screen overflow-x-scroll snap-x snap-mandatory">
                <div className="flex w-max">
                  <div className="w-screen h-[100vw] snap-center">
                    <Image
                      src={urlFor(props.product.image).url()}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      priority
                    />
                  </div>
                  {props.product.images &&
                    props.product.images.map((image, index) => (
                      <div
                        className="w-screen h-[100vw] snap-center"
                        key={index}
                      >
                        <Image
                          src={urlFor(image).url()}
                          width="100%"
                          height="100%"
                          layout="responsive"
                        />
                      </div>
                    ))}
                </div>
                {/* <ButtonBase className=" absolute bottom-0 left-0 m-4 min-w-min rounded-full p-1 bg-white">
                  <i
                    className="bx bxs-heart bx-sm text-slate-700"
                    onClick={handleLike}
                  ></i>
                </ButtonBase> */}
              </div>
              <div className="w-full flex flex-col items-start justify-center pt-5">
                <div className="flex justify-between items-start w-full px-7">
                  <div className="">
                    <p className="text-xl font-bold text-black">
                      {props.product.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-end">
                    {/* <p className=" line-through text-sm text-slate-600">
                      ${props.product.oldPrice}
                    </p> */}
                    <p className="relative bg-indigo-100 text-indigo-500 shadow-md text-md font-bold  px-4 py-0.5 rounded">
                      ${props.product.price}
                      {props.product.oldPrice && (
                        <span
                          className="text-[12px] line-through absolute top-0
                      right-0 translate-x-1/2 -translate-y-1/2 bg-red-100 px-1 rounded-full text-red-500 shadow"
                        >
                          ${props.product.oldPrice}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-2 px-7">
                  <Rating
                    name="read-only"
                    value={4.5}
                    readOnly
                    precision={0.5}
                    className="-translate-x-1"
                    size="small"
                  />
                  <p className="text-xs font-semibold text-slate-400 ml-1">
                    4.5 / 5
                  </p>
                </div>
                <div className="my-4 px-7">
                  <p className="text-md font-semibold mb-1">Description</p>
                  <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga ad fugiat nemo facilis provident. Dolores hic facere,
                    impedit suscipit eos voluptatem assumenda illum libero, sit,
                    veniam quaerat. Ut, distinctio placeat.
                  </p>
                </div>
                <div className="related-products my-4 w-full">
                  <p className="text-md mb-3 font-semibold px-7">
                    Related Products
                  </p>
                  <div className="grid grid-cols-2 gap-3 w-full px-4">
                    {props.sneakers.map((sneaker) => (
                      <ProductCard key={sneaker._id} product={sneaker} />
                    ))}
                  </div>
                </div>
                <div className=" fixed bottom-0 left-0 px-4 h-[60px] flex py-1.5 w-full gap-4 bg-white">
                  <ButtonBase
                    className="w-full shadow rounded-full py-1.5 bg-green-500 font-semibold text-white"
                    href="tel:0188257038"
                  >
                    <i className="bx bxs-phone bx-md -translate-x-1.5"></i>
                    Call
                  </ButtonBase>
                  <ButtonBase
                    className="w-full shadow rounded-full py-1.5 bg-sky-500 font-semibold text-white"
                    href="https://t.me/rinyato"
                  >
                    <i className="bx bxl-telegram bx-md -translate-x-1.5"></i>
                    Chat
                  </ButtonBase>
                </div>
              </div>
            </div>
          </div>
        </NoNav>
      </motion.div>
    </MotionFade>
  );
}

export default DetailProduct;

export async function getStaticProps(Context) {
  const { params } = Context;
  const id = params.id;

  const sneakerQuery = `*[_type == "product"]{
    _id,
    name,
    price,
    oldPrice,
    image,
    description,
    brand->,
    category->,
    images,
  }`;

  const sneakers = await sanityClient.fetch(sneakerQuery);

  const product = sneakers.find((sneaker) => sneaker._id === id);

  console.log(id);

  return {
    props: {
      product,
      sneakers,
    },
  };
}

export async function getStaticPaths() {
  const sneakersQuery = `*[_type == "product"]{
    _id,
  }`;

  const sneakers = await sanityClient.fetch(sneakersQuery);
  const paths = sneakers.map((sneaker) => ({
    params: { id: sneaker._id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
