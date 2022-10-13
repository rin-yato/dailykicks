import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/Layout";



export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Daily Kicks</title>
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <main className="h-screen w-screen box-border">
        <div className="flex flex-col h-full">
          <div className="h-1/2 w-full bg-teal-300 flex items-center justify-center overflow-hidden p-7 relative">
            <img src="/sneakers/air-force-grey.png" className="-translate-x-1 scale-125 -translate-y-3 drop-shadow-[-10px_15px_5px_rgb(0,0,0,0.1)]" />
            <p className="absolute bottom-6 text-xl text-teal-800">Air Force 1</p>
          </div>
          <div className="h-1/2 w-full grid grid-cols-2 grid-rows-2 overflow-hidden">
            <div className="flex items-center justify-center bg-slate-300 relative">
              <img src="/sneakers/air-force-brown.png" className="-rotate-12 drop-shadow-[-5px_12px_4px_rgb(0,0,0,0.20)] -translate-x-1" />
              <p className="absolute bottom-3 text-sm text-white">Air Force 1</p>
            </div>
            <div className="flex items-center justify-center bg-yellow-100 relative">
              <img src="/sneakers/montera.png" className=" -scale-x-[1] drop-shadow-[-5px_12px_4px_rgb(0,0,0,0.20)] -translate-x" />
              <p className="absolute bottom-3 text-sm text-yellow-800">Montera</p>
            </div>
            <div className=" flex items-center justify-center bg-rose-200">
              <img src="/sneakers/balenciaga-1.png" className="-scale-x-[1] -translate-y-11 -rotate-12 drop-shadow-[-5px_12px_4px_rgb(0,0,0,0.20)] -translate-x-[15px]" />
              <p className="absolute bottom-3 text-sm text-rose-900">Balenciaga</p>
            </div>
            <div className="flex items-center justify-center bg-orange-200">
              <img src="/sneakers/air-force-blue.png" className="-translate-y-6 scale-125 -rotate-12 drop-shadow-[-5px_12px_4px_rgb(0,0,0,0.20)] -translate-x-1" />
              <p className="absolute bottom-3 text-sm text-white">Air Force Ice</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
