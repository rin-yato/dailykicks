import React from "react";
import NoNav from "../../layouts/NoNav";
import { useRouter } from "next/router";
import { Button, ButtonBase, Fab, Rating } from "@mui/material";

export default function ProductDetail(props) {
  const router = useRouter();

  const selectSize = (e) => {
    // get all siblings of the clicked element
    const siblings = e.target.parentNode.children;
    // remove the active class from all siblings
    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove("bg-sky-200");
    }
    e.target.classList.add("bg-sky-200");
  };

  // sizes from 33 to 44
  const sizes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44];

  return (
    <NoNav>
      <div className="w-screen flex flex-col">
        <div className="flex flex-col items-center justify-center p-3">
          <div className="bg-slate-200 rounded-2xl relative">
            <div className="absolute top-0.5 left-0 right-0 flex justify-between py-1 px-2">
              <Button
                className="min-w-min rounded-full p-2"
                onClick={() => router.back()}
              >
                <i className="bx bx-arrow-back bx-md text-black"></i>
              </Button>
              <Button className="min-w-min rounded-full p-2">
                <i className="bx bx-heart bx-md text-black"></i>
              </Button>
            </div>
            <img src="/sneakers/air-force-grey.png" className="" />
          </div>
          <div className="w-full flex flex-col items-start justify-center p-3">
            <div className="flex justify-between items-start w-full">
              <div className="">
                <p className="text-sm text-black ml-0.5">Nike</p>
                <p className="text-2xl font-bold text-black leading-[1.1]">
                  Air Force 1
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
              />
              <p className="text-xs font-semibold text-slate-400 ml-1">
                4.5 / 5
              </p>
            </div>
            <div className="flex items-center">
              <p className=" text-black text-2xl font-bold mr-3">$124</p>
              <p className=" line-through text-base text-slate-600">$160</p>
            </div>
            <div className="my-2 w-full">
              <p className="text-lg">Available Size</p>
              <div className="overflow-x-scroll no-scroll" draggable="true">
                <div className="mt-1.5 flex w-max">
                  {sizes.map((size) => (
                    <Fab
                      className="text-black m-1 shadow-md"
                      key={size}
                      onClick={selectSize}
                    >
                      {size}
                    </Fab>
                  ))}
                </div>
              </div>
            </div>
            <div className="my-2">
              <p className="text-lg">Description</p>
              <p className="text-sm text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad
                fugiat nemo facilis provident. Dolores hic facere, impedit
                suscipit eos voluptatem assumenda illum libero, sit, veniam
                quaerat. Ut, distinctio placeat.
              </p>
            </div>
            <div className="flex my-2 mt-5 w-full gap-4">
              <ButtonBase className="w-full rounded-full py-3 bg-green-500 font-semibold text-white" href="tel:0188257038">
                <i className="bx bxs-phone bx-md -translate-x-1.5"></i>
                Call
              </ButtonBase>
              <ButtonBase className="w-full rounded-full py-3 bg-indigo-500 font-semibold text-white" href="https://t.me/rinyato" target="_blank">
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

export async function getStaticProps({ params }) {
  const id = params.slug;
  return {
    props: {
      id: id,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "12" } }],
    fallback: true,
  };
}
