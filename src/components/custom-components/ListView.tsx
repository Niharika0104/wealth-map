import React from 'react'
import ImageCarousel from './ImageCarousal';
import { LandPlot,MapPin,Bookmark,EyeIcon } from 'lucide-react';
import {  User,ListViewProps} from "@/Models/models";
import AvatarGroup from '@/components/custom-components/Avatargroup';
import { useState } from 'react';
import Pagination from './Pagination';

import { cn } from '@/lib/utils'; // if you already have it


interface ListViewComponentProps {
  items: ListViewProps[]; 
  columns?:number // Array of ListViewProps
}

function ListView({ items , columns = 2 }: ListViewComponentProps) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
   const columnClassMap: { [key: number]: string } = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
 const gridColumnClass = columnClassMap[columns] || 'grid-cols-2'; 
  return (
    <div>
     <div className={cn("grid gap-3", gridColumnClass)}>
      {currentItems.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow">
          <div className='flex flex-col gap-2'>
            <ImageCarousel images={item.Images} />
            <div>
              <h3 className="font-bold text-xl">{item.Name}</h3>
             {/* Location + Bookmark */}
<div className='flex gap-3 items-center mt-1'>
  <MapPin className='text-red-400 h-5 w-5' />
  <span className="text-base">{item.Region}</span>
  <div className="flex items-center gap-1 ml-auto">
    <Bookmark className='text-blue-800 h-4 w-4' />
    <span className='text-sm text-gray-600'>100K</span>
  </div>
</div>

{/* Size + Views */}
<div className='flex gap-3 items-center mt-1'>
  <LandPlot className='text-gray-400 h-5 w-5 ' />
  <span className="text-base">{item.size}</span>
  <div className="flex items-center gap-1 ml-auto">
    <EyeIcon className='text-blue-800 h-4 w-4' />
    <span className='text-sm text-gray-600'>810K</span>
  </div>
</div>

<div className="mt-3 flex items-center justify-between gap-6">
  <div className="flex flex-col items-center">
    <p className="font-semibold text-sm mb-1">Owners:</p>
    <AvatarGroup users={item.Owners} />
  </div>
</div>



            </div>
          </div>
        </div>
      ))}
    </div>
     <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default ListView