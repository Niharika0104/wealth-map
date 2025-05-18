'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
const owners = [
  {
    id: 1,
    name: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    propertiesOwned: 3,
    ownershipStake: '25%',
    netWorth: '₹5.6 Cr (est.)',
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    propertiesOwned: 5,
    ownershipStake: '45%',
    netWorth: '₹9.2 Cr (est.)',
  },
  // Add more owner data...
];

const OwnerCard = ({ owner }) => (
  <div className="bg-white shadow rounded-lg p-5 w-full sm:w-80">
    <div className="flex items-center space-x-4">
      <img
        src={owner.avatar}
        alt={owner.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{owner.name}</h2>
        <p className="text-sm text-gray-500">
          Properties Owned: {owner.propertiesOwned}
        </p>
      </div>
    </div>
    <div className="mt-4 space-y-1 text-sm text-gray-600">
      <p>📊 Ownership Stake: {owner.ownershipStake}</p>
      <p>💰 Estimated Net Worth: {owner.netWorth}</p>
    </div>
     <div className="mt-4">
      <Link href={`/owners/${owner.id}`}>
        <div className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium">
          View Detailed Portfolio <ExternalLink className="ml-1" size={16} /></div>
      </Link>
    </div>
  </div>
);

const OwnersList = () => {
  const [search, setSearch] = useState('');

  const filteredOwners = owners.filter(owner =>
    owner.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-6">
      <h1 className="text-4xl font-bold mb-4">Owners</h1>

      {/* Search Bar */}
<input
  type="text"
  placeholder="Search owners..."
  className="mb-6 p-3 border border-gray-300 rounded-md w-full max-w-md focus:outline-none focus:ring-0"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      {/* Cards Grid */}
      <div className="flex flex-col gap-4">
        {filteredOwners.map((owner) => (
          <OwnerCard key={owner.id} owner={owner} />
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="mt-6 flex justify-center">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Previous</button>
        <button className="ml-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">Next</button>
      </div>
    </div>
  );
};

export default OwnersList;
