/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "../sanity";

function ProductCard({ product }) {
  return (
    <Link href={`/sneakers/${product._id}`}>
      <div className="product-card">
        <div className="product-image overflow-hidden rounded-lg">
          <img src={urlFor(product.image).url()} alt="" />
        </div>
        <div className="product-info py-0.5 px-1.5">
          <h1 className="product-name text-sm font-semibold">{product.name}</h1>
          <div className="flex items-center">
            <h3 className="product-price font-semibold text-sm mr-1.5">
              ${product.price}
            </h3>
            <h3 className="text-xs line-through text-slate-500">
              ${product.oldPrice}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
