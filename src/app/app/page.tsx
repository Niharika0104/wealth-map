'use client'
import { useState } from "react";
import Searchbar from "@/components/custom-components/searchbar";
import Map from "@/components/custom-components/Map";
import ListView from "@/components/custom-components/PropertyCard";
import { Property ,ListViewProps} from '@/Models/models';
import { Filter } from "lucide-react";
import InteractiveMap from "@/components/custom-components/HomePage/InteractiveMap";
const addresses = [
  "1600 Amphitheatre Parkway, Mountain View, CA",
  "1 Apple Park Way, Cupertino, CA",
  "350 Fifth Avenue, New York, NY 10118",
  "4059 Mt Lee Dr, Hollywood, CA 90068",
  "1600 Pennsylvania Avenue NW, Washington, DC 20500",
  "500 S Buena Vista St, Burbank, CA 91521",
  "1111 S Figueroa St, Los Angeles, CA 90015",
  "233 S Wacker Dr, Chicago, IL 60606",
  "700 Exposition Park Dr, Los Angeles, CA 90037",
  "1201 S Figueroa St, Los Angeles, CA 90015"
]
const dummyProperties:ListViewProps[] = [
  {
    Region: "North America",
    Name: "Luxury Condo Downtown",
    Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "2,500 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']
  },
  {
    Region: "Europe",
    Name: "Beachfront Villa",
   Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "4,200 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  },
  {
    Region: "Asia",
    Name: "Sky Tower Penthouse",
    Owners: [{
      name:"John Doe",
      avatarUrl:'https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr'

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "3,100 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  },
  {
    Region: "Australia",
    Name: "Harbor View Apartment",
   Owners: [{
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    },
  {
      name:"John Doe",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A"

    },
  {
      name:"Sarah Johnson",
      avatarUrl:"https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK"

    }],
    size: "1,800 sqft",
    Images:['https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr','https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW']

  }
];
export default function Home() {
   const [search, setSearch] = useState("");
  return (
   <div>
    <div className="flex flex-row gap-2 mt-3 pr-4 w-[40%] float-end mb-5">
   
        <Searchbar
          placeholder="Search for properties"
     
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
  
    
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <Filter className="mr-2" />
          Filter
        </button>
    </div>
  
<div className="flex flex-row gap-2 mt-3 pr-4 w-full">
    
  <div className="w-1/2" >
    <ListView items={dummyProperties}/>
    </div>
    <div className="w-1/2 ">
 <InteractiveMap
  properties={addresses}
  className="w-full h-full"
  mapType="streets"
  onViewChange={(center, zoom) => {
   
  }}
/>

  </div>
</div>
   </div>
  );
}