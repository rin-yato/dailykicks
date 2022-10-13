import Head from "next/head";


function NoNav({ children }) {

  return (
    <div className="flex flex-col md:flex-row">
      {children}
    </div>
  );
}

export default NoNav;
