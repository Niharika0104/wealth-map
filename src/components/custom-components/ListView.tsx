import React from 'react'
import ImageCarousel from './ImageCarousal';
import { LandPlot,MapPin } from 'lucide-react';
import {  User,ListViewProps} from "@/Models/models";
import AvatarGroup from '@/components/custom-components/Avatargroup';


interface ListViewComponentProps {
  items: ListViewProps[];  // Array of ListViewProps
}

function ListView({ items }: ListViewComponentProps) {
  return (
     <div className="grid grid-cols-2 gap-4">
      {items.map((item, index) => (
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
  )
}

export default ListView