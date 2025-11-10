import React from "react";
import { X } from "lucide-react";

const ImagePreviewCard = ({ previewUrl, onClose }) => {
  if (!previewUrl) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-sm z-50">
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 md:p-6 w-[90%] md:w-[500px] max-h-[80vh] flex flex-col items-center overflow-hidden">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Close preview"
        >
          <X size={22} />
        </button>

        <div className="w-full flex justify-center items-center overflow-hidden rounded-xl border border-gray-200 shadow-inner">
          <img
            src={previewUrl}
            alt="Converted preview"
            className="max-w-full max-h-[60vh] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        <p className="mt-4 text-gray-600 text-sm">
          ✅ Image successfully converted!
        </p>
      </div>
    </div>
  );
};

export default ImagePreviewCard;
