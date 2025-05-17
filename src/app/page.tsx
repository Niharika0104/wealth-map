'use client'
import { useState } from "react";
import Searchbar from "@/components/custom-components/searchbar";
import Map from "@/components/custom-components/Map";
import ListView from "@/components/custom-components/ListView";
import { Property ,ListViewProps} from '@/Models/models';
import { Filter } from "lucide-react";
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
   
<div className="flex flex-row gap-2 mt-3">
  <div className="w-1/2" >
    <ListView items={dummyProperties}/>
    </div>
    <div className="w-1/2 ">
  <Map/>
  </div>
</div>
   
  );
}