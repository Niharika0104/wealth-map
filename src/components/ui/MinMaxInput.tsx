"use client";

import React from "react";

interface MinMaxInputProps {
  label1: string;
  label2: string;
  min?: number | string;
  max?: number | string;
  onChangeMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const MinMaxInput: React.FC<MinMaxInputProps> = ({
  label1,
  label2,
  min,
  max,
  onChangeMin,
  onChangeMax,
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
    
      <div className="flex items-start gap-3">
        {/* Min input block */}
        <div className="flex flex-col items-start gap-1">
          <label className="text-xs font-medium">{label1}</label>
          <input
            type="number"
            value={min}
            onChange={onChangeMin}
            placeholder="Min"
            className="w-24 px-2 py-1 border rounded"
          />
        </div>

        {/* Dash with 75% down alignment */}
        <span className="relative top-[18px] text-lg font-semibold">-</span>

        {/* Max input block */}
        <div className="flex flex-col items-start gap-1">
          <label className="text-xs font-medium">{label2}</label>
          <input
            type="number"
            value={max}
            onChange={onChangeMax}
            placeholder="Max"
            className="w-24 px-2 py-1 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default MinMaxInput;
