/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */
import { ButtonBase, Rating } from "@mui/material";
import React from "react";
import NoNav from "../../layouts/NoNav";
import sneakers from "../../src/shoes";
import { useRouter } from "next/router";

function DetailProduct(props) {
  const router = useRouter();
  // const [activeSize, setActiveSize] = React.useState(0);

  const handleLike = (e) => {
    e.target.classList.toggle("text-slate-700");
    e.target.classList.toggle("text-red-500");
  };

  // const selectSize = (size) => {
  //   setActiveSize(size);
  // };

  // // sizes from 33 to 44
  // const sizes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <NoNav>
      <div className="w-screen flex flex-col bg-slate-400">
        <div className="flex flex-col items-center justify-center pt-[50px]">
          <div className="fixed h-[50px] top-0 left-0 right-0 z-50 bg-white flex justify-between items-center py-1 px-3">
            <ButtonBase
              className="min-w-min h-min rounded-full p-1.5 bg-white"
              onClick={() => router.back()}
            >
              <i className="bx bxs-chevron-left bx-sm text-black"></i>
            </ButtonBase>
            {/* <ButtonBase className="min-w-min rounded-full p-1 bg-white">
              <i
                className="bx bxs-heart bx-sm text-slate-700"
                onClick={handleLike}
              ></i>
            </ButtonBase> */}
            <h4 className="uppercase font-semibold">Nike</h4>
            <ButtonBase className="min-w-min h-min rounded-full p-1.5 bg-white">
              <i className="bx bxs-share-alt bx-sm text-black"></i>
            </ButtonBase>
          </div>
          <div className="bg-slate-200 relative">
            <img src={props.product.image} className="" />
          </div>
          <div className="w-full flex flex-col items-start justify-center px-4 pt-4">
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
                <p className=" text-red-600 text-md font-bold bg-red-100 px-4 py-0.5 rounded">
                  ${props.product.price}
                </p>
              </div>
            </div>
            {/* <div className="flex items-center my-2">
              <Rating
                name="read-only"
                value={4.5}
                readOnly
                precision={0.5}
                className="-translate-x-1"
              />
              <p className="text-xs font-semibold text-slate-400 ml-1">
                4.5 / 5
              </p>
            </div> */}

            {/* <div className="my-2 w-full">
              <p className="text-lg">Available Size</p>
              <div className="overflow-x-scroll no-scroll" draggable="true">
                <div className="mt-1.5 grid grid-cols-4 gap-4">
                  {sizes.map((size) => (
                    <ButtonBase
                      key={size}
                      className={`min-w-full py-2.5 ${
                        activeSize === size ? "bg-sky-200" : "bg-slate-200"
                      } rounded`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </ButtonBase>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="my-2">
              <p className="text-lg">Description</p>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
                fugiat nemo facilis provident. Dolores hic facere, impedit
                suscipit eos voluptatem assumenda illum libero, sit, veniam
                quaerat. Ut, distinctio placeat.
              </p>
            </div>
            <div className="flex py-2 w-full gap-4">
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
