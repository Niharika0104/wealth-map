import React from "react";

import { AvatarGroupProps} from "@/Models/models";
const AvatarGroup: React.FC<AvatarGroupProps> = ({ users }) => {
  const visibleUsers = users.slice(0, 3);
  const hiddenUsers = users.slice(3);

  return (
    <div className="flex -space-x-3 relative">
      {visibleUsers.map((user, index) => (
        <div key={index} className="relative group">
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="inline-block size-8 rounded-full ring-2 ring-white"
          />
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20">
            {user.name}
          </div>
        </div>
      ))}

      {hiddenUsers.length > 0 && (
        <div className="relative group">
          <div className="inline-flex items-center justify-center size-8 rounded-full bg-gray-200 text-gray-700 ring-2 ring-white text-sm font-medium">
            +{hiddenUsers.length}
          </div>

          {/* Tooltip dropdown on hover */}
          
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
