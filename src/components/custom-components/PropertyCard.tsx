import React, { useState } from 'react';
import ImageCarousel from './ImageCarousal';
import { LandPlot, MapPin, Bookmark, EyeIcon } from 'lucide-react';
import { User, ListViewProps } from "@/Models/models";
import AvatarGroup from '@/components/custom-components/Avatargroup';
import Pagination from './Pagination';
import { cn } from '@/lib/utils';

interface ListViewComponentProps {
  items: ListViewProps[];
  columns?: number;
}

function ListView({ items, columns = 2 }: ListViewComponentProps) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
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
    <div className="px-2 sm:px-4 md:px-6 lg:px-8">
      <div className={cn("grid gap-6", gridColumnClass)}>
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <ImageCarousel images={item.Images} />

            <div className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-gray-900 truncate">{item.Name}</h3>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span>{item.Region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bookmark className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-800 font-semibold">{item.BookmarkCount || '100K'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <LandPlot className="h-4 w-4 text-gray-400" />
                  <span>{item.size}</span>
                </div>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-800 font-semibold">{item.ViewCount || '810K'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <span className="text-sm text-gray-500 font-medium">Owned By</span>
                <AvatarGroup users={item.Owners} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default ListView;
