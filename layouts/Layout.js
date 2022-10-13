import Head from "next/head";
import Aside from "../components/Aside";
import Nav from "../components/Nav";
import React, { useState } from "react";

export const Context = React.createContext({ isOpen: null, setValue: () => {} });

function Layout({ children }) {

  const [isOpen, setValue] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <Context.Provider value={{ isOpen, setValue }}>
        <Nav />
        <Aside />
      </Context.Provider>

      {children}
    </div>
  );
}

export default Layout;
