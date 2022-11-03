/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity";
import Image from "next/image";

function ProductCard({ product }) {
  return (
    <Link href={`/sneakers/${product._id}`}>
      <div className="product-card cursor-pointer">
        <div className="product-image overflow-hidden rounded-lg">
          <Image
            src={urlFor(product.image).url()}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="product-info py-0.5 px-1.5">
          <h1 className="product-name text-sm font-semibold md:text-lg lg:text-xl">
            {product.name.length > 22
              ? `${product.name.substr(0, 19)}...`
              : product.name}
          </h1>
          <div className="flex items-center">
            <h3 className="product-price font-semibold text-sm mr-1.5 md:text-lg lg:text-xl">
              ${product.price}
            </h3>
            <h3 className="text-xs line-through text-slate-500 md:text-base lg:text-md">
              ${product.oldPrice}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
