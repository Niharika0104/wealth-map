import React, { useState, FormEvent } from "react";
import { MapPin, Search } from "lucide-react";
  import { cn } from "@/lib/utils";
interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  placeholder?: string;
 className?: string;

}

const Searchbar: React.FC<SearchbarProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
   className,
}) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
   <div className={cn("relative w-full", className)}>
  {/* Left icon */}
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <MapPin className="text-primary" />
  </div>

  {/* Input with enough right padding */}
  <input
    type="search"
    id="default-search"
    className="block w-full p-3 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
      hover:border-gray-400
      focus:outline-none focus:border-gray-400
      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required
  />

  {/* Right icon container with green bg and white icon */}
  <button
    type="submit"
    className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-green-700 rounded-r-lg
      text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600"
    aria-label="Search"
  >
    {/* Increased icon size for bolder look */}
    <Search size={22} strokeWidth={2.5} />
  </button>
</div>

  );
};

export default Searchbar;
