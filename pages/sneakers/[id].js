/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */
import { Badge, ButtonBase, Rating } from "@mui/material";
import React from "react";
import NoNav from "../../layouts/NoNav";
import sneakers from "../../src/shoes";
import { useRouter } from "next/router";
import Link from "next/link";

function DetailProduct(props) {
  const router = useRouter();


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
    <NoNav>
      <div className="w-screen flex flex-col">
        <div className="flex flex-col items-center justify-center pt-[50px] pb-[80px]">
          <div className="fixed h-[50px] top-0 left-0 right-0 z-50 bg-white flex justify-between items-center py-1 px-3">
            <ButtonBase
              className="min-w-min h-min rounded-full p-1.5 bg-white"
              onClick={() => router.back()}
            >
              <i className="bx bxs-chevron-left bx-sm text-black"></i>
            </ButtonBase>
            <h4 className="uppercase font-semibold">Nike</h4>
            <ButtonBase className="min-w-min h-min rounded-full p-1.5 bg-white" onClick={handleShare}>
              <i className="bx bxs-share-alt bx-sm text-black"></i>
            </ButtonBase>
          </div>
          <div className="bg-slate-200 relative">
            <img src={props.product.image} className="" />
            <ButtonBase className=" absolute bottom-0 left-0 m-4 min-w-min rounded-full p-1 bg-white">
              <i
                className="bx bxs-heart bx-sm text-slate-700"
                onClick={handleLike}
              ></i>
            </ButtonBase>
          </div>
          <div className="w-full flex flex-col items-start justify-center px-7 pt-5">
            <div className="flex justify-between items-start w-full">
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
                  <span
                    className="text-[12px] line-through absolute top-0
                  right-0 translate-x-1/2 -translate-y-1/2 bg-red-100 px-1 rounded-full text-red-500 shadow"
                  >
                    ${props.product.oldPrice}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center my-2">
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
            <div className="my-4">
              <p className="text-md font-semibold mb-1">Description</p>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
                fugiat nemo facilis provident. Dolores hic facere, impedit
                suscipit eos voluptatem assumenda illum libero, sit, veniam
                quaerat. Ut, distinctio placeat.
              </p>
            </div>
            <div className="related-products my-4">
              <p className="text-md mb-3 font-semibold">Related Products</p>
              <div className="grid grid-cols-2 gap-3">
                {sneakers.map((sneaker, index) => (
                  <Link href={`/sneakers/${sneaker.id}`} key={sneaker.id}>
                  <div className="product-card">
                    <div className="product-image overflow-hidden rounded-lg">
                      <img src={sneaker.image} alt="" />
                    </div>
                    <div className="product-info py-0.5 px-1.5">
                      <h1 className="product-name text-sm font-semibold">
                        {sneaker.name}
                      </h1>
                      <div className="flex items-center">
                        <h3 className="product-price font-semibold text-sm mr-1.5">
                          ${sneaker.price}
                        </h3>
                        <h3 className="text-xs line-through text-slate-500">
                          ${sneaker.oldPrice}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
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
                target="_blank"
              >
                <i className="bx bxl-telegram bx-md -translate-x-1.5"></i>
                Chat
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </NoNav>
  );
}

export default DetailProduct;

export async function getStaticProps(Context) {
  const { params } = Context;
  const id = params.id;

  const sneaker = sneakers.find((sneaker) => sneaker.id === parseInt(id));

  return {
    props: {
      product: sneaker,
    },
  };
}

export async function getStaticPaths() {
  const paths = sneakers.map((sneaker) => ({
    params: { id: sneaker.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
