'use client';
import ImageCarousel from '@/components/custom-components/ImageCarousal';
import ListView from '@/components/custom-components/PropertyCard';
import OwnerList from '@/components/custom-components/OwnerDetailsCard';
import { ListViewProps } from '@/Models/models';
import { LandPlot, MapPin, Bookmark, View, DollarSign, Crop, EyeIcon } from 'lucide-react';
import React from 'react'

const images = [
  'https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bOwZn31V4c2E1vZd8WLHXPM7aDUyh6V9RjiFr',
  'https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bayVgJXE6AeYL2f9Hh50yvUsMjuBizQrtEDaW'
];
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

function page() {
  const propetyInfo = {
    Region: "North America",
    Name: "Luxury Condo Downtown",
    BooksMarks: 34,
    Views: "115K",
    PropertyType: "Residential",
    EstimatedValue: "$1,200,000",
    Address: "123 Main St, New York, NY 10001",
    Description: "A luxurious condo located in the heart of downtown, offering stunning views and modern amenities.",
    Owners: [
      { name: "John Doe", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A" },
      { name: "Sarah Johnson", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK" },
      { name: "John Doe", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A" },
      { name: "Sarah Johnson", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK" },
      { name: "Miley Doe", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A" },
      { name: "Fionna Johnson", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK" },
      { name: "Arrie Doe", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A" },
      { name: "Huuna Johnson", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK" },
      { name: "Finnaa Doe", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6b3Se7jv81uHyLWkg58FX9Zcde6GzhqiVTRJ3A" },
      { name: "Utuha Johnson", avatarUrl: "https://mdb43gc8n0.ufs.sh/f/m6WitHx8Oy6bjwdFrdQFQobNwjy5Y18Gf3lDPdZzkgm0pRqK" },
    ],
    size: "2,500 sqft",
    Images: images,
    lables: ["Luxury", "Institutional Property", "Under Construction"],
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-10'>
        {/* LEFT COLUMN */}
        <div className='flex flex-col gap-4'>
          <ImageCarousel images={images} />

          <div className='flex flex-col gap-3'> {/* Reduced gap between title & content */}
            <div>
              <span className='font-semibold text-lg'>Name</span>
              <div className=''>{propetyInfo.Name}</div> {/* Slight space below label */}
            </div>

            <div>
              <span className='font-semibold text-lg'>Details</span>
              <div className='grid md:grid-cols-3 gap-y-6 gap-x-4 mt-1'>
                {[
                  {
                    icon: <DollarSign className="text-green-800 w-4 h-4" />,
                    bg: "bg-green-200",
                    label: "Estimated Price",
                    value: propetyInfo.EstimatedValue
                  },
                  {
                    icon: <Crop className="text-yellow-800 w-4 h-4" />,
                    bg: "bg-yellow-200",
                    label: "Size",
                    value: propetyInfo.size
                  },
                  {
                    icon: <EyeIcon className="text-blue-800 w-4 h-4" />,
                    bg: "bg-blue-200",
                    label: "Views",
                    value: propetyInfo.Views
                  },
                  {
                    icon: <Bookmark className="text-pink-800 w-4 h-4" />,
                    bg: "bg-pink-200",
                    label: "BookMarks",
                    value: propetyInfo.BooksMarks
                  },
                ].map((item, i) => (
                  <div key={i} className='flex gap-3 items-center'>
                    <div className={`h-9 w-9 ${item.bg} rounded-md flex items-center justify-center shadow-[0_0_10px_3px_rgba(0,0,0,0.1)]`}>
                      {item.icon}
                    </div>
                    <div className='flex flex-col gap-0.5'>
                      <span className='font-semibold '>{item.label}</span>
                      <div>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className='font-semibold text-lg'>Address</span>
              <div className=''>{propetyInfo.Address}</div>
            </div>

            <div>
              <span className='font-semibold text-lg'>Description</span>
              <div className=''>{propetyInfo.Description}</div>
            </div>

            <div>
              <span className='font-semibold text-lg'>Labels</span>
              <div className='flex gap-2 flex-wrap'>
                {propetyInfo.lables.map((label, index) => (
                  <div key={index} className='bg-green-200 text-green-800 px-2 py-1 rounded-md text-sm'>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className='flex justify-center'>
          <OwnerList />
        </div>
      </div>

      <div className="w-[90%] border-b border-gray-300 mx-auto p-2" />
      <div className='font-semibold text-2xl'>Similar Properties</div>
 <ListView items={dummyProperties} columns={4}/>
    </div>
  );
}

export default page;
