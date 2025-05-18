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
    <div>
      <div className={cn("grid gap-6", gridColumnClass)}>
        {currentItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <ImageCarousel images={item.Images} />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">{item.Name}</h3>

              {/* Location + Bookmark */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-1">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-red-500 mr-1" />
                  <span>{item.Region}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bookmark className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-800 font-medium">{item.BookmarkCount || '100K'}</span>
                </div>
              </div>

              {/* Size + Views */}
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                <div className="flex items-center">
                  <LandPlot className="h-4 w-4 text-gray-500 mr-1" />
                  <span>{item.size}</span>
                </div>
                <div className="flex items-center gap-1">
                  <EyeIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-800 font-medium">{item.ViewCount || '810K'}</span>
                </div>
              </div>

              {/* Owners */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground font-medium">Owned By</span>
                <AvatarGroup users={item.Owners} />
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
  );
}

export default ListView;
