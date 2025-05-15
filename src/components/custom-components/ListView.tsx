import React from 'react'
import ImageCarousel from './ImageCarousal';
import { LandPlot,MapPin } from 'lucide-react';
interface ListViewProps {
  Region: string;  // Changed String to string for TypeScript
  Name: string;
  Owners: string[];
  size: string;
  Images:String[]
}

interface ListViewComponentProps {
  items: ListViewProps[];  // Array of ListViewProps
}

function ListView({ items }: ListViewComponentProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="p-4 border rounded-lg shadow">
       <div className='flex flex-col gap-2'>
 <ImageCarousel images={item.Images} />
        <div>
          <h3 className="font-bold">{item.Name}</h3>
          <div className='flex gap-3'>
           <MapPin className='text-red-400' />
            <span>{item.Region}</span>

          </div>
            <div className='flex gap-3'>
           <LandPlot className='text-gray-400' />
            <span>{item.size}</span>

          </div>

         
          
          <div>
            <p>Owners:</p>
            <ul className="list-disc pl-5">
              {item.Owners.map((owner, ownerIndex) => (
                <li key={ownerIndex}>{owner}</li>
              ))}
            </ul>
          </div>
        </div>
       
          
        </div>
        </div>
      ))}
    </div>
  )
}

export default ListView