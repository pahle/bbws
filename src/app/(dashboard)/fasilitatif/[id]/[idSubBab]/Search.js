"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [query] = useDebounce(search, 500);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if(!query){
        router.push('?')
    }else{
        router.push(`?search=${query}`)
    }
  }, [query, router]);
  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleChange}
        className="border-2 border-gray-400 p-2 rounded-lg w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
