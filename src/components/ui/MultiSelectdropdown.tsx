"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import clsx from "clsx";

type MultiSelectDropdownProps = {
  label?: string;
  options: string[];
  selected?: string[];
  onChange?: (selected: string[]) => void;
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  label = "Select Options",
  options,
  selected = [],
  onChange = () => {},
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleToggle = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 1. Ensure sufficient options for testing
  const hasEnoughOptions = filteredOptions.length > 5; // Adjust '5' as needed

  return (
    <DropdownMenu modal={false} >
      <DropdownMenuTrigger asChild>
       <Button variant="outline" className="min-w-[200px] justify-between">
  <span>{label}</span>
  <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
       align="end" className="bg-white overflow-y-scroll h-96"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        <div className="p-2  top-0 bg-white z-10 border-b border-gray-200">
          <Input
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-8"
          />
        </div>

        {/* 2.  Check for enough options, and apply style */}
        <div
          >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                className={clsx(
                  "flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-muted rounded-sm text-sm",
                  selected.includes(option) && "bg-muted"
                )}
                onClick={() => handleToggle(option)}
              >
                <span>{option}</span>
                {selected.includes(option) && (
                  <Check className="h-4 w-4 text-primary" />
                )}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-muted-foreground">
              No results found
            </div>
          )}
        </div>
 
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelectDropdown;
