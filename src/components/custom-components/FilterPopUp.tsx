"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import MultiSelectDropdown from "@/components/ui/MultiSelectdropdown";
import MinMaxInput from "@/components/ui/MinMaxInput";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const propertyTypes = [
  "Apartment", "House", "Villa", "Plot/Land", "Studio", "Farmhouse",
  "Commercial", "Industrial", "Office Space", "Shop", "Warehouse",
  "Malls", "Resort", "Guest House", "Hostel", "PG", "Co-living Space",
  "Farm Land", "Cottage", "Penthouse", "kjkjh", "jsjfj"
];

const owners = [
  "John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis",
  "Diana Prince", "Ethan Hunt", "Fiona Green", "George White", "Hannah Black",
  "Ian Gray"
];

const constructionTypes = ["New Construction", "Resale", "Under Construction"];

const locations = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville"
];

const areaUnits = [
  "Square Feet", "Square Yards", "Square Meters",
  "Acres", "Hectares", "Cents", "Bigha", "Guntha", "Marla"
];

export default function FilterPopup({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedOwners, setSelectedOwners] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedConstructionTypes, setSelectedConstructionTypes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [selectedAreaUnit, setSelectedAreaUnit] = useState(areaUnits[0]);
    const [selectedFurnishingTypes, setSelectedFurnishingTypes] = useState<string[]>([]);
  const [selectedBedroomCounts, setSelectedBedroomCounts] = useState<string[]>([]);


  const resetFilters = () => {
    setSelectedPropertyTypes([]);
    setSelectedOwners([]);
    setSelectedLocations([]);
    setSelectedConstructionTypes([]);
    setMinPrice("");
    setMaxPrice("");
    setMinArea("");
    setMaxArea("");
    setSelectedAreaUnit(areaUnits[0]);
     setSelectedFurnishingTypes([]);
    setSelectedBedroomCounts([]);
  };
  const showExtraFiltersFor = ["Apartment", "Villa", "Studio", "Penthouse"];
const furnishingTypes = ["Fully Furnished", "Semi Furnished", "Unfurnished"];
const bedroomCounts = ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"];
 const shouldShowExtraFilters = selectedPropertyTypes.some(type =>
    showExtraFiltersFor.includes(type)
  );

  const handleApply = () => {
    // trigger search logic here if needed
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="min-w-[45%] max-h-[70vh] overflow-y-auto rounded-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-center">
            Filters
          </DialogTitle>
          <div className="w-full border-b border-gray-300 my-2" />
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* First row: Property Types + Owners */}
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Property Type(s)</label>
              <MultiSelectDropdown
                options={propertyTypes}
                selected={selectedPropertyTypes}
                label="Select Property Type(s)"
                onChange={setSelectedPropertyTypes}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Property Owner(s)</label>
              <MultiSelectDropdown
                options={owners}
                selected={selectedOwners}
                label="Select Owner(s)"
                onChange={setSelectedOwners}
              />
            </div>
          </div>

          {/* Second row: Construction Types + Locations */}
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Construction Type(s)</label>
              <MultiSelectDropdown
                options={constructionTypes}
                selected={selectedConstructionTypes}
                label="Select Construction Type(s)"
                onChange={setSelectedConstructionTypes}
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Location(s)</label>
              <MultiSelectDropdown
                options={locations}
                selected={selectedLocations}
                label="Select Location(s)"
                onChange={setSelectedLocations}
              />
            </div>
          </div>

          {/* Third row: Price Range */}
{/* Price Range */}
<div className="flex gap-2 items-center">
  <MinMaxInput
    label1="Min Price"
    label2="Max Price"
    min={minPrice}
    max={maxPrice}
    onChangeMin={(e) => setMinPrice(e.target.value)}
    onChangeMax={(e) => setMaxPrice(e.target.value)}
  />
  <MinMaxInput
    label1="Min Area"
    label2="Max Area"
    min={minArea}
    max={maxArea}
    onChangeMin={(e) => setMinArea(e.target.value)}
    onChangeMax={(e) => setMaxArea(e.target.value)}
  />
<div>
  <label className="font-medium">Area Unit</label>
  <Select
    value={selectedAreaUnit}
    onValueChange={setSelectedAreaUnit}
  >
    <SelectTrigger className="w-36 ">
      <SelectValue placeholder="Area Unit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {areaUnits.map((unit) => (
          <SelectItem key={unit} value={unit}>
            {unit}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
</div>

          {shouldShowExtraFilters && (
            <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Furnishing Type(s)</label>
                <MultiSelectDropdown
                  options={furnishingTypes}
                  selected={selectedFurnishingTypes}
                  label="select Furnishing Type"
                  
                  onChange={setSelectedFurnishingTypes}
                />
              </div>
           <div className="flex-1 flex flex-col gap-1">
              <label className="font-medium">Bedroom Count(s)</label>
                <MultiSelectDropdown
                  options={bedroomCounts}
                  selected={selectedBedroomCounts}
                  label="select BHK Count"
                 
                  onChange={setSelectedBedroomCounts}
                />
              </div>
            </div>
          )}
         
        </div>

        <div className="flex justify-between items-center pt-6 border-t mt-6">
          <Button variant="outline" onClick={resetFilters}>
            Reset
          </Button>
          <Button onClick={handleApply}>Show 135 results</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
