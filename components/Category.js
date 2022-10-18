/* eslint-disable @next/next/no-img-element */
import { ButtonBase, Drawer } from "@mui/material";
import Head from "next/head";
import React, { useRef } from "react";
import { useState } from "react";
import brands from "../src/brands";

function Category({ isOpen, setIsOpen }) {
  return (
    <React.Fragment>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-screen bg-slate-100 min-h-screen">
          <header className="flex justify-between items-center py-1.5 px-3">
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
              {brands.map((brand) => (
                <ButtonBase
                  key={brand.id}
                  className="w-full h-full shadow-md relative overflow-clip flex justify-center items-center p-5 bg-white rounded-md"
                >
                  <img
                    src={brand.image}
                    loading="eager"
                    alt={brand.name}
                    className="z-[20]"
                  />
                </ButtonBase>
              ))}
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
    </React.Fragment>
  );
}

export default Category;
