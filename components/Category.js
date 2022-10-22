/* eslint-disable @next/next/no-img-element */
import { ButtonBase, Drawer } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect } from "react";
import brands from "../src/brands";
import Link from "next/link";

function Category({ isOpen, setIsOpen }) {
  const sneakerBrands = brands.map((brand) => (
    <Link key={ brand.id } href={`/${brand.name}`}>
      <ButtonBase onClick={() => setIsOpen(false)}
        className="w-full h-full shadow-md relative overflow-hidden
         flex justify-center items-center p-5 py-2 box-border bg-white rounded-md"
      >
            <Image src={ brand.image } alt={ brand.name } width="100%" height="100%" objectFit="contain" />
      </ButtonBase>
    </Link>
    // <ButtonBase key={brand.id} className="bg-white rounded-md py-4 font-bold shadow">{brand.name}</ButtonBase>
  ));

  return (
    <div>
      <Drawer anchor="right" open={isOpen} variant="persistent">
        <div className=" bg-slate-100 w-screen">
          <header className="flex justify-between items-center py-1.5 px-3 bg-white">
            <p className="uppercase font-bold mt-0.5 ml-3">category</p>
            <ButtonBase
              className=" rounded-full"
              onClick={() => setIsOpen(false)}
            >
              <i className="bx bx-x bx-md"></i>
            </ButtonBase>
          </header>
          <div className="flex flex-col mt-3">
            <h2 className="font-bold py-2 px-4">Sneakers</h2>
            <div className="brand-container grid grid-cols-2 auto-rows-fr px-4 gap-4">
              {sneakerBrands}
            </div>
          </div>
          <div className="mt-4 py-3 px-4 pb-16">
            <h2 className="font-bold mb-2">Accessories</h2>
            <div className="accessories-container">
              <ButtonBase className="h-[127px] overflow-hidden flex rounded-md shadow-md">
                <img
                  src="/logos/socks.jpeg"
                  loading="eager"
                  alt=""
                  className="h-full"
                />
                <img
                  src="/logos/socks3.jpeg"
                  loading="eager"
                  alt=""
                  className="h-full"
                />
                <img
                  src="/logos/socks1.jpeg"
                  loading="eager"
                  alt=""
                  className="h-full"
                />
                <p className="absolute top-1/2 left-1/2 -translate-y-1/2 z-10 -translate-x-1/2 font-bold text-white text-3xl">
                  SOCKS
                </p>
                <div className="overlay absolute inset-0 bg-slate-500 opacity-80 backdrop-blur-sm"></div>
              </ButtonBase>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Category;
