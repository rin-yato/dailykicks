import React from "react";
import NoNav from "../../layouts/NoNav";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function ProductDetail(props) {
  const router = useRouter();

  return (
    <NoNav>
      <div className="w-screen flex flex-col">
        <div className="fixed top-1.5 left-0 right-0 flex justify-between py-1 px-3">
          <Button
            className="min-w-min rounded-full p-2"
            onClick={() => router.back()}
          >
            <i className="bx bx-arrow-back bx-sm text-black"></i>
          </Button>
          <Button className="min-w-min rounded-full p-2">
            <i className="bx bx-heart bx-sm text-black"></i>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center p-3">
          <div className="bg-slate-200 rounded-2xl">
            <img src="/sneakers/air-force-grey.png" className="" />
          </div>
          <div className="w-full flex flex-col items-start justify-center">
            <p className="text-sm text-black">Nike</p>
            <p className="text-2xl font-bold text-black">Air Force 1</p>
            <p className="text-sm text-black">$100</p>
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
