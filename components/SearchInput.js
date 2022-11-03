import { ButtonBase } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { sanityClient } from "../sanity";
import { useRouter } from "next/router";

function SearchInput({ setResults }) {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleBack = () => {
    // check if last history is daily-kicks
    if (
      (window.location.href.includes("dailykicks") ||
        window.location.href.includes("127.0.0.1") ||
        window.location.href.includes("localhost")) &&
      window.history.length > 1
    ) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleInput = (e) => {
    inputRef.current.value = e.target.value;
    handleSearch();
  };

  const handleGo = (e) => {
    if (e.key === "Enter") {
      inputRef.current.blur();
    }
  };

  const handleSearch = async () => {
    // on input change, fetch data from sanity
    const query = `*[_type == "product" && [name, category->.name, brand->.name] match "*${inputRef.current.value}*"]`;
    const results = await sanityClient.fetch(query);

    if (inputRef.current.value.length === 0) {
      setSearchResults([]);
      setResults([]);
    } else {
      setSearchResults(results);
      setResults(results);
    }
  };

  const handleClear = () => {
    inputRef.current.value = "";
    setSearchResults([]);
    setResults([]);
    inputRef.current.focus();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="flex justify-between gap-1 relative py-2.5 px-3">
        <ButtonBase
          className="min-w-min h-min rounded-full p-1.5 bg-white"
          onClick={handleBack}
        >
          <i className="bx bxs-chevron-left bx-sm text-black"></i>
        </ButtonBase>
        <div className="flex items-center w-full relative">
          <input
            ref={inputRef}
            type="text"
            onKeyDown={handleGo}
            onChange={handleInput}
            placeholder="Search"
            className="bg-slate-100 w-full py-1.5 px-4 appearance-none rounded-full focus:outline-none"
          />
          {inputRef.current && inputRef.current.value.length > 0 && (
            <ButtonBase
              className="min-w-min h-min rounded-full absolute right-1.5 mr-0.5"
              onClick={() => handleClear()}
            >
              <i className="bx bx-x bx-sm"></i>
            </ButtonBase>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
