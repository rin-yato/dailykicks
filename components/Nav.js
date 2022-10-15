import Image from "next/image";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { Context } from "../layouts/Layout";

function Nav() {

  const { setValue, isOpen } = useContext(Context);
  
  const handleToggle = () => {
    setValue(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav
      className="
    bg-white px-5 pt-2.5 w-screen flex justify-between items-center
      fixed top-0 left-0 z-50"
    >
      <div className="h-min font-bold">Daily Kicks</div>
      <Button className="p-0 pl-1 min-w-min min-h-min ml-1 rounded-full" onClick={handleToggle}>
        <i className="bx bx-menu-alt-right bx-sm text-2xl text-slate-900"></i>
      </Button>
    </nav>
  );
}

export default Nav;
