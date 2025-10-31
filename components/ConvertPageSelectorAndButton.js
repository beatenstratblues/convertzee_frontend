"use client";
import { useState } from "react";

const ConvertPageSelectorAndButton = ({
  defaultOption,
  specificConversionPage,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || "jpg");
  return (
    <div className="flex justify-center items-center mt-6">
      {!specificConversionPage && (
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="border border-gray-300 rounded-md py-2.5 px-4"
        >
          <option value="jpg">JPG</option>
          <option value="png">PNG</option>
          <option value="tiff">TIFF</option>
          <option value="avif">AVIF</option>
          <option value="webp">WEBP</option>
        </select>
      )}
      <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-50">
        Convert to {selectedOption.toUpperCase()}
      </button>
    </div>
  );
};

export default ConvertPageSelectorAndButton;
