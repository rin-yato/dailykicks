import { ButtonBase } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { sanityClient } from "../sanity";
import { useRouter } from "next/router";

function SearchInput({ setResults }) {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const handleBack = () => {
    // if there is history, then go back to the previous page
    // check if last history is daily-kicks
    if (router.asPath.includes("dailykicks")) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    handleSearch();
  };

  const handleSearch = async () => {
    // on input change, fetch data from sanity
    // const query = `*[_type == "product" && name match "*${input}*" || _type == "product" && category->.name match "*${input}*" || _type == "product" && brand->.name match "*${input}*"]`;
    const query = `*[_type == "product" && [name, category->.name, brand->.name] match "*${input}*"]`;
    const results = await sanityClient.fetch(query);

    if (input.length <= 1) {
      setSearchResults([]);
      setResults([]);
    } else {
      setSearchResults(results);
      setResults(results);
    }
  };

  const handleClear = () => {
    setInput("");
    setSearchResults([]);
    setResults([]);
    inputRef.current.focus();
  };

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="flex justify-between gap-1 relative py-1 pr-3 pl-1">
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
            onChange={handleInput}
            value={input}
            placeholder="Search"
            className="bg-slate-100 w-full py-0.5 px-3 appearance-none"
          />
          {input.length > 0 && (
            <ButtonBase
              className="min-w-min h-min rounded-full absolute right-0 mr-0.5"
              onClick={() => handleClear()}
            >
              <i className="bx bx-x bx-sm"></i>
            </ButtonBase>
          )}
        </div>
        {/* <div className="absolute left-0 top-full pt-2 flex w-screen flex-col">
          {searchResults &&
            searchResults.map((result) => (
              <ButtonBase
                className="flex items-center gap-3 w-full justify-start px-2.5 py-2.5"
                key={result._id}
              >
                <i className="bx bx-history bx-sm"></i>
                <p className="text-base">{result.name}</p>
              </ButtonBase>
            ))}
        </div> */}
      </div>
    </div>
  );
}

export default SearchInput;
