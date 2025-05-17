import React, { useState, FormEvent } from "react";
import { MapPin,Search } from "lucide-react";
interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <div className="flex justify-center items-center">
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
         
         <MapPin className="text-primary"/>
        </div>
        <input type="search"
  id="default-search"
  className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
  hover:border-gray-400 
  focus:outline-none focus:border-gray-400 
  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
  placeholder={placeholder}
  value={value}
  onChange={(e) => onChange(e.target.value)}
  required
/>
        <button
          type="submit"
          className="text-white absolute end-1.5 bottom-1.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Search/>
        </button>
      </div>
    </form>
    </div>
  );
};

export default Searchbar;