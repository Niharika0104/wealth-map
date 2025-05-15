import React from 'react'
import ImageCarousel from './ImageCarousal';
import { LandPlot,MapPin } from 'lucide-react';
import {  User,ListViewProps} from "@/Models/models";
import AvatarGroup from '@/components/custom-components/Avatargroup';
import { useState } from 'react';
import Pagination from './Pagination';


interface ListViewComponentProps {
  items: ListViewProps[];  // Array of ListViewProps
}

function ListView({ items }: ListViewComponentProps) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
     <div className="grid grid-cols-2 gap-4">
      {currentItems.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow">
          <div className='flex flex-col gap-2'>
            <ImageCarousel images={item.Images} />
            <div>
              <h3 className="font-bold text-xl">{item.Name}</h3>
              <div className='flex gap-3 items-center mt-2'>
                <MapPin className='text-red-400 h-5 w-5' />
                <span className="text-base">{item.Region}</span>
              </div>
              <div className='flex gap-3 items-center mt-2'>
                <LandPlot className='text-gray-400 h-5 w-5' />
                <span className="text-base">{item.size}</span>
              </div>
              <div className="mt-3">
                <p className='font-semibold text-lg mb-2'>Owners:</p>
                <AvatarGroup users={item.Owners}/>
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