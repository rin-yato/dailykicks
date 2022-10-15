/* eslint-disable @next/next/no-img-element */

import { ButtonBase } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layouts/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen w-screen">
        <section
          className="w-full h-[60vh] relative flex flex-col justify-end items-center"
          id="hero"
        >
          <div className="absolute -z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-thin text-white text-[15rem] text-stroke">
            A<span className=" z-10">I</span>R
          </div>
          <img
            src="/sneakers/air-force-blue.png"
            alt=""
            className="absolute - top-1/2 left-1/2 -translate-x-1/2 -translate-y-[56%]"
          />
          <p className="p-6 text-center font-[500] leading-snug pb-4">
            We provide the latest and greatest sneakers, with premium quality
            from the best brands.
          </p>
          <ButtonBase className="bg-slate-800 py-1.5 px-4 rounded font-bold text-white mmb-[75px]">
            SHOP NOW
          </ButtonBase>
        </section>
        <section id="featured" className="flex flex-col justify-center py-14">
          <h1 className="text-center font-extrabold text-3xl">Featured</h1>
          <h3 className="text-[10px] font-semibold text-center">PRODUCTS</h3>
          <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5">
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/new-balanced.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">NewYork Balance</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$124</h3>
                  <h3 className="text-xs line-through text-slate-500">$160</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/jordan-idk.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">Jordan Sky-400</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$149</h3>
                  <h3 className="text-xs line-through text-slate-500">$180</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/just-do-it.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">AirForce 1</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$64</h3>
                  <h3 className="text-xs line-through text-slate-500">$99</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/thick-boys.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">Thick Boys</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$99</h3>
                  <h3 className="text-xs line-through text-slate-500">$139</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="best-sellers" className="flex flex-col justify-center pb-14 pt-5">
          <h1 className="text-center font-extrabold text-3xl">Best Sellers</h1>
          <h3 className="text-[10px] font-semibold text-center">PRODUCTS</h3>
          <div className="featured-container grid grid-cols-2 gap-3 px-3 mt-5">
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/new-balanced.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">NewYork Balance</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$124</h3>
                  <h3 className="text-xs line-through text-slate-500">$160</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/jordan-idk.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">Jordan Sky-400</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$149</h3>
                  <h3 className="text-xs line-through text-slate-500">$180</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/just-do-it.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">AirForce 1</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$64</h3>
                  <h3 className="text-xs line-through text-slate-500">$99</h3>
                </div>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image overflow-hidden rounded-lg">
                <img src="/sneakers/thick-boys.jpeg" alt="" />
              </div>
              <div className="product-info py-0.5 px-1.5">
                <h1 className="product-name text-sm font-semibold">Thick Boys</h1>
                <div className="flex items-center">
                  <h3 className="product-price font-semibold text-sm mr-1.5">$99</h3>
                  <h3 className="text-xs line-through text-slate-500">$139</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
