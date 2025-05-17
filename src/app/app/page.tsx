'use client'
import { useState } from "react";
import Searchbar from "@/components/custom-components/searchbar";
import Map from "@/components/custom-components/Map";
import ListView from "@/components/custom-components/ListView";
import { WelcomeBanner } from "@/components/custom-components/welcome-banner";
import { Metadata } from "next";
import { ListViewProps } from "@/Models/models";
const dummyProperties: ListViewProps[] = [
  {
    Region: "North America",
    Name: "Luxury Condo Downtown",
    Owners: [
      { name: "John Smith", avatarUrl: "https://i.pravatar.cc/150?u=johnsmith" },
      { name: "Sarah Johnson", avatarUrl: "https://i.pravatar.cc/150?u=sarahjohnson" }
    ],
    size: "2,500 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  },
  {
    Region: "Europe",
    Name: "Beachfront Villa",
    Owners: [
      { name: "Michael Brown", avatarUrl: "https://i.pravatar.cc/150?u=michaelbrown" },
      { name: "Emma Wilson", avatarUrl: "https://i.pravatar.cc/150?u=emmawilson" }
    ],
    size: "4,200 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  },
  {
    Region: "Asia",
    Name: "Sky Tower Penthouse",
    Owners: [
      { name: "David Chen", avatarUrl: "https://i.pravatar.cc/150?u=davidchen" },
      { name: "Lisa Wang", avatarUrl: "https://i.pravatar.cc/150?u=lisawang" }
    ],
    size: "3,100 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  },
  {
    Region: "Australia",
    Name: "Harbor View Apartment",
    Owners: [
      { name: "James Taylor", avatarUrl: "https://i.pravatar.cc/150?u=jamestaylor" }
    ],
    size: "1,800 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  }
];
export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <WelcomeBanner />
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Property Portfolio</h2>
        <Searchbar
          value={search}
          onChange={setSearch}
          onSearch={(val) => {
            // Search functionality
          }}
        />
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mt-3">
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-3">Properties List</h3>
          <ListView items={dummyProperties}/>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-lg font-medium mb-3">Map View</h3>
          <Map/>
        </div>
      </div>
    </div>
  );
}
